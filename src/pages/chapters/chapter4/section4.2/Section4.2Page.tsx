import { Link } from "react-router-dom";
import ExampleButton from "../../../../components/exampleButton";
import PageContainer from "../../../../components/PageContainer";

const examplesData = [
  {
    exampleNum: "01",
    exampleTitle: "Getting a ref to the node - Focusing a text input",
    exampleUrl:
      "https://react.dev/learn/manipulating-the-dom-with-refs#getting-a-ref-to-the-node",
  },
  {
    exampleNum: "02",
    exampleTitle: "Getting a ref to the node - Scrolling to an element",
    exampleUrl:
      "https://react.dev/learn/manipulating-the-dom-with-refs#getting-a-ref-to-the-node",
  },
  {
    exampleNum: "03",
    exampleTitle: "Accessing another component's DOM nodes",
    exampleUrl:
      "https://react.dev/learn/manipulating-the-dom-with-refs#accessing-another-components-dom-nodes",
  },
  {
    exampleNum: "04",
    exampleTitle: "When React attaches the refs",
    exampleUrl:
      "https://react.dev/learn/manipulating-the-dom-with-refs#when-react-attaches-the-refs",
  },
  {
    exampleNum: "05",
    exampleTitle: "Best practices for DOM manipulation with refs",
    exampleUrl:
      "https://react.dev/learn/manipulating-the-dom-with-refs#best-practices-for-dom-manipulation-with-refs",
  },
];

interface HomePagePropTypes {
  chapterNum: string;
  chapterTitle: string;
  sectionNum: string;
  sectionTitle: string;
}

export default function Chapter4Section2Page({
  chapterNum,
  sectionNum,
  chapterTitle,
  sectionTitle,
}: HomePagePropTypes) {
  return (
    <PageContainer>
      <Link className="link-homepage" to="/chapter4">
        Back to <span className="font-bold">Chapter Page</span>
      </Link>
      <section className="py-6 flex flex-col text-xl items-start ">
        <h2 className="">
          Chapter {chapterNum}: {chapterTitle}
        </h2>
        <h2 className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400">
          Section {sectionNum}: {sectionTitle}
        </h2>
      </section>
      <div>
        {examplesData.map((example) => (
          <ExampleButton
            key={example.exampleNum}
            exampleTitle={example.exampleTitle}
            exampleNum={example.exampleNum}
            sectionNum={sectionNum}
            sectionTitle={sectionTitle}
            chapterNum={chapterNum}
            chapterTitle={chapterTitle}
          />
        ))}
      </div>
    </PageContainer>
  );
}
