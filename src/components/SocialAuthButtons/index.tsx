import useAuth, { AuthType } from '../../hooks/useAuth';
import Button from '../Button';

const SocialAuthButtons = () => {
  const { handleAuth, loadingStatus } = useAuth();

  return (
    <div className="flex flex-col gap-[1rem]">
      <Button
        onClick={() => handleAuth(AuthType.Google)}
        isLoading={loadingStatus === AuthType.Google}
      >
        Google
      </Button>
      <Button
        onClick={() => handleAuth(AuthType.Microsoft)}
        isLoading={loadingStatus === AuthType.Microsoft}
      >
        Microsoft
      </Button>
    </div>
  );
};

export default SocialAuthButtons;
