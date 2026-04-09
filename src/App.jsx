import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DetailCard from "./pages/DetailCard";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:code" element={<DetailCard />} />
    </Routes>
  );
};

export default App;
