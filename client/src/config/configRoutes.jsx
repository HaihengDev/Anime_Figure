import HomePage from '../pages/HomePage.jsx';
import CardDetailPage from '../pages/CardDetailPage.jsx';

export const configRoutes = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/card/:id',
    element: <CardDetailPage />,
  },
];
