import { Routes, Route } from 'react-router-dom';
import MainPage from './layout/MainPage';

const Page = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
};

export default Page;
