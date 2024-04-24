import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="section flex justify-center items-center h-screen">
      <Outlet />
    </div>
  );
};

export default Layout;
