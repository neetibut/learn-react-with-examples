import { Link } from "react-router-dom";

interface T {
  sectionNum: string;
  sectionTitle: string;
}

function SectionButton({ sectionNum, sectionTitle }: T) {
  const url = `/section${sectionNum}`;
  return (
    <div>
      {" "}
      <h2 className="pt-6 text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400">
        Section {sectionNum}: {sectionTitle}
      </h2>
      <button>
        <Link to={url}>Section {sectionNum}</Link>
      </button>
    </div>
  );
}

export default SectionButton;
