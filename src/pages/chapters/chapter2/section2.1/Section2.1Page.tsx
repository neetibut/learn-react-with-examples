import { Link } from "react-router-dom";
import PageContainer from "../../../../components/PageContainer";
import ExampleButton from "../../../../components/ExampleButton";

const examplesData = [
  {
    exampleNum: "01",
    exampleTitle: "Adding event handlers",
  },
  {
    exampleNum: "02",
    exampleTitle: "Reading props in event handlers",
  },
  {
    exampleNum: "03",
    exampleTitle: "Passing event handlers as props",
  },
  {
    exampleNum: "04",
    exampleTitle: "Naming event handler props",
  },
  {
    exampleNum: "05",
    exampleTitle: "Event propagation",
  },
  {
    exampleNum: "06",
    exampleTitle: "Stop propagation",
  },
];

interface HomePagePropTypes {
  chapterNum: string;
  chapterTitle: string;
  sectionNum: string;
  sectionTitle: string;
}

export default function Chapter2Page({
  chapterNum,
  sectionNum,
  chapterTitle,
  sectionTitle,
}: HomePagePropTypes) {
  return (
    <PageContainer>
      <Link className="link-homepage" to="/chapter2">
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
