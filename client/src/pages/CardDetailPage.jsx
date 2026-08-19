import { useParams } from 'react-router-dom';

const Page = () => {
  const { id } = useParams();

  return <h1>Card Detail Page {id}</h1>;
};

export default Page;
