import AuthLayout from '../../layouts/AuthLayout';
import LogIn from '../../pages/LogIn';
import SignUp from '../../pages/SignUp';
import GuestGuard from '../guards/GuestGuard';

const AUTH_ROUTES = {
  path: '/',
  children: [
    {
      path: '/',
      element: (
        <GuestGuard>
          <AuthLayout />
        </GuestGuard>
      ),
      children: [
        {
          path: 'signup',
          element: <SignUp />,
        },
        {
          path: 'login',
          element: <LogIn />,
        },
      ],
    },
  ],
};

export default AUTH_ROUTES;
