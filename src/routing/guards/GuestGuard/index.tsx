import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { APP_DEFAULT_PATH } from '../../../constants';

import { GuestGuardProps } from './types';

const GuestGuard = ({ children }: GuestGuardProps) => {
  const isAuthenticated = false;

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
