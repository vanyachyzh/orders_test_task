import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import Button from '../../components/Button';
import Input from '../../components/Input';
import { AtIcon } from '../../components/icons';
import useAuth, { AuthType } from '../../hooks/useAuth';
import { validationScheme } from './scheme';

import { ILogInForm } from './types';

const LogIn = () => {
  const { handleAuth, loadingStatus } = useAuth();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ILogInForm>({
    resolver: yupResolver<ILogInForm>(validationScheme),
  });

  const onSubmit = async (data: ILogInForm) => {
    handleAuth(AuthType.Signup, data.email, data.password);
  };

  return (
    <div className="flex w-[20rem] flex-col items-center gap-[3rem]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col items-center gap-[1rem]"
      >
        <Input
          id="email"
          label="Email"
          register={register('email')}
          type="text"
          placeholder="Email"
          error={errors.email?.message}
          Icon={AtIcon}
        />

        <Input
          id="password"
          label="Password"
          register={register('password')}
          type="password"
          placeholder="Password"
          error={errors.password?.message}
        />

        <Button
          className="min-w-[10rem]"
          isLoading={loadingStatus === AuthType.Login}
        >
          Log In
        </Button>

        <Link to="/signup" className="font-bold underline hover:no-underline">
          Create a new account
        </Link>
      </form>
    </div>
  );
};

export default LogIn;
