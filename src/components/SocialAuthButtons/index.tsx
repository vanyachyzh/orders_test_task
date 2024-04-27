import useAuth from '../../hooks/useAuth';
import Button from '../Button';

const SocialAuthButtons = () => {
  const { handleAuth, isLoading, authType } = useAuth();

  return (
    <div className="flex flex-col gap-[1rem]">
      <Button
        onClick={() => handleAuth('google')}
        isLoading={isLoading && authType === 'google'}
      >
        Google
      </Button>
      <Button
        onClick={() => handleAuth('microsoft')}
        isLoading={isLoading && authType === 'microsoft'}
      >
        Microsoft
      </Button>
    </div>
  );
};

export default SocialAuthButtons;
