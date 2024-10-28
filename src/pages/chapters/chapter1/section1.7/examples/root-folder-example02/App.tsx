import { people } from "./data";
import { getImageUrl } from "./utils";

export default function List() {
  const chemists = people.filter((person) => person.profession === "chemist");
  const listItems = chemists.map((person) => (
    <li className="flex justify-center items-center text-start">
      <img
        src={getImageUrl(person)}
        alt={person.name}
        className="rounded-[100%]"
      />
      <p className="ml-4">
        <b>{person.name}:</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  ));
  return (
    <ul className="bg-white text-black text-2xl p-6 rounded-xl">{listItems}</ul>
  );
}
