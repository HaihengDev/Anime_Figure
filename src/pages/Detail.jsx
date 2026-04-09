import { useParams } from "react-router-dom";
import { useProductByCode } from "../Hook/useProductByCode";
import DetailCard from "../components/DetailCard.jsx";

export default function Detail() {
  const { code } = useParams();
  const product = useProductByCode(code);

  return <DetailCard product={product} />;
}
