import { Link } from "react-router-dom";

interface ExampleButtonProps {
  exampleTitle: string;
  sectionNum: string;
  exampleNum: string;
  chapterNum: string;
  chapterTitle: string;
  sectionTitle: string;
}

export default function ExampleButton({
  exampleTitle,
  sectionNum,
  exampleNum,
  chapterNum,
  chapterTitle,
  sectionTitle,
}: ExampleButtonProps) {
  // Define the URL with query parameters for chapter, section, and example details
  const url = `/section${sectionNum}/example${exampleNum}?chapterNum=${chapterNum}&chapterTitle=${encodeURIComponent(
    chapterTitle
  )}&sectionNum=${sectionNum}&sectionTitle=${encodeURIComponent(
    sectionTitle
  )}&exampleNum=${exampleNum}&exampleTitle=${encodeURIComponent(exampleTitle)}`;

  return (
    <>
      <h2 className="pt-6 text-xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500">
        Example {exampleNum}: {exampleTitle}
      </h2>
      <button>
        <Link to={url}>{`Example ${exampleNum}`}</Link>
      </button>
    </>
  );
}
