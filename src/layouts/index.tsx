import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="section">
      <Outlet />
    </div>
  );
};

export default Layout;
