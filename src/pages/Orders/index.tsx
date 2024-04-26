import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/Button';
import { COOKIE_TOKEN_NAME } from '../../constants';
import { auth } from '../../firebase';
import { deleteCookie } from '../../utils/cookies';
import { handleError } from '../../utils/handleError';
import { toast } from 'react-toastify';

const Orders = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const signOut = async () => {
    setIsLoading(true);
    try {
      await auth.signOut();
      navigate('/login');
      deleteCookie(COOKIE_TOKEN_NAME);
      toast.success("You logged out!")
    } catch (error) {
      handleError(error, 'Error logging out');
    }
    setIsLoading(false);
  };
  return (
    <section className="flex flex-col items-center gap-[2rem] text-[2rem] font-semibold">
      This is the order page
      <Button onClick={signOut} isLoading={isLoading}>
        Log Out
      </Button>
    </section>
  );
};

export default Orders;
