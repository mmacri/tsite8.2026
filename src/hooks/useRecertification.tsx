import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { addDays, differenceInDays, isPast } from 'date-fns';

export interface RecertificationSchedule {
  id: string;
  organization_id: string;
  course_id: string;
  schedule_type: 'monthly' | 'quarterly' | 'annually' | 'custom';
  custom_days: number | null;
  enabled: boolean;
  created_at: string;
  updated_at: string;
}

export type RecertificationStatus = 'current' | 'upcoming' | 'due' | 'overdue' | 'none';

function getScheduleDays(scheduleType: string, customDays: number | null): number {
  switch (scheduleType) {
    case 'monthly':
      return 30;
    case 'quarterly':
      return 90;
    case 'annually':
      return 365;
    case 'custom':
      return customDays || 365;
    default:
      return 365;
  }
}

export function getRecertificationDueDate(
  certificateIssuedAt: Date,
  scheduleType: string,
  customDays?: number | null
): Date {
  return addDays(certificateIssuedAt, getScheduleDays(scheduleType, customDays ?? null));
}

export function getRecertificationStatus(dueDate: Date, warningDays: number = 30): RecertificationStatus {
  const daysUntilDue = differenceInDays(dueDate, new Date());

  if (isPast(dueDate)) return 'overdue';
  if (daysUntilDue <= 0) return 'due';
  if (daysUntilDue <= warningDays) return 'upcoming';
  return 'current';
}

export function useRecertificationSchedules(_organizationId?: string) {
  return useQuery({
    queryKey: ['recertification-schedules'],
    queryFn: async () => [] as RecertificationSchedule[],
  });
}

export function useUserRecertificationStatus(_courseId?: string) {
  return useQuery({
    queryKey: ['user-recertification-status'],
    queryFn: async () => ({ status: 'none' as RecertificationStatus, dueDate: null }),
  });
}

export function useResetForRecertification() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (courseId: string) => ({ courseId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['progress'] });
      queryClient.invalidateQueries({ queryKey: ['organization-courses'] });
    },
  });
}

export function useManageRecertificationSchedule() {
  return useMutation({
    mutationFn: async () => undefined,
  });
}

export function useDeleteRecertificationSchedule() {
  return useMutation({
    mutationFn: async () => undefined,
  });
}
