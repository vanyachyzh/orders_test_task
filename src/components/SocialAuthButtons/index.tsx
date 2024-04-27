import { signInWithPopup } from 'firebase/auth';

import { auth, googleProvider, microsoftProvider } from '../../firebase';
import { handleError } from '../../utils/handleError';
import Button from '../Button';

const SocialAuthButtons = () => {
  const sigInWithGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      console.log(res);
    } catch (error) {
      handleError(error);
    }
  };

  const sigInWithMicrosoft = async () => {
    try {
      await signInWithPopup(auth, microsoftProvider);
    } catch (error) {
      console.log;
      handleError(error);
    }
  };

  return (
    <div className="flex flex-col gap-[1rem]">
      <Button onClick={sigInWithGoogle}>Google</Button>
      <Button onClick={sigInWithMicrosoft}>Microsoft</Button>
    </div>
  );
};

export default SocialAuthButtons;
