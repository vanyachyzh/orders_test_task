import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { AuthGuardProps } from './types';
import { getCookie } from '../../../utils/cookies';
import { COOKIE_TOKEN_NAME } from '../../../constants';

const AuthGuard = ({ children }: AuthGuardProps) => {
  const isAuthenticated = getCookie(COOKIE_TOKEN_NAME);
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
