import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield } from 'lucide-react';

export default function AuthPage() {
  const { user } = useAuth();

  if (user) {
    return <Navigate to="/courses" replace />;
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="w-12 h-12 rounded bg-primary mx-auto flex items-center justify-center mb-4">
            <Shield className="w-7 h-7 text-primary-foreground" />
          </div>
          <CardTitle className="text-2xl">IDMA3 Training Platform</CardTitle>
          <CardDescription>
            This static training build uses local browser storage and does not require a login.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild className="w-full">
            <Link to="/courses">Enter Training Site</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
