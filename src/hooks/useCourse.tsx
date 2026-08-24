import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { courses as courseData, DEMO_USER_ID, modules as moduleData, questions as questionData } from '@/data/trainingData';
import { useAuth } from './useAuth';

export interface Course {
  id: string;
  title: string;
  description: string | null;
  duration_minutes: number;
  version: string;
  active: boolean;
  category: string | null;
}

export interface CourseWithProgress extends Course {
  module_count: number;
  progress_percentage: number;
  has_certificate: boolean;
  category: string | null;
}

export interface Module {
  id: string;
  course_id: string;
  sequence: number;
  title: string;
  type: 'lesson' | 'exam';
  estimated_minutes: number;
  body_html: string;
}

export interface Question {
  id: string;
  module_id: string;
  prompt: string;
  choices: { id: string; text: string }[];
  correct_choice: string;
  rationale: string | null;
  sequence?: number;
}

export interface Progress {
  id: string;
  user_id: string;
  module_id: string;
  completed: boolean;
  completed_at: string | null;
  last_viewed_at: string | null;
}

export interface Attempt {
  id: string;
  user_id: string;
  module_id: string;
  score: number;
  passed: boolean;
  answers: Record<string, string>;
  submitted_at: string;
}

export interface Certificate {
  id: string;
  user_id: string;
  course_id: string;
  certificate_id: string;
  course_version: string;
  issued_at: string;
  pdf_url: string | null;
}

export interface Enrollment {
  id: string;
  user_id: string;
  course_id: string;
  enrolled_at: string;
}

interface LocalTrainingState {
  enrollments: Enrollment[];
  progress: Progress[];
  attempts: Attempt[];
  certificates: Certificate[];
}

const STORAGE_KEY = 'tsite8.training.localState.v1';

const defaultState: LocalTrainingState = {
  enrollments: [
    {
      id: 'enrollment-ot-csir-core',
      user_id: DEMO_USER_ID,
      course_id: 'ot-csir-core',
      enrolled_at: '2026-01-01T00:00:00.000Z',
    },
  ],
  progress: [],
  attempts: [],
  certificates: [],
};

function readState(): LocalTrainingState {
  if (typeof window === 'undefined') return defaultState;

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState;
    return { ...defaultState, ...JSON.parse(raw) };
  } catch {
    return defaultState;
  }
}

function writeState(nextState: LocalTrainingState) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextState));
}

function invalidateLocalQueries(queryClient: ReturnType<typeof useQueryClient>) {
  queryClient.invalidateQueries({ queryKey: ['courses'] });
  queryClient.invalidateQueries({ queryKey: ['organization-courses'] });
  queryClient.invalidateQueries({ queryKey: ['enrollments'] });
  queryClient.invalidateQueries({ queryKey: ['progress'] });
  queryClient.invalidateQueries({ queryKey: ['attempts'] });
  queryClient.invalidateQueries({ queryKey: ['certificate'] });
  queryClient.invalidateQueries({ queryKey: ['user-certificates'] });
}

function getCourseProgress(courseId: string, progress: Progress[]) {
  const courseModules = moduleData.filter((module) => module.course_id === courseId);
  if (courseModules.length === 0) return 0;

  const completed = courseModules.filter((module) =>
    progress.some((item) => item.module_id === module.id && item.completed)
  );

  return Math.round((completed.length / courseModules.length) * 100);
}

export function useCourses() {
  return useQuery({
    queryKey: ['courses'],
    queryFn: async () => {
      const state = readState();

      return courseData
        .filter((course) => course.active)
        .sort((a, b) => a.title.localeCompare(b.title))
        .map((course) => ({
          ...course,
          module_count: moduleData.filter((module) => module.course_id === course.id).length,
          progress_percentage: getCourseProgress(course.id, state.progress),
          has_certificate: state.certificates.some((certificate) => certificate.course_id === course.id),
        })) as CourseWithProgress[];
    },
  });
}

