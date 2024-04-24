import { yupResolver } from '@hookform/resolvers/yup';
import { createUserWithEmailAndPassword } from 'firebase/auth';
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
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ISignUpForm>({
    resolver: yupResolver<ISignUpForm>(validationScheme),
  });

  const onSubmit = async (data: ISignUpForm) => {
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);

      toast.success('User was created successfully!');
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <div className="flex flex-col items-center gap-[3rem] w-[20rem]">
      <h3 className='font-bold text-[3rem]'>Sign Up</h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-[1rem] w-full"
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

        <Button>Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUp;
