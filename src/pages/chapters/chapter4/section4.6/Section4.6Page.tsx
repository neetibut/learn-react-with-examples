import { Link } from "react-router-dom";
import ExampleButton from "../../../../components/exampleButton";
import PageContainer from "../../../../components/PageContainer";

const examplesData = [
  {
    exampleNum: "01",
    exampleTitle: "Choosing between event handlers and Effects",
    exampleUrl:
      "https://react.dev/learn/synchronizing-with-effects#what-are-effects-and-how-are-they-different-from-events",
  },
  {
    exampleNum: "02",
    exampleTitle: "Event handlers run in response to specific interactions",
    exampleUrl:
      "https://react.dev/learn/synchronizing-with-effects#you-might-not-need-an-effect",
  },
  {
    exampleNum: "03",
    exampleTitle: "Effects run whenever synchronization is needed",
    exampleUrl:
      "https://react.dev/learn/synchronizing-with-effects#how-to-write-an-effect",
  },
  {
    exampleNum: "04",
    exampleTitle: "Reactive values and reactive logic",
    exampleUrl:
      "https://react.dev/learn/synchronizing-with-effects#how-to-handle-the-effect-firing-twice-in-development",
  },
  {
    exampleNum: "05",
    exampleTitle: "Logic inside event handlers is not reactive",
    exampleUrl:
      "https://react.dev/learn/synchronizing-with-effects#what-are-effects-and-how-are-they-different-from-events",
  },
  {
    exampleNum: "06",
    exampleTitle: "Logic inside Effects is reactive",
    exampleUrl:
      "https://react.dev/learn/synchronizing-with-effects#you-might-not-need-an-effect",
  },
  {
    exampleNum: "07",
    exampleTitle: "Extracting non-reactive logic out of Effects",
    exampleUrl:
      "https://react.dev/learn/synchronizing-with-effects#how-to-write-an-effect",
  },
  {
    exampleNum: "08",
    exampleTitle: "Declaring an Effect Event",
    exampleUrl:
      "https://react.dev/learn/synchronizing-with-effects#how-to-handle-the-effect-firing-twice-in-development",
  },
  {
    exampleNum: "09",
    exampleTitle: "Reading latest props and state with Effect Events",
    exampleUrl:
      "https://react.dev/learn/synchronizing-with-effects#what-are-effects-and-how-are-they-different-from-events",
  },
  {
    exampleNum: "10",
    exampleTitle: "Limitations of Effect Events",
    exampleUrl:
      "https://react.dev/learn/synchronizing-with-effects#you-might-not-need-an-effect",
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
