import { yupResolver } from '@hookform/resolvers/yup';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import Button from '../../components/Button';
import Input from '../../components/Input';
import { AtIcon } from '../../components/icons';
import { COOKIE_TOKEN_NAME } from '../../constants';
import { auth } from '../../firebase';
import { setCookie } from '../../utils/cookies';
import { handleError } from '../../utils/handleError';
import { validationScheme } from './scheme';

import { ISignUpForm } from './types';

const SignUp = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ISignUpForm>({
    resolver: yupResolver<ISignUpForm>(validationScheme),
  });

  const onSubmit = async (data: ISignUpForm) => {
    setIsLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      );
      const user = userCredential.user;

      try {
        if (user) {
          const idToken = await user.getIdToken();
          setCookie(COOKIE_TOKEN_NAME, idToken);
          navigate('/orders');
        }
      } catch (error) {
        handleError(error, 'User not available');
      }

      console.log(userCredential.user?.getIdToken());

      toast.success('User was created successfully!');
    } catch (error) {
      handleError(error);
    }

    setIsLoading(false);
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

        <Button className="min-w-[10rem]" isLoading={isLoading}>
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
