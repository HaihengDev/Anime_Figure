import { useParams } from "react-router-dom";
import { useProductByCode } from "../Hook/useProductByCode";

export default function DetailCard() {
  const { code } = useParams();
  const product = useProductByCode(code);

  return (
    <section className="card details">
      <div className="img-wrapper">
        <img src={product.image[0]} alt={product.name} />
      </div>
    </section>
  );
}
