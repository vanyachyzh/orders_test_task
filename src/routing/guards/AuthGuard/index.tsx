import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { AuthGuardProps } from './types';

const AuthGuard = ({ children }: AuthGuardProps) => {
  const isAuthenticated = false;
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login', {
        state: {
          from: location.pathname,
        },
        replace: true,
      });
    }
  }, [isAuthenticated, navigate, location]);

  return children;
};

export default AuthGuard;
