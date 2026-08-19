import loadAllData from '../hooks/loadAllData';
import ProductCard from './ProductCard';

export default function CardProductLayout() {
  const { data: products, loading, error } = loadAllData('products');

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <section id="card-product-list">
      {products.map((product: any) => (
        <ProductCard
          key={product._id}
          product_name={product.product_name}
          image={product.product_image}
          stock={product.stock}
          discount={product.discount}
          price={product.price}
        />
      ))}
    </section>
  );
}
