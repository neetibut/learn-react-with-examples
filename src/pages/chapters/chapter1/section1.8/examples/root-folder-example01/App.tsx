interface RecipeProps {
  drinkers: number; // drinkers is a number
}

function Recipe({ drinkers }: RecipeProps) {
  return (
    <ol className="list-disc list-inside text-2xl">
      <li>Boil {drinkers} cups of water.</li>
      <li>
        Add {drinkers} spoons of tea and {0.5 * drinkers} spoons of spice.
      </li>
      <li>Add {0.5 * drinkers} cups of milk to boil and sugar to taste.</li>
    </ol>
  );
}

export default function App() {
  return (
    <section className="bg-white text-black rounded-xl p-6 text-start">
      <h1 className="text-4xl">Spiced Chai Recipe</h1>
      <h2 className="text-3xl">For two</h2>
      <Recipe drinkers={2} />
      <h2 className="text-3xl">For a gathering</h2>
      <Recipe drinkers={4} />
    </section>
  );
}
