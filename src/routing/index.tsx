import { Navigate, useRoutes } from 'react-router-dom';

import AUTH_ROUTES from './routes/authRoutes.tsx';
import MAIN_ROUTES from './routes/mainRoutes.tsx';

const Routes = () => {
  return useRoutes([
    AUTH_ROUTES,
    MAIN_ROUTES,
    { path: '*', element: <Navigate to="/orders" /> },
  ]);
};

export default Routes;
