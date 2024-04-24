import { toast } from 'react-toastify';

export const handleError = (error: unknown, message?: string) => {
  if (error instanceof Error) {
    toast.error(message || error.message);
    console.error(error.message);
  } else {
    console.error(error);
  }
};
