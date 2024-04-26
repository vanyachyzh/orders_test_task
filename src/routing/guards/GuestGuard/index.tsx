import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { APP_DEFAULT_PATH, COOKIE_TOKEN_NAME } from '../../../constants';

import { GuestGuardProps } from './types';
import { getCookie } from '../../../utils/cookies';

const GuestGuard = ({ children }: GuestGuardProps) => {
  const isAuthenticated = getCookie(COOKIE_TOKEN_NAME);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isAuthenticated) {
      navigate(
        location?.state?.from ? location?.state?.from : APP_DEFAULT_PATH,
        {
          state: {
            from: '',
          },
          replace: true,
        },
      );
    }
  }, [navigate, location, isAuthenticated]);

  return children;
};

export default GuestGuard;
