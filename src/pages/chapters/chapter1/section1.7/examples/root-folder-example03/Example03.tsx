import { Link } from "react-router-dom";
import App from "./App";

export default function Example03() {
  return (
    <div className="page-container">
      <Link className="link-homepage" to="/section1.7">
        Back to <span className="font-bold">Section Page</span>
      </Link>
      <section className="py-6 text-xl">
        <h2>Example 03: Keeping list items in order with key</h2>
      </section>
      {/* Render your React code below: */}
      <App />
    </div>
  );
}
