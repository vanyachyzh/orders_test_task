import { twMerge } from 'tailwind-merge';

import { ButtonProps } from './types';

const Button = ({ isLoading, className, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={twMerge(
        'flex min-h-[2.9rem] items-center justify-center rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white focus:outline-none focus:ring active:text-indigo-500',
        className,
        !isLoading && 'hover:bg-transparent hover:text-indigo-600'
      )}
    >
      {!isLoading ? props.children : <span className="loader" />}
    </button>
  );
};

export default Button;
