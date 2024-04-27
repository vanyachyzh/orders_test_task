import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { COOKIE_TOKEN_NAME } from '../constants';
import { auth, googleProvider, microsoftProvider } from '../firebase';
import { setCookie } from '../utils/cookies';
import { handleError } from '../utils/handleError';

const useAuth = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [authType, setAuthType] = useState('');

  const handleAuth = async (
    type: string,
    email?: string,
    password?: string,
  ) => {
    setAuthType(type);
    setIsLoading(true);

    try {
      let userCredential;

      if (type === 'signup' && email && password) {
        userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password,
        );
      } else if (type === 'login' && email && password) {
        userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password,
        );
      } else if (type === 'microsoft') {
        userCredential = await signInWithPopup(auth, microsoftProvider);
      } else if (type === 'google') {
        userCredential = await signInWithPopup(auth, googleProvider);
      }

      const user = userCredential?.user;

      if (user) {
        const idToken = await user.getIdToken();
        setCookie(COOKIE_TOKEN_NAME, idToken);
        navigate('/orders');
        toast.success('User');
      }
    } catch (error) {
      const actionName = type === 'signup' ? 'signing up' : 'logging in';
      handleError(error, `Error ${actionName}`);
    } finally {
      setIsLoading(false);
    }
  };

  return { handleAuth, isLoading, authType };
};

export default useAuth;
