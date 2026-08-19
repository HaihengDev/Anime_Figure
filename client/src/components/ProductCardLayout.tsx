import loadAllData from '../hooks/loadAllData';
import ProductCard from './ProductCard';

export default function CardProductLayout() {
  const { data: products, loading, error } = loadAllData('products');

  if (loading) {
    return (
      <section className="flex min-h-[300px] items-center justify-center">
        <p className="text-lg font-medium text-gray-500">Loading products...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="flex min-h-[300px] items-center justify-center">
        <p className="rounded-xl bg-red-50 px-6 py-4 font-medium text-red-500">
          {error}
        </p>
      </section>
    );
  }

  return (
    <section className="w-full px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8 flex items-end justify-between">
        <div>
          <p className="mb-1 text-sm font-medium uppercase tracking-wider text-indigo-500">
            Our Collection
          </p>

          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Anime Products
          </h2>
        </div>

        <p className="text-sm text-gray-500">{products.length} products</p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
      </div>
    </section>
  );
}
