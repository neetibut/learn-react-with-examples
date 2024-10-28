import { Link } from "react-router-dom";
import SectionButton from "../../../components/SectionButton";
import PageContainer from "../../../components/PageContainer";

interface HomePagePropTypes {
  chapterNum: String;
  chapterTitle: String;
  sectionNum: String;
  sectionTitle: String;
}

const sectionsData = [
  {
    sectionNum: "2.1",
    sectionTitle: "Responding to Events",
  },
  {
    sectionNum: "2.2",
    sectionTitle: "State: A Component's Memory",
  },
  {
    sectionNum: "2.3",
    sectionTitle: "Render and Commit",
  },
  {
    sectionNum: "2.4",
    sectionTitle: "State as a Snapshot",
  },
  {
    sectionNum: "2.5",
    sectionTitle: "Queueing a Series of State Updates",
  },
  {
    sectionNum: "2.6",
    sectionTitle: "Updating Objects in State",
  },
  {
    sectionNum: "2.7",
    sectionTitle: "Updating Arrays in State",
  },
];

export default function Chapter2Page({
  chapterNum,
  chapterTitle,
}: HomePagePropTypes) {
  return (
    <PageContainer>
      <Link className="link-homepage" to="/">
        Back to Home Page
      </Link>
      <section className="py-6 flex flex-col items-start ">
        <h2 className="text-2xl font-bold">
          Chapter {chapterNum}: {chapterTitle}
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
    </PageContainer>
  );
}
