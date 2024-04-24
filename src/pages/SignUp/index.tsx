import { yupResolver } from '@hookform/resolvers/yup';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import Button from '../../components/Button';
import Input from '../../components/Input';
import { AtIcon } from '../../components/icons';
import { auth } from '../../firebase';
import { handleError } from '../../utils/handleError';
import { validationScheme } from './scheme';

import { ISignUpForm } from './types';

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(true);

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
      await createUserWithEmailAndPassword(auth, data.email, data.password);

      toast.success('User was created successfully!');
    } catch (error) {
      handleError(error);
    }

    setIsLoading(false);
  };

  return (
    <div className="flex w-[20rem] flex-col items-center gap-[3rem]">
      <h3 className="text-[3rem] font-bold">Sign Up</h3>
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
      </form>
    </div>
  );
};

export default SignUp;