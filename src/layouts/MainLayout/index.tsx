import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="section flex h-screen items-center justify-center">
      <Outlet />
    </div>
  );
};

export default MainLayout;
