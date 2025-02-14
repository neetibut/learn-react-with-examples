import { Link } from "react-router-dom";
import PageContainer from "../../../components/PageContainer";

type HomePagePropTypes = {
  chapterNum: String;
  chapterTitle: String;
};

export default function Chapter1Page({
  chapterNum,
  chapterTitle,
}: HomePagePropTypes) {
  return (
    <PageContainer>
      <Link className="link-homepage" to="/">
        Back to <span className="font-bold">Home Page</span>
      </Link>
      <section className="py-6 flex flex-col items-start ">
        <h2 className="text-xl">
          Chapter {chapterNum}: <span>{chapterTitle}</span>
        </h2>
      </section>
      <h2 className="pt-6 text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400">
        Section 1: Your First Component
      </h2>
      <button>
        <Link to="/section1.1">Section 1</Link>
      </button>
      <h2 className="pt-6 text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400">
        Section 2: Importing and Exporting Components
      </h2>
      <button>
        <Link to="/section1.2">Section 2</Link>
      </button>
      <h2 className="pt-6 text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400">
        Section 3: Writing Markup with JSX
      </h2>
      <button>
        <Link to="/section1.3">Section 3</Link>
      </button>
      <h2 className="pt-6 text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400">
        Section 4: JavaScript in JSX with Curly Braces
      </h2>
      <button>
        <Link to="/section1.4">Section 4</Link>
      </button>
      <h2 className="pt-6 text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400">
        Section 5: Passing Props to a Component
      </h2>
      <button>
        <Link to="/section1.5">Section 5</Link>
      </button>
      <h2 className="pt-6 text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400">
        Section 6: Conditional Rendering
      </h2>
      <button>
        <Link to="/section1.6">Section 6</Link>
      </button>
      <h2 className="pt-6 text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400">
        Section 7: Rendering Lists
      </h2>
      <button>
        <Link to="/section1.7">Section 7</Link>
      </button>
      <h2 className="pt-6 text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400">
        Section 8: Keeping Components Pure
      </h2>
      <button>
        <Link to="/section1.8">Section 8</Link>
      </button>
      <h2 className="pt-6 text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400">
        Section 9: Your UI as a Tree
      </h2>
      <button>
        <Link to="/section1.9">Section 9</Link>
      </button>
    </PageContainer>
  );
}
