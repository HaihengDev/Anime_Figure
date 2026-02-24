import Card from "./Card.jsx";
import items from "../data/data.json";

export default function CardLayout() {
  const demonSlayers = items[0].categories[0]["Demon Slayer"];

  return (
    <section className="card-layout">
      {demonSlayers.map((item) => (
        <Card
          key={item.id}
          name={item.name}
          imgUrl={item.imgUrl}
          color={item.color}
          price={item.price}
        />
      ))}
    </section>
  );
}
