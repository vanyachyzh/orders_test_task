import { Outlet } from 'react-router-dom';

import Orders from '../../pages/Orders';
import AuthGuard from '../guards/AuthGuard';

const MAIN_ROUTES = {
  path: '/',
  children: [
    {
      path: '/',
      element: (
        <AuthGuard>
          <Outlet />
        </AuthGuard>
      ),
      children: [
        {
          path: '/orders',
          element: <Orders />,
        },
      ],
    },
  ],
};

export default MAIN_ROUTES;
