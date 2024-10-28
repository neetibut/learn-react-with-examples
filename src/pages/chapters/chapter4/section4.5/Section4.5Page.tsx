import { Link } from "react-router-dom";
import ExampleButton from "../../../../components/exampleButton";
import PageContainer from "../../../../components/PageContainer";

const examplesData = [
  {
    exampleNum: "01",
    exampleTitle: "The lifecycle of an Effect",
    exampleUrl:
      "https://react.dev/learn/synchronizing-with-effects#what-are-effects-and-how-are-they-different-from-events",
  },
  {
    exampleNum: "02",
    exampleTitle: "Why synchronization may need to happen more than once",
    exampleUrl:
      "https://react.dev/learn/synchronizing-with-effects#you-might-not-need-an-effect",
  },
  {
    exampleNum: "03",
    exampleTitle: "How React re-synchronizes your Effect",
    exampleUrl:
      "https://react.dev/learn/synchronizing-with-effects#how-to-write-an-effect",
  },
  {
    exampleNum: "04",
    exampleTitle: "Thinking from the Effect’s perspective",
    exampleUrl:
      "https://react.dev/learn/synchronizing-with-effects#how-to-handle-the-effect-firing-twice-in-development",
  },
  {
    exampleNum: "05",
    exampleTitle: "How React verifies that your Effect can re-synchronize",
    exampleUrl:
      "https://react.dev/learn/synchronizing-with-effects#what-are-effects-and-how-are-they-different-from-events",
  },
  {
    exampleNum: "06",
    exampleTitle: "How React knows that it needs to re-synchronize the Effect",
    exampleUrl:
      "https://react.dev/learn/synchronizing-with-effects#you-might-not-need-an-effect",
  },
  {
    exampleNum: "07",
    exampleTitle: "Each Effect represents a separate synchronization process",
    exampleUrl:
      "https://react.dev/learn/synchronizing-with-effects#how-to-write-an-effect",
  },
  {
    exampleNum: "08",
    exampleTitle: "Effects “react” to reactive values",
    exampleUrl:
      "https://react.dev/learn/synchronizing-with-effects#how-to-handle-the-effect-firing-twice-in-development",
  },
  {
    exampleNum: "09",
    exampleTitle: "What an Effect with empty dependencies means",
    exampleUrl:
      "https://react.dev/learn/synchronizing-with-effects#what-are-effects-and-how-are-they-different-from-events",
  },
  {
    exampleNum: "10",
    exampleTitle: "All variables declared in the component body are reactive",
    exampleUrl:
      "https://react.dev/learn/synchronizing-with-effects#you-might-not-need-an-effect",
  },
  {
    exampleNum: "11",
    exampleTitle:
      "React verifies that you specified every reactive value as a dependency",
    exampleUrl:
      "https://react.dev/learn/synchronizing-with-effects#how-to-write-an-effect",
  },
  {
    exampleNum: "12",
    exampleTitle: "What to do when you don’t want to re-synchronize",
    exampleUrl:
      "https://react.dev/learn/lifecycle-of-reactive-effects#what-to-do-when-you-dont-want-to-re-synchronize",
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
