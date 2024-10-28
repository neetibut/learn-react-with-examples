import { Link } from "react-router-dom";
import PageContainer from "../../../components/PageContainer";
import SectionButton from "../../../components/SectionButton";

type HomePagePropTypes = {
  chapterNum: String;
  chapterTitle: String;
  sectionNum: String;
  sectionTitle: String;
};

const sectionsData = [
  {
    sectionNum: "4.1",
    sectionTitle: "Referencing Values with Refs",
  },
  {
    sectionNum: "4.2",
    sectionTitle: "Manipulating the DOM with Refs",
  },
  {
    sectionNum: "4.3",
    sectionTitle: "Synchronizing with Effects",
  },
  {
    sectionNum: "4.4",
    sectionTitle: "You Might Not Need an Effect",
  },
  {
    sectionNum: "4.5",
    sectionTitle: "Lifecycle of Reactive Effects",
  },
  {
    sectionNum: "4.6",
    sectionTitle: "Separating Events from Effects",
  },
  {
    sectionNum: "4.7",
    sectionTitle: "Removing Effect Dependencies",
  },
  {
    sectionNum: "4.8",
    sectionTitle: "Reusing Logic with Custom Hooks",
  },
];

export default function Chapter4Page({
  chapterNum,
  sectionNum,
  chapterTitle,
  sectionTitle,
}: HomePagePropTypes) {
  return (
    <PageContainer>
      <Link className="link-homepage" to="/">
        Back to Home Page
      </Link>
      <section className="py-6 flex flex-col items-start ">
        <h2 className="text-2xl">
          Chapter {chapterNum}: <span>{chapterTitle}</span>
        </h2>
      </section>
      <div>
        {sectionsData.map((section) => (
          <SectionButton
            key={section.sectionNum}
            sectionNum={section.sectionNum}
            sectionTitle={section.sectionTitle}
          />
        ))}
      </div>
      {/* <h1>Coming soon... 🧙‍♂️</h1> */}
    </PageContainer>
  );
}
