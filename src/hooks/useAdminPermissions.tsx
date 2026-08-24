export interface AdminPermissions {
  id: string;
  user_id: string;
  is_super_admin: boolean;
  can_view_users: boolean;
  can_manage_users: boolean;
  can_view_courses: boolean;
  can_manage_courses: boolean;
  organization_scope: string | null;
}

export function useAdminPermissions() {
  return {
    permissions: null,
    isLoading: false,
    isSuperAdmin: false,
    canViewUsers: false,
    canManageUsers: false,
    canViewCourses: false,
    canManageCourses: false,
    organizationScope: null,
    hasAdminAccess: false,
    canAccessLearnerReports: false,
    canAccessAnalytics: false,
    canAccessCourses: false,
    canAccessAdminManagement: false,
    canDeleteUsers: false,
  };
}
