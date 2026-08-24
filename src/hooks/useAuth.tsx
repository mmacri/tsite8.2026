import { createContext, useContext, ReactNode } from 'react';
import { DEMO_USER_ID, demoProfile } from '@/data/trainingData';

interface LocalUser {
  id: string;
  email: string;
}

interface LocalSession {
  user: LocalUser;
}

interface Profile {
  id: string;
  first_name: string;
  last_name: string;
  organization: string | null;
  organization_id: string | null;
  job_role: string | null;
}

interface AuthContextType {
  user: LocalUser | null;
  session: LocalSession | null;
  profile: Profile | null;
  isAdmin: boolean;
  isLoading: boolean;
  signUp: (email: string, password: string, metadata: { first_name: string; last_name: string; organization?: string; job_role?: string }) => Promise<{ error: Error | null; data: { user: LocalUser | null } | null }>;
  signIn: (email: string, password: string) => Promise<{ error: Error | null }>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<{ error: Error | null }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const user = { id: DEMO_USER_ID, email: 'learner@example.com' };
  const session = { user };
  const profile = demoProfile;

  const signUp = async (
    email: string,
    _password: string,
    _metadata: { first_name: string; last_name: string; organization?: string; job_role?: string }
  ) => {
    const localUser = { id: DEMO_USER_ID, email: email || user.email };
    return { error: null, data: { user: localUser } };
  };

  const signIn = async (_email: string, _password: string) => {
    return { error: null };
  };

  const signOut = async () => {
    return;
  };

  const resetPassword = async (_email: string) => {
    return { error: null };
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
        profile,
        isAdmin: false,
        isLoading: false,
        signUp,
        signIn,
        signOut,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
