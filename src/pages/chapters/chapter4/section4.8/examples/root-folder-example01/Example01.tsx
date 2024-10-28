import { Link, useLocation } from "react-router-dom";
import App from "./App.js";
import { useState } from "react";

export default function Example01() {
  // Use location to access query parameters
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  // Get chapter, section, and example information from query parameters
  const chapterNum = searchParams.get("chapterNum") || "Unknown Chapter";
  const chapterTitle = searchParams.get("chapterTitle") || "Untitled Chapter";
  const sectionNum = searchParams.get("sectionNum") || "Unknown Section";
  const sectionTitle = searchParams.get("sectionTitle") || "Untitled Section";
  const exampleNum = searchParams.get("exampleNum") || "Unknown Example";
  const exampleTitle = searchParams.get("exampleTitle") || "Untitled Example";

  // State to toggle the visibility of the list section
  const [isExpanded, setIsExpanded] = useState(false);

  // Toggle function
  const toggleList = () => setIsExpanded(!isExpanded);

  return (
    <div className="page-container">
      <Link className="link-homepage" to={`/section${sectionNum}`}>
        Back to <span className="font-bold">Section Page</span>
      </Link>
      <section className="py-6 flex flex-col text-xl items-start">
        <h2>
          Chapter {chapterNum}: {chapterTitle}
        </h2>
        <h2 className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400">
          Section {sectionNum}: {sectionTitle}
        </h2>
      </section>
      <section className="py-2 text-2xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500">
        <h2>
          Example {exampleNum}: {exampleTitle}
        </h2>
      </section>
      <section className="p-6 text-xl">
        <button
          onClick={toggleList}
          className="px-4 py-2 mb-4 bg-blue-500 text-white rounded-lg"
        >
          {isExpanded ? "Hide Details" : "Show Details"}
        </button>

        {isExpanded && (
          <ul className="list-disc list-inside text-start text-base">
            <li className="p-3 bg-white text-black  rounded-xl my-3">
              Arrays are a type of object.
            </li>
            <li className="p-3 bg-white text-black rounded-xl my-3">
              Treat arrays in React as read-only; avoid direct mutations.
            </li>
            <li className="p-3 bg-white text-black rounded-xl my-3">
              Do not reassign items within an array, such as arr[0] = 'bird'.
            </li>
            <li className="p-3 bg-white text-black rounded-xl my-3">
              Refrain from using array methods that alter the array in place,
              like push() and pop().
            </li>
            <li className="p-3 bg-white text-black rounded-xl my-3">
              Use methods like filter() and map() to create new arrays without
              modifying the original.
            </li>
            <li className="p-3 bg-white text-black rounded-xl my-3">
              To update an array in state, create a new array and pass it to the
              state setting function.
            </li>
          </ul>
        )}
      </section>
      {/* render your React code here below: */}
      <App />
    </div>
  );
}
