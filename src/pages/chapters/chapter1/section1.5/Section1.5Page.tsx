import { Link } from "react-router-dom";

type HomePagePropTypes = {
  chapterNum: String;
  chapterTitle: String;
  sectionNum: String;
  sectionTitle: String;
};

export default function SectionPage({
  chapterNum,
  sectionNum,
  chapterTitle,
  sectionTitle,
}: HomePagePropTypes) {
  return (
    <div className="page-container">
      <Link className="link-homepage" to="/chapter1">
        Back to <span className="font-bold">Chapter Page</span>
      </Link>
      <section className="py-6 flex flex-col text-xl items-start ">
        <h2 className="">
          Chapter {chapterNum}: {chapterTitle}
        </h2>
        <h2 className="">
          Section {sectionNum}: {sectionTitle}
        </h2>
      </section>
      <h2 className="pt-6 text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400">
        Example 01: Familiar props
      </h2>
      <button>
        <Link to="/section1.5/example01">Example 01</Link>
      </button>
      <h2 className="pt-6 text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400">
        Example 02: Passing props to a component
      </h2>
      <button>
        <Link to="/section1.5/example02">Example 02</Link>
      </button>
      <h2 className="pt-6 text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400">
        Example 03: Specifying a default value for a prop
      </h2>
      <button>
        <Link to="/section1.5/example03">Example 03</Link>
      </button>
      <h2 className="pt-6 text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400">
        Example 04: Forwarding props with the JSX spread syntax
      </h2>
      <button>
        <Link to="/section1.5/example04">Example 04</Link>
      </button>
      <h2 className="pt-6 text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400">
        Example 05: Passing JSX as children
      </h2>
      <button>
        <Link to="/section1.5/example05">Example 05</Link>
      </button>
      <h2 className="pt-6 text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400">
        Example 06: How props change over time
      </h2>
      <button>
        <Link to="/section1.5/example06">Example 06</Link>
      </button>
      <h2 className="pt-6 text-xl">Example 07: ?</h2>
      <button>
        <Link to="/section1.5/example07">Example 07</Link>
      </button>
      <h2 className="pt-6 text-xl">Example 08: ?</h2>
      <button>
        <Link to="/section1.5/example08">Example 08</Link>
      </button>
      <h2 className="pt-6 text-xl">Example 09: ?</h2>
      <button>
        <Link to="/section1.5/example09">Example 09</Link>
      </button>
      <h2 className="pt-6 text-xl">Example 10: ?</h2>
      <button>
        <Link to="/section1.5/example10">Example 10</Link>
      </button>
    </div>
  );
}
