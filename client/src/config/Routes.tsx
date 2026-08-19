import HomePage from '../pages/HomePage';
import CardDetailPage from '../pages/CardDetailPage';

export const routes = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/card/:id',
    element: <CardDetailPage />,
  },
];
