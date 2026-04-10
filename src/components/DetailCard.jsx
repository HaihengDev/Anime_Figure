export default function DetailCard({ product }) {
  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <section className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10 grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="w-full h-[600px] overflow-hidden rounded-xl">
            <img
              src={product.image[0]}
              alt={product.name}
              className="w-full h-full object-cover hover:scale-105 transition duration-300"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="h-96 overflow-hidden rounded-xl">
              <img
                src={product.image[0]}
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
              />
            </div>
            <div className="h-96 overflow-hidden rounded-xl">
              <img
                src={product.image[1]}
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            {product.name}
          </h2>

          <div className="flex justify-between items-center text-gray-600">
            <p className="text-sm">Stock</p>
            <p
              className={`font-semibold ${
                product.stock === 0 ? 'text-red-500' : 'text-green-600'
              }`}
            >
              {product.stock === 0 ? 'Out of stock' : product.stock}
            </p>
          </div>

          <div className="flex justify-between items-center">
            <p className="text-gray-600">Price</p>
            <p className="text-2xl font-bold text-green-600">
              ${product.price}
            </p>
          </div>

          <div className="flex gap-4 pt-4">
            <button
              disabled={product.stock === 0}
              className={`flex-1 py-3 rounded-xl font-medium transition ${
                product.stock === 0
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-green-500 text-white hover:bg-green-600'
              }`}
            >
              Add to Cart
            </button>

            <button className="flex-1 py-3 rounded-xl bg-blue-500 text-white hover:bg-blue-600 transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
