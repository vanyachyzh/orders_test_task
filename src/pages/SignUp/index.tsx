import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import Button from '../../components/Button';
import Input from '../../components/Input';
import { AtIcon } from '../../components/icons';
import useAuth, { AuthType } from '../../hooks/useAuth';
import { validationScheme } from './scheme';

import { ISignUpForm } from './types';

const SignUp = () => {
  const { handleAuth, loadingStatus } = useAuth();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ISignUpForm>({
    resolver: yupResolver<ISignUpForm>(validationScheme),
  });

  const onSubmit = async (data: ISignUpForm) => {
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

        <Input
          id="confirmPassword"
          label="Confirm password"
          type="password"
          register={register('confirmPassword')}
          placeholder="Confirm password"
          error={errors.confirmPassword?.message}
        />

        <Button
          className="min-w-[10rem]"
          isLoading={loadingStatus === AuthType.Signup}
        >
          Sign Up
        </Button>

        <span>
          Do you have an account?{' '}
          <Link to="/login" className="font-bold underline hover:no-underline">
            Log In
          </Link>
        </span>
      </form>
    </div>
  );
};

export default SignUp;
