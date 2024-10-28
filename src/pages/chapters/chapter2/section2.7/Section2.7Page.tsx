import { Link } from "react-router-dom";
import ExampleButton from "../../../../components/exampleButton";
import PageContainer from "../../../../components/PageContainer";

const examplesData = [
  {
    exampleNum: "01",
    exampleTitle: "Updating arrays without mutation",
  },
  {
    exampleNum: "02",
    exampleTitle: "Adding to an array",
  },
  {
    exampleNum: "03",
    exampleTitle: "Removing from an array",
  },
  {
    exampleNum: "04",
    exampleTitle: "Transforming an array",
  },
  {
    exampleNum: "05",
    exampleTitle: "Replacing items in an array",
  },
  {
    exampleNum: "06",
    exampleTitle: "Inserting into an array",
  },
  {
    exampleNum: "07",
    exampleTitle: "Making other changes to an array",
  },
  {
    exampleNum: "08",
    exampleTitle: "Updating objects inside arrays",
  },
  {
    exampleNum: "09",
    exampleTitle: "Write concise update logic with Immer",
  },
];

type HomePagePropTypes = {
  chapterNum: string;
  chapterTitle: string;
  sectionNum: string;
  sectionTitle: string;
};

export default function Chapter2Section7Page({
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
