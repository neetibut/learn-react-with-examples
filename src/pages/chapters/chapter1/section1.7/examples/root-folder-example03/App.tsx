import { people } from "./data";
import { getImageUrl } from "./utils";

export default function List() {
  const listItems = people.map((person) => (
    <li key={person.id} className="flex">
      <img
        src={getImageUrl(person)}
        alt={person.name}
        className="rounded-[100%]"
      />
      <p>
        <b>{person.name}</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  ));
  return (
    <ul className="bg-white text-black text-2xl p-6 rounded-xl">{listItems}</ul>
  );
}
