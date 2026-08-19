import { Routes, Route } from 'react-router-dom';
import { configRoutes } from '../config/configRoutes.jsx';

export default function AppRouter() {
  return (
    <Routes>
      {configRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
}
