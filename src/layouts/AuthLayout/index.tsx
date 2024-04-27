import { Outlet, useLocation } from 'react-router-dom';

import SocialAuthButtons from '../../components/SocialAuthButtons';

const AuthLayout = () => {
  const { pathname } = useLocation();

  return (
    <div className="section absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col gap-[3rem]">
      <h3 className="text-center text-[3rem] font-bold">
        {pathname === '/signup' ? 'Sign Up' : 'Log In'}
      </h3>
      <div className="flex min-h-[19rem] justify-center gap-[4rem]">
        <Outlet />
        <span className="pt-[2.4rem] font-bold">or</span>
        <SocialAuthButtons />
      </div>
    </div>
  );
};

export default AuthLayout;
