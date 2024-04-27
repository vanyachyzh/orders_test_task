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

export enum AuthType {
  Login,
  Signup,
  Google,
  Microsoft,
}

const useAuth = () => {
  const navigate = useNavigate();
  const [loadingStatus, setLoadingStatus] = useState<AuthType | null>(null);

  const handleAuth = async (
    type: AuthType,
    email?: string,
    password?: string,
  ) => {
    try {
      let authResponse;

      switch (type) {
        case AuthType.Signup:
          if (email && password) {
            setLoadingStatus(AuthType.Signup);
            authResponse = await createUserWithEmailAndPassword(
              auth,
              email,
              password,
            );
          }
          break;
        case AuthType.Login:
          if (email && password) {
            setLoadingStatus(AuthType.Login);
            authResponse = await signInWithEmailAndPassword(
              auth,
              email,
              password,
            );
          }
          break;
        case AuthType.Microsoft:
          setLoadingStatus(AuthType.Microsoft);
          authResponse = await signInWithPopup(auth, microsoftProvider);
          break;
        case AuthType.Google:
          setLoadingStatus(AuthType.Google);
          authResponse = await signInWithPopup(auth, googleProvider);
          break;
        default:
          throw new Error('Unsupported auth type');
      }

      const user = authResponse?.user;

      if (user) {
        try {
          const idToken = await user.getIdToken();

          setCookie(COOKIE_TOKEN_NAME, idToken);

          navigate('/orders');
          toast.success(
            type === AuthType.Signup
              ? 'You have successfully registered!'
              : 'You have successfully logged in!',
          );
        } catch (error) {
          handleError(error, 'Something went wrong... Try again!');
        }
      }
    } catch (error) {
      if (
        error instanceof Error &&
        'code' in error &&
        (error.code === 'auth/popup-closed-by-user' ||
          error.code === 'auth/cancelled-popup-request')
      ) {
        return;
      }

      handleError(error, 'Something went wrong... Try again!');
    } finally {
      setLoadingStatus(null);
    }
  };

  return { handleAuth, loadingStatus };
};

export default useAuth;
