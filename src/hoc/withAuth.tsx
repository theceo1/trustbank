// src/hoc/withAuth.tsx
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

const withAuth = (WrappedComponent: React.FC) => {
  const AuthenticatedComponent: React.FC = (props) => {
    const router = useRouter();
    const { user, loading } = useAuth();
    
    useEffect(() => {
      if (!loading && !user) {
        router.push('/login');
      }
    }, [user, loading, router]);

    if (loading) {
      return <div>Loading...</div>; // Or a loading spinner
    }

    if (!user) {
      return null; // This will prevent the wrapped component from rendering while redirecting
    }

    return <WrappedComponent {...props} />;
  };

  return AuthenticatedComponent;
};

export default withAuth;