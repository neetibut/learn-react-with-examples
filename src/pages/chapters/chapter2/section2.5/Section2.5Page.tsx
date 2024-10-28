import { Link } from "react-router-dom";
import ExampleButton from "../../../../components/ExampleButton";
import PageContainer from "../../../../components/PageContainer";

const examplesData = [
  {
    exampleNum: "01",
    exampleTitle: "React batches state updates",
  },
  {
    exampleNum: "02",
    exampleTitle:
      "Updating the same state multiple times before the next order",
  },
  {
    exampleNum: "03",
    exampleTitle: "What happens if you update state after replacing it",
  },
  {
    exampleNum: "04",
    exampleTitle: "What happens if you replace state after updating it",
  },
  {
    exampleNum: "05",
    exampleTitle: "Naming conventions",
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
