// import { useState } from "react";

export default function Card({ name, imgUrl, price, color }) {
  <figure className="card">
    <img url={imageUtil(imgUrl)} alt={name} />

    <h3>{name}</h3>

    <div className="price-wrapper">
      <p>Price:</p>
      <p>
        <b>{price}</b>
      </p>
    </div>

    <div className="button-wrapper">
      <button>Learn More</button>
      <button>Add to cart</button>
    </div>
  </figure>;
}
