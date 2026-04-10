import Card from './Card.jsx';

export default function CardLayout({ data }) {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      {/* Container */}
      <div className="max-w-7xl mx-auto">
        {/* Grid */}
        <div
          className="grid gap-6 
                        grid-cols-1 
                        sm:grid-cols-2 
                        md:grid-cols-3 
                        lg:grid-cols-4"
        >
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
      </div>
    </div>
  );
}
