import { Link } from "react-router-dom";
import PageContainer from "../../../../components/PageContainer";
import ExampleButton from "../../../../components/exampleButton";

const examplesData = [
  {
    exampleNum: "01",
    exampleTitle: "The Problem with passing props",
  },
  {
    exampleNum: "02",
    exampleTitle: "Context - an alternative to passing props",
  },
  {
    exampleNum: "03",
    exampleTitle: "Using and providing context from the same component",
  },
  {
    exampleNum: "04",
    exampleTitle: "Context passes through intermediate components",
  },
];

interface HomePagePropTypes {
  chapterNum: string;
  chapterTitle: string;
  sectionNum: string;
  sectionTitle: string;
}

export default function Chapter3Page({
  chapterNum,
  sectionNum,
  chapterTitle,
  sectionTitle,
}: HomePagePropTypes) {
  return (
    <PageContainer>
      <Link className="link-homepage" to="/chapter3">
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
            chapterNum={chapterNum}
            chapterTitle={chapterTitle}
            sectionNum={sectionNum}
            sectionTitle={sectionTitle}
          />
        ))}
      </div>
    </PageContainer>
  );
}
