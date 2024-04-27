import MainLayout from '../../layouts/MainLayout';
import Orders from '../../pages/Orders';
import AuthGuard from '../guards/AuthGuard';

const MAIN_ROUTES = {
  path: '/',
  children: [
    {
      path: '/',
      element: (
        <AuthGuard>
          <MainLayout />
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