export function useCourse(courseId?: string) {
  return useQuery({
    queryKey: ['course', courseId],
    queryFn: async () => {
      if (!courseId) return null;
      return (courseData.find((course) => course.id === courseId && course.active) ?? null) as Course | null;
    },
    enabled: !!courseId,
  });
}

export function useActiveCourse() {
  return useQuery({
    queryKey: ['active-course'],
    queryFn: async () => (courseData.find((course) => course.active) ?? null) as Course | null,
  });
}

export function useEnrollments() {
  const { user } = useAuth();

  return useQuery({
    queryKey: ['enrollments', user?.id],
    queryFn: async () => readState().enrollments.filter((enrollment) => enrollment.user_id === user?.id),
    enabled: !!user,
  });
}

export function useEnrollInCourse() {
  const queryClient = useQueryClient();
  const { user } = useAuth();

  return useMutation({
    mutationFn: async ({ courseId }: { courseId: string }) => {
      if (!user) throw new Error('Not authenticated');

      const state = readState();
      const existing = state.enrollments.find(
        (enrollment) => enrollment.user_id === user.id && enrollment.course_id === courseId
      );

      if (existing) return existing;

      const enrollment = {
        id: `enrollment-${courseId}-${Date.now()}`,
        user_id: user.id,
        course_id: courseId,
        enrolled_at: new Date().toISOString(),
      };

      writeState({ ...state, enrollments: [...state.enrollments, enrollment] });
      return enrollment;
    },
    onSuccess: () => invalidateLocalQueries(queryClient),
  });
}

export function useModules(courseId: string | undefined) {
  return useQuery({
    queryKey: ['modules', courseId],
    queryFn: async () => {
      if (!courseId) return [];
      return moduleData
        .filter((module) => module.course_id === courseId)
        .sort((a, b) => a.sequence - b.sequence) as Module[];
    },
    enabled: !!courseId,
  });
}

export function useQuestions(moduleId: string | undefined) {
  return useQuery({
    queryKey: ['questions', moduleId],
    queryFn: async () => {
      if (!moduleId) return [];
      return questionData
        .filter((question) => question.module_id === moduleId)
        .sort((a, b) => (a.sequence ?? 0) - (b.sequence ?? 0)) as Question[];
    },
    enabled: !!moduleId,
  });
}

export function useProgress(courseId?: string) {
  const { user } = useAuth();

  return useQuery({
    queryKey: ['progress', user?.id, courseId],
    queryFn: async () => {
      if (!user) return [];
      const state = readState();
      const userProgress = state.progress.filter((item) => item.user_id === user.id);

      if (!courseId) return userProgress;

      const moduleIds = moduleData.filter((module) => module.course_id === courseId).map((module) => module.id);
      return userProgress.filter((item) => moduleIds.includes(item.module_id));
    },
    enabled: !!user,
  });
}

export function useAttempts(moduleId?: string) {
  const { user } = useAuth();

  return useQuery({
    queryKey: ['attempts', user?.id, moduleId],
    queryFn: async () => {
      if (!user) return [];
      return readState().attempts
        .filter((attempt) => attempt.user_id === user.id && (!moduleId || attempt.module_id === moduleId))
        .sort((a, b) => b.submitted_at.localeCompare(a.submitted_at));
    },
    enabled: !!user,
  });
}

export function useCertificate(courseId?: string) {
  const { user } = useAuth();

  return useQuery({
    queryKey: ['certificate', user?.id, courseId],
    queryFn: async () => {
      if (!user) return null;
      return (
        readState().certificates.find(
          (certificate) => certificate.user_id === user.id && (!courseId || certificate.course_id === courseId)
        ) ?? null
      );
    },
    enabled: !!user,
  });
}

export function useCertificates() {
  const { user } = useAuth();

  return useQuery({
    queryKey: ['user-certificates', user?.id],
    queryFn: async () => {
      if (!user) return [];
      return readState().certificates.filter((certificate) => certificate.user_id === user.id);
    },
    enabled: !!user,
  });
}

