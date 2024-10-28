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
    sectionNum: "3.1",
    sectionTitle: "Reacting to Input with State",
  },
  {
    sectionNum: "3.2",
    sectionTitle: "Choosing the State Structure",
  },
  {
    sectionNum: "3.3",
    sectionTitle: "Sharing State Between Components",
  },
  {
    sectionNum: "3.4",
    sectionTitle: "Preserving and Resetting State",
  },
  {
    sectionNum: "3.5",
    sectionTitle: "Extracting State Logic into a Reducer",
  },
  {
    sectionNum: "3.6",
    sectionTitle: "Passing Data Deeply with Context",
  },
  {
    sectionNum: "3.7",
    sectionTitle: "Scaling Up with Reducer and Context",
  },
];

export default function Chapter3Page({
  chapterNum,
  chapterTitle,
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
