import Card from "./Card.jsx";
import "./style/card-layout.css";

export default function CardLayout({ data }) {
  return (
    <div className="card-wrapper">
      {data.map((d) => (
        <Card
          key={d.code}
          code={d.code}
          name={d.name}
          imgUrl={d.image[0]}
          stock={d.stock}
          price={d.price}
        />
      ))}
    </div>
  );
}
