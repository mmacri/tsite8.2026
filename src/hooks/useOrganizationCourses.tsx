import { useCourses } from '@/hooks/useCourse';

export interface OrganizationCourse {
  id: string;
  title: string;
  description: string | null;
  category: string | null;
  duration_minutes: number;
  version: string;
  module_count: number;
  progress_percentage: number;
  has_certificate: boolean;
}

export function useOrganizationCourses() {
  return useCourses();
}

export function useCanAccessCourse(courseId: string | undefined) {
  return {
    data: !!courseId,
    isLoading: false,
  };
}

export function useHasOrganization() {
  return {
    hasOrganization: true,
    isLoading: false,
  };
}
