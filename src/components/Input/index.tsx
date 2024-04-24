import { InputProps } from './types.ts';

import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { EyeIcon, EyeSlashedIcon } from '../icons.tsx';

const Input = ({
  Icon,
  error,
  register,
  label,
  ...props
}: InputProps) => {
  const [isPassword, setIsPassword] = useState(props.type === 'password');

  return (
    <div>
      <label htmlFor={props.id} className="sr-only">
        {label}
      </label>

      <div className="relative">
        <input
          {...props}
          {...register}
          aria-autocomplete="none"
          autoComplete="new-password"
          type={isPassword ? 'password' : 'text'}
          className="w-full rounded-md border-gray-200 px-[0.5rem] py-[0.5rem] shadow-sm outline-blue-500 sm:text-sm"
        />

        {Icon && !isPassword && (
          <span
            className={twMerge(
              'pointer-events-none absolute inset-y-0 end-0 grid w-10 cursor-pointer select-none place-content-center text-gray-500 [&>svg]:h-[1rem] [&>svg]:w-[1rem]',
              error && 'text-[#FF7B7B]',
            )}
          >
            <Icon />
          </span>
        )}

        {props.type === 'password' && (
          <button
            type="button"
            onClick={() => setIsPassword(prev => !prev)}
            className={twMerge(
              'absolute inset-y-0 end-0 grid w-10 cursor-pointer select-none place-content-center text-gray-500 [&>svg]:h-[1rem] [&>svg]:w-[1rem]',
              error && 'text-[#FF7B7B]',
              isPassword && 'cursor-pointer',
            )}
          >
            {isPassword ? <EyeSlashedIcon /> : <EyeIcon />}
          </button>
        )}
      </div>

      <span
        className={twMerge(
          'font-Mulish block h-0 w-full overflow-hidden pt-0 text-[0.75rem] leading-[1.125rem] text-[#FF7B7B] transition-all duration-300',
          error && 'h-[2.125rem] pt-[1rem]',
        )}
      >
        {error}
      </span>
    </div>
  );
};

export default Input;
