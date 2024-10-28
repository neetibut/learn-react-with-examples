import { Link } from "react-router-dom";
import ExampleButton from "../../../../components/exampleButton";
import PageContainer from "../../../../components/PageContainer";

const examplesData = [
  {
    exampleNum: "01",
    exampleTitle: "Dependencies should match the code",
    exampleUrl:
      "https://react.dev/learn/removing-effect-dependencies#does-some-reactive-value-change-unintentionally",
  },
  {
    exampleNum: "02",
    exampleTitle: "To remove a dependency, prove that it’s not a dependency",
    exampleUrl:
      "https://react.dev/learn/removing-effect-dependencies#does-some-reactive-value-change-unintentionally",
  },
  {
    exampleNum: "03",
    exampleTitle: "To change the dependencies, change the code",
    exampleUrl:
      "https://react.dev/learn/removing-effect-dependencies#does-some-reactive-value-change-unintentionally",
  },
  {
    exampleNum: "04",
    exampleTitle: "Removing unnecessary dependencies",
    exampleUrl:
      "https://react.dev/learn/removing-effect-dependencies#does-some-reactive-value-change-unintentionally",
  },
  {
    exampleNum: "05",
    exampleTitle: "Should this code move to an event handler?",
    exampleUrl:
      "https://react.dev/learn/removing-effect-dependencies#does-some-reactive-value-change-unintentionally",
  },
  {
    exampleNum: "06",
    exampleTitle: "Is your Effect doing several unrelated things?",
    exampleUrl:
      "https://react.dev/learn/removing-effect-dependencies#does-some-reactive-value-change-unintentionally",
  },
  {
    exampleNum: "07",
    exampleTitle: "Are you reading some state to calculate the next state?",
    exampleUrl:
      "https://react.dev/learn/removing-effect-dependencies#does-some-reactive-value-change-unintentionally",
  },
  {
    exampleNum: "08",
    exampleTitle:
      "Do you want to read a value without “reacting” to its changes?",
    exampleUrl:
      "https://react.dev/learn/removing-effect-dependencies#does-some-reactive-value-change-unintentionally",
  },
  {
    exampleNum: "09",
    exampleTitle: "Does some reactive value change unintentionally?",
    exampleUrl:
      "https://react.dev/learn/removing-effect-dependencies#does-some-reactive-value-change-unintentionally",
  },
];

interface HomePagePropTypes {
  chapterNum: string;
  chapterTitle: string;
  sectionNum: string;
  sectionTitle: string;
}

export default function Chapter2Section7Page({
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
