import type { productProps } from '../interfaces/componentProps';

export default function ProductCard({
  product_name,
  image,
  discount,
  stock,
  price,
}: productProps) {
  return (
    <figure className="group w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={product_name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Discount Badge */}
        {discount > 0 && (
          <span className="absolute left-4 top-4 rounded-full bg-red-500 px-3 py-1 text-sm font-semibold text-white shadow-md">
            -{discount}%
          </span>
        )}
      </div>

      {/* Content */}
      <figcaption className="p-5">
        {/* Product Name */}
        <h3 className="mb-4 line-clamp-2 text-lg font-semibold text-gray-900">
          {product_name}
        </h3>

        {/* Stock */}
        <section className="mb-3 flex items-center justify-between text-sm">
          <p className="text-gray-500">Stock</p>

          <p
            className={`font-medium ${
              stock > 0 ? 'text-green-600' : 'text-red-500'
            }`}
          >
            {stock > 0 ? `${stock} available` : 'Out of stock'}
          </p>
        </section>

        {/* Price */}
        <section className="flex items-end justify-between border-t border-gray-100 pt-4">
          <p className="text-sm text-gray-500">Price</p>

          <p className="text-xl font-bold text-gray-900">${price}</p>
        </section>
      </figcaption>
    </figure>
  );
}
