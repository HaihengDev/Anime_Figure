import { useState } from "react";
import { imageUtil } from "../utilities/imageUtil.jsx";
import "./style/card.css";

export default function Card({ name, imgUrl, price, color }) {
  const [hover, setHover] = useState(false);

  const style = {
    boxShadow: hover ? `2px 4px 12px ${color}` : "none",
    transition: "0.3s ease",
  };

  return (
    <figure
      className="card"
      style={style}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="img-wrapper">
        <img src={imageUtil(imgUrl)} alt={name} />
      </div>

      <h3>{name}</h3>

      <div className="price-wrapper">
        <p>Price:</p>
        <p>
          <b>${price}</b>
        </p>
      </div>

      <div className="button-wrapper">
        <button>Learn More</button>
        <button>Add to cart</button>
      </div>
    </figure>
  );
}
