import { Link } from "react-router-dom";
import ExampleButton from "../../../../components/exampleButton";
import PageContainer from "../../../../components/PageContainer";

const examplesData = [
  {
    exampleNum: "01",
    exampleTitle: "Custom Hooks - Sharing logic between components ",
    exampleUrl:
      "https://react.dev/learn/reusing-logic-with-custom-hooks#custom-hooks-sharing-logic-between-components",
  },
  {
    exampleNum: "02",
    exampleTitle: "Extracting your own custom Hook from a component ",
    exampleUrl:
      "https://react.dev/learn/reusing-logic-with-custom-hooks#extracting-your-own-custom-hook-from-a-component",
  },
  {
    exampleNum: "03",
    exampleTitle: "Hook names always start with use",
    exampleUrl:
      "https://react.dev/learn/reusing-logic-with-custom-hooks#hook-names-always-start-with-use",
  },
  {
    exampleNum: "04",
    exampleTitle: "Custom Hooks let you share stateful logic, not state itself",
    exampleUrl:
      "https://react.dev/learn/reusing-logic-with-custom-hooks#custom-hooks-let-you-share-stateful-logic-not-state-itself",
  },
  {
    exampleNum: "05",
    exampleTitle: "Passing reactive values between Hooks",
    exampleUrl:
      "https://react.dev/learn/reusing-logic-with-custom-hooks#passing-reactive-values-between-hooks",
  },
  {
    exampleNum: "06",
    exampleTitle: "Passing event handlers to custom hooks",
    exampleUrl:
      "https://react.dev/learn/reusing-logic-with-custom-hooks#passing-event-handlers-to-custom-hooks",
  },
  {
    exampleNum: "07",
    exampleTitle: "When to use custom Hooks",
    exampleUrl:
      "https://react.dev/learn/reusing-logic-with-custom-hooks#when-to-use-custom-hooks",
  },
  {
    exampleNum: "08",
    exampleTitle: "Custom Hooks Help you migrate to better patterns",
    exampleUrl:
      "https://react.dev/learn/reusing-logic-with-custom-hooks#custom-hooks-help-you-migrate-to-better-patterns",
  },
  {
    exampleNum: "09",
    exampleTitle: "There is more than one way to do it",
    exampleUrl:
      "https://react.dev/learn/reusing-logic-with-custom-hooks#there-is-more-than-one-way-to-do-it",
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
