// Define the props for the Item component
interface ItemProps {
  name: string;
  isPacked: boolean;
}

function Item({ name, isPacked }: ItemProps) {
  if (isPacked) {
    return null;
  }
  return <li className="item text-2xl">{name}</li>;
}

export default function PackingList() {
  return (
    <section className="bg-white text-black p-6 rounded-xl">
      <h1 className="mb-6">Sally Ride's Packing List</h1>
      <ul className="list-disc list-inside text-start">
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}
