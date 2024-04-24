import Layout from '../../layouts';
import Orders from '../../pages/Orders';
import AuthGuard from '../guards/AuthGuard';

const MAIN_ROUTES = {
  path: '/',
  children: [
    {
      path: '/',
      element: (
        <AuthGuard>
          <Layout />
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
