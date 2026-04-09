export default function DetailCard({ product }) {
  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <section className="card-wrapper">
      <div className="imgWrapper">
        <img src={product.image[0]} alt={product.name} />
        <img src={product.image[1]} alt={product.name} />
      </div>

      <h2>{product.name}</h2>

      <div className="stock-wrapper">
        <p>stock</p>
        <p>{product.stock}</p>
      </div>

      <div className="price-wrapper">
        <p>Price:</p>
        <p>
          <b>{product.price}$</b>
        </p>
      </div>
    </section>
  );
}
