import { Outlet } from 'react-router-dom';

import Button from '../../components/Button';
import useAuth from '../../hooks/useAuth';
import Sidebar from '../Sidebar';

const MainLayout = () => {
  const { handleLogout, loadingStatus } = useAuth();

  return (
    <div className="section flex h-screen flex-col items-center">
      <header className="flex w-full justify-end pt-[2rem]">
        <Button onClick={handleLogout} isLoading={loadingStatus === 'logout'}>
          Log Out
        </Button>
      </header>

      <div className='flex w-full h-full'>
        <Sidebar />
        <div className="flex h-full w-full items-center justify-center">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
