import { Link } from "react-router-dom";
import App from "./App.js";

export default function Example02() {
  return (
    <div className="page-container">
      <Link className="link-homepage" to="/section1.6">
        Back to <span className="font-bold">Section Page</span>
      </Link>
      <section className="py-6 text-xl">
        <h2>Example 02: Conditionally returning nothing with null</h2>
      </section>
      <App />
    </div>
  );
}