export function findCertificate(certificateId: string) {
  const normalized = certificateId.trim().toUpperCase();
  return readState().certificates.find((certificate) => certificate.certificate_id === normalized) ?? null;
}

export function useUpdateProgress() {
  const queryClient = useQueryClient();
  const { user } = useAuth();

  return useMutation({
    mutationFn: async ({ moduleId, completed }: { moduleId: string; completed: boolean }) => {
      if (!user) throw new Error('Not authenticated');

      const state = readState();
      const now = new Date().toISOString();
      const existing = state.progress.find((item) => item.user_id === user.id && item.module_id === moduleId);
      const nextProgress = existing
        ? state.progress.map((item) =>
            item.id === existing.id
              ? { ...item, completed, completed_at: completed ? now : null, last_viewed_at: now }
              : item
          )
        : [
            ...state.progress,
            {
              id: `progress-${moduleId}-${Date.now()}`,
              user_id: user.id,
              module_id: moduleId,
              completed,
              completed_at: completed ? now : null,
              last_viewed_at: now,
            },
          ];

      writeState({ ...state, progress: nextProgress });
    },
    onSuccess: () => invalidateLocalQueries(queryClient),
  });
}

export function useSubmitAttempt() {
  const queryClient = useQueryClient();
  const { user } = useAuth();

  return useMutation({
    mutationFn: async ({
      moduleId,
      answers,
      questions,
      isExam,
    }: {
      moduleId: string;
      answers: Record<string, string>;
      questions: Question[];
      isExam: boolean;
    }) => {
      if (!user) throw new Error('Not authenticated');

      const correctCount = questions.filter((question) => answers[question.id] === question.correct_choice).length;
      const score = questions.length > 0 ? correctCount / questions.length : 1;
      const passed = isExam ? score >= 0.8 : score === 1;

      const attempt = {
        id: `attempt-${moduleId}-${Date.now()}`,
        user_id: user.id,
        module_id: moduleId,
        score,
        passed,
        answers,
        submitted_at: new Date().toISOString(),
      };

      const state = readState();
      writeState({ ...state, attempts: [attempt, ...state.attempts] });

      return { score, passed, correctCount, totalQuestions: questions.length };
    },
    onSuccess: () => invalidateLocalQueries(queryClient),
  });
}

export function useIssueCertificate() {
  const queryClient = useQueryClient();
  const { user } = useAuth();

  return useMutation({
    mutationFn: async ({ courseId, courseVersion }: { courseId: string; courseVersion: string }) => {
      if (!user) throw new Error('Not authenticated');

      const state = readState();
      const existing = state.certificates.find(
        (certificate) => certificate.user_id === user.id && certificate.course_id === courseId
      );

      if (existing) return existing;

      const randomBytes = crypto.getRandomValues(new Uint8Array(8));
      const certId =
        'CSIR-' +
        Array.from(randomBytes)
          .map((byte) => byte.toString(36).toUpperCase())
          .join('')
          .slice(0, 10);

      const certificate = {
        id: `certificate-${courseId}-${Date.now()}`,
        user_id: user.id,
        course_id: courseId,
        certificate_id: certId,
        course_version: courseVersion,
        issued_at: new Date().toISOString(),
        pdf_url: null,
      };

      writeState({ ...state, certificates: [...state.certificates, certificate] });
      return certificate;
    },
    onSuccess: () => invalidateLocalQueries(queryClient),
  });
}

export function isModuleUnlocked(module: Module, modules: Module[], progress: Progress[]): boolean {
  if (module.sequence === 1) return true;

  const prevModule = modules.find((item) => item.sequence === module.sequence - 1);
  if (!prevModule) return true;

  return progress.some((item) => item.module_id === prevModule.id && item.completed);
}

export function calculateProgressPercentage(modules: Module[], progress: Progress[]): number {
  if (modules.length === 0) return 0;

  const completedCount = modules.filter((module) =>
    progress.some((item) => item.module_id === module.id && item.completed)
  ).length;

  return Math.round((completedCount / modules.length) * 100);
}
