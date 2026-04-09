import { useNavigate } from "react-router-dom";
import "./style/card.css";

export default function Card({ code, name, imgUrl, stock, price }) {
  const navigate = useNavigate();

  return (
    <figure>
      <img src={imgUrl} alt={name} />
      <figcaption>{name}</figcaption>

      {stock == 0 ? (
        <div className="alert-stock">Out of stock!</div>
      ) : (
        <div className="stock-wrapper">
          <p>Stock:</p>
          <p>{stock}</p>
        </div>
      )}

      <div className="price-wrapper">
        <p>Price:</p>
        <p>
          <b>{price}$</b>
        </p>
      </div>

      <div className="btn-wrapper">
        <button onClick={() => navigate(`/${code}`)}>Learn More</button>
        <button>Add to cart</button>
      </div>
    </figure>
  );
}
