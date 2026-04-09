import { useProducts } from "../Hook/useProducts";
import CardLayout from "../components/CardLayout";

const Home = () => {
  const products = useProducts();

  return <CardLayout data={products} />;
};

export default Home;
