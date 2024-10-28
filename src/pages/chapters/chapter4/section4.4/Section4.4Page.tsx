import { Link } from "react-router-dom";
import ExampleButton from "../../../../components/exampleButton";
import PageContainer from "../../../../components/PageContainer";

const examplesData = [
  {
    exampleNum: "01",
    exampleTitle: "How to remove unnecessary Effects",
  },
  {
    exampleNum: "02",
    exampleTitle: "Updating state based on props or state",
  },
  {
    exampleNum: "03",
    exampleTitle: "Caching expensive calculations",
  },
  {
    exampleNum: "04",
    exampleTitle: "Resetting all state when a prop changes",
  },
  {
    exampleNum: "05",
    exampleTitle: "Adjusting some state when a prop changes",
  },
  {
    exampleNum: "06",
    exampleTitle: "Sharing logic between event handlers",
  },
  {
    exampleNum: "07",
    exampleTitle: "Sending a POST request",
  },
  {
    exampleNum: "08",
    exampleTitle: "Chains of computations",
  },
  {
    exampleNum: "09",
    exampleTitle: "Initializing the application",
  },
  {
    exampleNum: "10",
    exampleTitle: "Notifying parent components about state changes",
  },
  {
    exampleNum: "11",
    exampleTitle: "Passing data to the parent",
  },
  {
    exampleNum: "12",
    exampleTitle: "Subscribing to an external store",
  },
  {
    exampleNum: "13",
    exampleTitle: "Fetching data",
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
