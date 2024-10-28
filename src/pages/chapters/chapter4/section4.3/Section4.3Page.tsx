import { Link } from "react-router-dom";
import ExampleButton from "../../../../components/exampleButton";
import PageContainer from "../../../../components/PageContainer";

const examplesData = [
  {
    exampleNum: "01",
    exampleTitle: "What are Effects and how are they different from events?",
    exampleUrl:
      "https://react.dev/learn/synchronizing-with-effects#what-are-effects-and-how-are-they-different-from-events",
  },
  {
    exampleNum: "02",
    exampleTitle: "You might not need an Effect",
    exampleUrl:
      "https://react.dev/learn/synchronizing-with-effects#you-might-not-need-an-effect",
  },
  {
    exampleNum: "03",
    exampleTitle: "How to write an Effect",
    exampleUrl:
      "https://react.dev/learn/synchronizing-with-effects#how-to-write-an-effect",
  },
  {
    exampleNum: "04",
    exampleTitle: "How to handle the Effect firing twice in development?",
    exampleUrl:
      "https://react.dev/learn/synchronizing-with-effects#how-to-handle-the-effect-firing-twice-in-development",
  },
  {
    exampleNum: "05",
    exampleTitle: "Controlling non-React widgets",
    exampleUrl:
      "https://react.dev/learn/synchronizing-with-effects#what-are-effects-and-how-are-they-different-from-events",
  },
  {
    exampleNum: "06",
    exampleTitle: "Subscribing to events",
    exampleUrl:
      "https://react.dev/learn/synchronizing-with-effects#you-might-not-need-an-effect",
  },
  {
    exampleNum: "07",
    exampleTitle: "Triggering animations",
    exampleUrl:
      "https://react.dev/learn/synchronizing-with-effects#how-to-write-an-effect",
  },
  {
    exampleNum: "08",
    exampleTitle: "Fetching data",
    exampleUrl:
      "https://react.dev/learn/synchronizing-with-effects#how-to-handle-the-effect-firing-twice-in-development",
  },
  {
    exampleNum: "09",
    exampleTitle: "Sending analytics",
    exampleUrl:
      "https://react.dev/learn/synchronizing-with-effects#what-are-effects-and-how-are-they-different-from-events",
  },
  {
    exampleNum: "10",
    exampleTitle: "Not an Effect - Initializing the application",
    exampleUrl:
      "https://react.dev/learn/synchronizing-with-effects#you-might-not-need-an-effect",
  },
  {
    exampleNum: "11",
    exampleTitle: "Not an Effect - Buying a product",
    exampleUrl:
      "https://react.dev/learn/synchronizing-with-effects#how-to-write-an-effect",
  },
  {
    exampleNum: "12",
    exampleTitle: "Putting it all together",
    exampleUrl:
      "https://react.dev/learn/synchronizing-with-effects#how-to-handle-the-effect-firing-twice-in-development",
  },
];

interface HomePagePropTypes {
  chapterNum: string;
  chapterTitle: string;
  sectionNum: string;
  sectionTitle: string;
}

export default function Chapter4Section3Page({
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
