import { useNavigate } from 'react-router-dom';

export default function Card({ code, name, imgUrl, stock, price }) {
  const navigate = useNavigate();

  return (
    <figure className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 w-72">
      <div className="h-80 w-full overflow-hidden">
        <img
          src={imgUrl}
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition duration-300"
        />
      </div>

      <div className="p-4 space-y-3">
        <figcaption className="text-lg font-semibold text-gray-800 truncate">
          {name}
        </figcaption>

        {stock == 0 ? (
          <div className="bg-red-100 text-red-600 text-sm px-3 py-1 rounded-lg inline-block">
            Out of stock!
          </div>
        ) : (
          <div className="flex justify-between text-sm text-gray-600">
            <p>Stock:</p>
            <p className="font-medium text-gray-800">{stock}</p>
          </div>
        )}

        <div className="flex justify-between items-center">
          <p className="text-gray-600 text-sm">Price:</p>
          <p className="text-lg font-bold text-green-600">${price}</p>
        </div>

        <div className="flex gap-2 pt-2">
          <button
            onClick={() => navigate(`/${code}`)}
            className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Learn More
          </button>

          <button
            disabled={stock == 0}
            className={`flex-1 py-2 rounded-lg transition ${
              stock == 0
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-green-500 text-white hover:bg-green-600'
            }`}
          >
            Add to cart
          </button>
        </div>
      </div>
    </figure>
  );
}
