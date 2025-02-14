import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
// CHAPTER 1
import Chapter1Page from "./pages/chapters/chapter1/Chapter1Page";
// SECTION 1.1
import Section1Part1 from "./pages/chapters/chapter1/section1.1/Section1.1Page.tsx";
import Chapter1Section1Part1Example01 from "./pages/chapters/chapter1/section1.1/examples/root-folder-example01/Example01.tsx";
import Chapter1Section1Part1Example02 from "./pages/chapters/chapter1/section1.1/examples/root-folder-example02/Example02.tsx";
import Chapter1Section1Part1Example03 from "./pages/chapters/chapter1/section1.1/examples/root-folder-example03/Example03.tsx";
import Chapter1Section1Part1Example04 from "./pages/chapters/chapter1/section1.1/examples/root-folder-example04/Example04.tsx";
import Chapter1Section1Part1Example05 from "./pages/chapters/chapter1/section1.1/examples/root-folder-example05/Example05.tsx";
import Chapter1Section1Part1Example06 from "./pages/chapters/chapter1/section1.1/examples/root-folder-example06/Example06.tsx";
import Chapter1Section1Part1Example07 from "./pages/chapters/chapter1/section1.1/examples/root-folder-example07/Example07.tsx";
import Chapter1Section1Part1Example08 from "./pages/chapters/chapter1/section1.1/examples/root-folder-example08/Example08.tsx";
import Chapter1Section1Part1Example09 from "./pages/chapters/chapter1/section1.1/examples/root-folder-example09/Example09.tsx";
import Chapter1Section1Part1Example10 from "./pages/chapters/chapter1/section1.1/examples/root-folder-example10/Example10.tsx";
// SECTION 1.2
import Section1Part2 from "./pages/chapters/chapter1/section1.2/Section1.2Page.tsx";
import Chapter1Section1Part2Example01 from "./pages/chapters/chapter1/section1.2/examples/root-folder-example01/Example01.tsx";
import Chapter1Section1Part2Example02 from "./pages/chapters/chapter1/section1.2/examples/root-folder-example02/Example02.tsx";
import Chapter1Section1Part2Example03 from "./pages/chapters/chapter1/section1.2/examples/root-folder-example03/Example03.tsx";
import Chapter1Section1Part2Example04 from "./pages/chapters/chapter1/section1.2/examples/root-folder-example04/Example04.tsx";
import Chapter1Section1Part2Example05 from "./pages/chapters/chapter1/section1.2/examples/root-folder-example05/Example05.tsx";
import Chapter1Section1Part2Example06 from "./pages/chapters/chapter1/section1.2/examples/root-folder-example06/Example06.tsx";
import Chapter1Section1Part2Example07 from "./pages/chapters/chapter1/section1.2/examples/root-folder-example07/Example07.tsx";
import Chapter1Section1Part2Example08 from "./pages/chapters/chapter1/section1.2/examples/root-folder-example08/Example08.tsx";
import Chapter1Section1Part2Example09 from "./pages/chapters/chapter1/section1.2/examples/root-folder-example09/Example09.tsx";
import Chapter1Section1Part2Example10 from "./pages/chapters/chapter1/section1.2/examples/root-folder-example10/Example10.tsx";
// SECTION 1.3
import Section1Part3 from "./pages/chapters/chapter1/section1.3/Section1.3Page.tsx";
import Chapter1Section1Part3Example01 from "./pages/chapters/chapter1/section1.3/examples/root-folder-example01/Example01.tsx";
import Chapter1Section1Part3Example02 from "./pages/chapters/chapter1/section1.3/examples/root-folder-example02/Example02.tsx";
import Chapter1Section1Part3Example03 from "./pages/chapters/chapter1/section1.3/examples/root-folder-example03/Example03.tsx";
import Chapter1Section1Part3Example04 from "./pages/chapters/chapter1/section1.3/examples/root-folder-example04/Example04.tsx";
import Chapter1Section1Part3Example05 from "./pages/chapters/chapter1/section1.3/examples/root-folder-example05/Example05.tsx";
import Chapter1Section1Part3Example06 from "./pages/chapters/chapter1/section1.3/examples/root-folder-example06/Example06.tsx";
import Chapter1Section1Part3Example07 from "./pages/chapters/chapter1/section1.3/examples/root-folder-example07/Example07.tsx";
import Chapter1Section1Part3Example08 from "./pages/chapters/chapter1/section1.3/examples/root-folder-example08/Example08.tsx";
import Chapter1Section1Part3Example09 from "./pages/chapters/chapter1/section1.3/examples/root-folder-example09/Example09.tsx";
import Chapter1Section1Part3Example10 from "./pages/chapters/chapter1/section1.3/examples/root-folder-example10/Example10.tsx";
// SECTION 1.4
import Section1Part4 from "./pages/chapters/chapter1/section1.4/Section1.4Page.tsx";
import Chapter1Section1Part4Example01 from "./pages/chapters/chapter1/section1.4/examples/root-folder-example01/Example01.tsx";
import Chapter1Section1Part4Example02 from "./pages/chapters/chapter1/section1.4/examples/root-folder-example02/Example02.tsx";
import Chapter1Section1Part4Example03 from "./pages/chapters/chapter1/section1.4/examples/root-folder-example03/Example03.tsx";
import Chapter1Section1Part4Example04 from "./pages/chapters/chapter1/section1.4/examples/root-folder-example04/Example04.tsx";
import Chapter1Section1Part4Example05 from "./pages/chapters/chapter1/section1.4/examples/root-folder-example05/Example05.tsx";
import Chapter1Section1Part4Example06 from "./pages/chapters/chapter1/section1.4/examples/root-folder-example06/Example06.tsx";
import Chapter1Section1Part4Example07 from "./pages/chapters/chapter1/section1.4/examples/root-folder-example07/Example07.tsx";
import Chapter1Section1Part4Example08 from "./pages/chapters/chapter1/section1.4/examples/root-folder-example08/Example08.tsx";
import Chapter1Section1Part4Example09 from "./pages/chapters/chapter1/section1.4/examples/root-folder-example09/Example09.tsx";
import Chapter1Section1Part4Example10 from "./pages/chapters/chapter1/section1.4/examples/root-folder-example10/Example10.tsx";
// SECTION 1.5
import Section1Part5 from "./pages/chapters/chapter1/section1.5/Section1.5Page.tsx";
import Chapter1Section1Part5Example01 from "./pages/chapters/chapter1/section1.5/examples/root-folder-example01/Example01.tsx";
import Chapter1Section1Part5Example02 from "./pages/chapters/chapter1/section1.5/examples/root-folder-example02/Example02.tsx";
import Chapter1Section1Part5Example03 from "./pages/chapters/chapter1/section1.5/examples/root-folder-example03/Example03.tsx";
import Chapter1Section1Part5Example04 from "./pages/chapters/chapter1/section1.5/examples/root-folder-example04/Example04.tsx";
import Chapter1Section1Part5Example05 from "./pages/chapters/chapter1/section1.5/examples/root-folder-example05/Example05.tsx";
import Chapter1Section1Part5Example06 from "./pages/chapters/chapter1/section1.5/examples/root-folder-example06/Example06.tsx";
import Chapter1Section1Part5Example07 from "./pages/chapters/chapter1/section1.5/examples/root-folder-example07/Example07.tsx";
import Chapter1Section1Part5Example08 from "./pages/chapters/chapter1/section1.5/examples/root-folder-example08/Example08.tsx";
import Chapter1Section1Part5Example09 from "./pages/chapters/chapter1/section1.5/examples/root-folder-example09/Example09.tsx";
import Chapter1Section1Part5Example10 from "./pages/chapters/chapter1/section1.5/examples/root-folder-example10/Example10.tsx";
// SECTION 1.6
import Section1Part6 from "./pages/chapters/chapter1/section1.6/Section1.6Page.tsx";
import Chapter1Section1Part6Example01 from "./pages/chapters/chapter1/section1.6/examples/root-folder-example01/Example01.tsx";
import Chapter1Section1Part6Example02 from "./pages/chapters/chapter1/section1.6/examples/root-folder-example02/Example02.tsx";
import Chapter1Section1Part6Example03 from "./pages/chapters/chapter1/section1.6/examples/root-folder-example03/Example03.tsx";
import Chapter1Section1Part6Example04 from "./pages/chapters/chapter1/section1.6/examples/root-folder-example04/Example04.tsx";
import Chapter1Section1Part6Example05 from "./pages/chapters/chapter1/section1.6/examples/root-folder-example05/Example05.tsx";
import Chapter1Section1Part6Example06 from "./pages/chapters/chapter1/section1.6/examples/root-folder-example06/Example06.tsx";
import Chapter1Section1Part6Example07 from "./pages/chapters/chapter1/section1.6/examples/root-folder-example07/Example07.tsx";
import Chapter1Section1Part6Example08 from "./pages/chapters/chapter1/section1.6/examples/root-folder-example08/Example08.tsx";
import Chapter1Section1Part6Example09 from "./pages/chapters/chapter1/section1.6/examples/root-folder-example09/Example09.tsx";
import Chapter1Section1Part6Example10 from "./pages/chapters/chapter1/section1.6/examples/root-folder-example10/Example10.tsx";
// SECTION 1.7
import Section1Part7 from "./pages/chapters/chapter1/section1.7/Section1.7Page.tsx";
import Chapter1Section1Part7Example01 from "./pages/chapters/chapter1/section1.7/examples/root-folder-example01/Example01.tsx";
import Chapter1Section1Part7Example02 from "./pages/chapters/chapter1/section1.7/examples/root-folder-example02/Example02.tsx";
import Chapter1Section1Part7Example03 from "./pages/chapters/chapter1/section1.7/examples/root-folder-example03/Example03.tsx";
import Chapter1Section1Part7Example04 from "./pages/chapters/chapter1/section1.7/examples/root-folder-example04/Example04.tsx";
import Chapter1Section1Part7Example05 from "./pages/chapters/chapter1/section1.7/examples/root-folder-example05/Example05.tsx";
import Chapter1Section1Part7Example06 from "./pages/chapters/chapter1/section1.7/examples/root-folder-example06/Example06.tsx";
import Chapter1Section1Part7Example07 from "./pages/chapters/chapter1/section1.7/examples/root-folder-example07/Example07.tsx";
import Chapter1Section1Part7Example08 from "./pages/chapters/chapter1/section1.7/examples/root-folder-example08/Example08.tsx";
import Chapter1Section1Part7Example09 from "./pages/chapters/chapter1/section1.7/examples/root-folder-example09/Example09.tsx";
import Chapter1Section1Part7Example10 from "./pages/chapters/chapter1/section1.7/examples/root-folder-example10/Example10.tsx";
// SECTION 1.8
import Section1Part8 from "./pages/chapters/chapter1/section1.8/Section1.8Page.tsx";
import Chapter1Section1Part8Example01 from "./pages/chapters/chapter1/section1.8/examples/root-folder-example01/Example01.tsx";
import Chapter1Section1Part8Example02 from "./pages/chapters/chapter1/section1.8/examples/root-folder-example02/Example02.tsx";
import Chapter1Section1Part8Example03 from "./pages/chapters/chapter1/section1.8/examples/root-folder-example03/Example03.tsx";
import Chapter1Section1Part8Example04 from "./pages/chapters/chapter1/section1.8/examples/root-folder-example04/Example04.tsx";
import Chapter1Section1Part8Example05 from "./pages/chapters/chapter1/section1.8/examples/root-folder-example05/Example05.tsx";
import Chapter1Section1Part8Example06 from "./pages/chapters/chapter1/section1.8/examples/root-folder-example06/Example06.tsx";
import Chapter1Section1Part8Example07 from "./pages/chapters/chapter1/section1.8/examples/root-folder-example07/Example07.tsx";
import Chapter1Section1Part8Example08 from "./pages/chapters/chapter1/section1.8/examples/root-folder-example08/Example08.tsx";
import Chapter1Section1Part8Example09 from "./pages/chapters/chapter1/section1.8/examples/root-folder-example09/Example09.tsx";
import Chapter1Section1Part8Example10 from "./pages/chapters/chapter1/section1.8/examples/root-folder-example10/Example10.tsx";
// SECTION 1.8
import Section1Part9 from "./pages/chapters/chapter1/section1.9/Section1.9Page.tsx";
import Chapter1Section1Part9Example01 from "./pages/chapters/chapter1/section1.9/examples/root-folder-example01/Example01.tsx";
import Chapter1Section1Part9Example02 from "./pages/chapters/chapter1/section1.9/examples/root-folder-example02/Example02.tsx";
import Chapter1Section1Part9Example03 from "./pages/chapters/chapter1/section1.9/examples/root-folder-example03/Example03.tsx";
import Chapter1Section1Part9Example04 from "./pages/chapters/chapter1/section1.9/examples/root-folder-example04/Example04.tsx";
import Chapter1Section1Part9Example05 from "./pages/chapters/chapter1/section1.9/examples/root-folder-example05/Example05.tsx";
import Chapter1Section1Part9Example06 from "./pages/chapters/chapter1/section1.9/examples/root-folder-example06/Example06.tsx";
import Chapter1Section1Part9Example07 from "./pages/chapters/chapter1/section1.9/examples/root-folder-example07/Example07.tsx";
import Chapter1Section1Part9Example08 from "./pages/chapters/chapter1/section1.9/examples/root-folder-example08/Example08.tsx";
import Chapter1Section1Part9Example09 from "./pages/chapters/chapter1/section1.9/examples/root-folder-example09/Example09.tsx";
import Chapter1Section1Part9Example10 from "./pages/chapters/chapter1/section1.9/examples/root-folder-example10/Example10.tsx";
// CHAPTER 2
import Chapter2Page from "./pages/chapters/chapter2/Chapter2Page";
// SECTION 2.1
import Section2Part1 from "./pages/chapters/chapter2/section2.1/Section2.1Page.tsx";
import Chapter2Section2Part1Example01 from "./pages/chapters/chapter2/section2.1/examples/root-folder-example01/Example01.tsx";
import Chapter2Section2Part1Example02 from "./pages/chapters/chapter2/section2.1/examples/root-folder-example02/Example02.tsx";
import Chapter2Section2Part1Example03 from "./pages/chapters/chapter2/section2.1/examples/root-folder-example03/Example03.tsx";
import Chapter2Section2Part1Example04 from "./pages/chapters/chapter2/section2.1/examples/root-folder-example04/Example04.tsx";
import Chapter2Section2Part1Example05 from "./pages/chapters/chapter2/section2.1/examples/root-folder-example05/Example05.tsx";
import Chapter2Section2Part1Example06 from "./pages/chapters/chapter2/section2.1/examples/root-folder-example06/Example06.tsx";
import Chapter2Section2Part1Example07 from "./pages/chapters/chapter2/section2.1/examples/root-folder-example07/Example07.tsx";
import Chapter2Section2Part1Example08 from "./pages/chapters/chapter2/section2.1/examples/root-folder-example08/Example08.tsx";
import Chapter2Section2Part1Example09 from "./pages/chapters/chapter2/section2.1/examples/root-folder-example09/Example09.tsx";
import Chapter2Section2Part1Example10 from "./pages/chapters/chapter2/section2.1/examples/root-folder-example10/Example10.tsx";
// SECTION 2.2
import Section2Part2 from "./pages/chapters/chapter2/section2.2/Section2.2Page.tsx";
import Chapter2Section2Part2Example01 from "./pages/chapters/chapter2/section2.2/examples/root-folder-example01/Example01.tsx";
import Chapter2Section2Part2Example02 from "./pages/chapters/chapter2/section2.2/examples/root-folder-example02/Example02.tsx";
import Chapter2Section2Part2Example03 from "./pages/chapters/chapter2/section2.2/examples/root-folder-example03/Example03.tsx";
import Chapter2Section2Part2Example04 from "./pages/chapters/chapter2/section2.2/examples/root-folder-example04/Example04.tsx";
import Chapter2Section2Part2Example05 from "./pages/chapters/chapter2/section2.2/examples/root-folder-example05/Example05.tsx";
import Chapter2Section2Part2Example06 from "./pages/chapters/chapter2/section2.2/examples/root-folder-example06/Example06.tsx";
import Chapter2Section2Part2Example07 from "./pages/chapters/chapter2/section2.2/examples/root-folder-example07/Example07.tsx";
import Chapter2Section2Part2Example08 from "./pages/chapters/chapter2/section2.2/examples/root-folder-example08/Example08.tsx";
import Chapter2Section2Part2Example09 from "./pages/chapters/chapter2/section2.2/examples/root-folder-example09/Example09.tsx";
import Chapter2Section2Part2Example10 from "./pages/chapters/chapter2/section2.2/examples/root-folder-example10/Example10.tsx";
// SECTION 2.3
import Section2Part3 from "./pages/chapters/chapter2/section2.3/Section2.3Page.tsx";
import Chapter2Section2Part3Example01 from "./pages/chapters/chapter2/section2.3/examples/root-folder-example01/Example01.tsx";
import Chapter2Section2Part3Example02 from "./pages/chapters/chapter2/section2.3/examples/root-folder-example02/Example02.tsx";
import Chapter2Section2Part3Example03 from "./pages/chapters/chapter2/section2.3/examples/root-folder-example03/Example03.tsx";
import Chapter2Section2Part3Example04 from "./pages/chapters/chapter2/section2.3/examples/root-folder-example04/Example04.tsx";
import Chapter2Section2Part3Example05 from "./pages/chapters/chapter2/section2.3/examples/root-folder-example05/Example05.tsx";
import Chapter2Section2Part3Example06 from "./pages/chapters/chapter2/section2.3/examples/root-folder-example06/Example06.tsx";
import Chapter2Section2Part3Example07 from "./pages/chapters/chapter2/section2.3/examples/root-folder-example07/Example07.tsx";
import Chapter2Section2Part3Example08 from "./pages/chapters/chapter2/section2.3/examples/root-folder-example08/Example08.tsx";
import Chapter2Section2Part3Example09 from "./pages/chapters/chapter2/section2.3/examples/root-folder-example09/Example09.tsx";
import Chapter2Section2Part3Example10 from "./pages/chapters/chapter2/section2.3/examples/root-folder-example10/Example10.tsx";
// SECTION 2.4
import Section2Part4 from "./pages/chapters/chapter2/section2.4/Section2.4Page.tsx";
import Chapter2Section2Part4Example01 from "./pages/chapters/chapter2/section2.4/examples/root-folder-example01/Example01.tsx";
import Chapter2Section2Part4Example02 from "./pages/chapters/chapter2/section2.4/examples/root-folder-example02/Example02.tsx";
import Chapter2Section2Part4Example03 from "./pages/chapters/chapter2/section2.4/examples/root-folder-example03/Example03.tsx";
import Chapter2Section2Part4Example04 from "./pages/chapters/chapter2/section2.4/examples/root-folder-example04/Example04.tsx";
import Chapter2Section2Part4Example05 from "./pages/chapters/chapter2/section2.4/examples/root-folder-example05/Example05.tsx";
import Chapter2Section2Part4Example06 from "./pages/chapters/chapter2/section2.4/examples/root-folder-example06/Example06.tsx";
import Chapter2Section2Part4Example07 from "./pages/chapters/chapter2/section2.4/examples/root-folder-example07/Example07.tsx";
import Chapter2Section2Part4Example08 from "./pages/chapters/chapter2/section2.4/examples/root-folder-example08/Example08.tsx";
import Chapter2Section2Part4Example09 from "./pages/chapters/chapter2/section2.4/examples/root-folder-example09/Example09.tsx";
import Chapter2Section2Part4Example10 from "./pages/chapters/chapter2/section2.4/examples/root-folder-example10/Example10.tsx";
// SECTION 2.5
import Section2Part5 from "./pages/chapters/chapter2/section2.5/Section2.5Page.tsx";
import Chapter2Section2Part5Example01 from "./pages/chapters/chapter2/section2.5/examples/root-folder-example01/Example01.tsx";
import Chapter2Section2Part5Example02 from "./pages/chapters/chapter2/section2.5/examples/root-folder-example02/Example02.tsx";
import Chapter2Section2Part5Example03 from "./pages/chapters/chapter2/section2.5/examples/root-folder-example03/Example03.tsx";
import Chapter2Section2Part5Example04 from "./pages/chapters/chapter2/section2.5/examples/root-folder-example04/Example04.tsx";
import Chapter2Section2Part5Example05 from "./pages/chapters/chapter2/section2.5/examples/root-folder-example05/Example05.tsx";
import Chapter2Section2Part5Example06 from "./pages/chapters/chapter2/section2.5/examples/root-folder-example06/Example06.tsx";
import Chapter2Section2Part5Example07 from "./pages/chapters/chapter2/section2.5/examples/root-folder-example07/Example07.tsx";
import Chapter2Section2Part5Example08 from "./pages/chapters/chapter2/section2.5/examples/root-folder-example08/Example08.tsx";
import Chapter2Section2Part5Example09 from "./pages/chapters/chapter2/section2.5/examples/root-folder-example09/Example09.tsx";
import Chapter2Section2Part5Example10 from "./pages/chapters/chapter2/section2.5/examples/root-folder-example10/Example10.tsx";
// SECTION 2.6
import Section2Part6 from "./pages/chapters/chapter2/section2.6/Section2.6Page.tsx";
import Chapter2Section2Part6Example01 from "./pages/chapters/chapter2/section2.6/examples/root-folder-example01/Example01.tsx";
import Chapter2Section2Part6Example02 from "./pages/chapters/chapter2/section2.6/examples/root-folder-example02/Example02.tsx";
import Chapter2Section2Part6Example03 from "./pages/chapters/chapter2/section2.6/examples/root-folder-example03/Example03.tsx";
import Chapter2Section2Part6Example04 from "./pages/chapters/chapter2/section2.6/examples/root-folder-example04/Example04.tsx";
import Chapter2Section2Part6Example05 from "./pages/chapters/chapter2/section2.6/examples/root-folder-example05/Example05.tsx";
import Chapter2Section2Part6Example06 from "./pages/chapters/chapter2/section2.6/examples/root-folder-example06/Example06.tsx";
import Chapter2Section2Part6Example07 from "./pages/chapters/chapter2/section2.6/examples/root-folder-example07/Example07.tsx";
import Chapter2Section2Part6Example08 from "./pages/chapters/chapter2/section2.6/examples/root-folder-example08/Example08.tsx";
import Chapter2Section2Part6Example09 from "./pages/chapters/chapter2/section2.6/examples/root-folder-example09/Example09.tsx";
import Chapter2Section2Part6Example10 from "./pages/chapters/chapter2/section2.6/examples/root-folder-example10/Example10.tsx";
// SECTION 2.7
import Section2Part7 from "./pages/chapters/chapter2/section2.7/Section2.7Page.tsx";
import Chapter2Section2Part7Example01 from "./pages/chapters/chapter2/section2.7/examples/root-folder-example01/Example01.tsx";
import Chapter2Section2Part7Example02 from "./pages/chapters/chapter2/section2.7/examples/root-folder-example02/Example02.tsx";
import Chapter2Section2Part7Example03 from "./pages/chapters/chapter2/section2.7/examples/root-folder-example03/Example03.tsx";
import Chapter2Section2Part7Example04 from "./pages/chapters/chapter2/section2.7/examples/root-folder-example04/Example04.tsx";
import Chapter2Section2Part7Example05 from "./pages/chapters/chapter2/section2.7/examples/root-folder-example05/Example05.tsx";
import Chapter2Section2Part7Example06 from "./pages/chapters/chapter2/section2.7/examples/root-folder-example06/Example06.tsx";
import Chapter2Section2Part7Example07 from "./pages/chapters/chapter2/section2.7/examples/root-folder-example07/Example07.tsx";
import Chapter2Section2Part7Example08 from "./pages/chapters/chapter2/section2.7/examples/root-folder-example08/Example08.tsx";
import Chapter2Section2Part7Example09 from "./pages/chapters/chapter2/section2.7/examples/root-folder-example09/Example09.tsx";
import Chapter2Section2Part7Example10 from "./pages/chapters/chapter2/section2.7/examples/root-folder-example10/Example10.tsx";
// CHAPTER 3
import Chapter3Page from "./pages/chapters/chapter3/Chapter3Page";
// SECTION 3.1
import Section3Part1 from "./pages/chapters/chapter3/section3.1/Section3.1Page.tsx";
import Chapter3Section3Part1Example01 from "./pages/chapters/chapter3/section3.1/examples/root-folder-example01/Example01.tsx";
import Chapter3Section3Part1Example02 from "./pages/chapters/chapter3/section3.1/examples/root-folder-example02/Example02.tsx";
import Chapter3Section3Part1Example03 from "./pages/chapters/chapter3/section3.1/examples/root-folder-example03/Example03.tsx";
import Chapter3Section3Part1Example04 from "./pages/chapters/chapter3/section3.1/examples/root-folder-example04/Example04.tsx";
import Chapter3Section3Part1Example05 from "./pages/chapters/chapter3/section3.1/examples/root-folder-example05/Example05.tsx";
import Chapter3Section3Part1Example06 from "./pages/chapters/chapter3/section3.1/examples/root-folder-example06/Example06.tsx";
import Chapter3Section3Part1Example07 from "./pages/chapters/chapter3/section3.1/examples/root-folder-example07/Example07.tsx";
import Chapter3Section3Part1Example08 from "./pages/chapters/chapter3/section3.1/examples/root-folder-example08/Example08.tsx";
import Chapter3Section3Part1Example09 from "./pages/chapters/chapter3/section3.1/examples/root-folder-example09/Example09.tsx";
import Chapter3Section3Part1Example10 from "./pages/chapters/chapter3/section3.1/examples/root-folder-example10/Example10.tsx";
// SECTION 3.2
import Section3Part2 from "./pages/chapters/chapter3/section3.2/Section3.2Page.tsx";
import Chapter3Section3Part2Example01 from "./pages/chapters/chapter3/section3.2/examples/root-folder-example01/Example01.tsx";
import Chapter3Section3Part2Example02 from "./pages/chapters/chapter3/section3.2/examples/root-folder-example02/Example02.tsx";
import Chapter3Section3Part2Example03 from "./pages/chapters/chapter3/section3.2/examples/root-folder-example03/Example03.tsx";
import Chapter3Section3Part2Example04 from "./pages/chapters/chapter3/section3.2/examples/root-folder-example04/Example04.tsx";
import Chapter3Section3Part2Example05 from "./pages/chapters/chapter3/section3.2/examples/root-folder-example05/Example05.tsx";
import Chapter3Section3Part2Example06 from "./pages/chapters/chapter3/section3.2/examples/root-folder-example06/Example06.tsx";
import Chapter3Section3Part2Example07 from "./pages/chapters/chapter3/section3.2/examples/root-folder-example07/Example07.tsx";
import Chapter3Section3Part2Example08 from "./pages/chapters/chapter3/section3.2/examples/root-folder-example08/Example08.tsx";
import Chapter3Section3Part2Example09 from "./pages/chapters/chapter3/section3.2/examples/root-folder-example09/Example09.tsx";
import Chapter3Section3Part2Example10 from "./pages/chapters/chapter3/section3.2/examples/root-folder-example10/Example10.tsx";
// SECTION 3.3
import Section3Part3 from "./pages/chapters/chapter3/section3.3/Section3.3Page.tsx";
import Chapter3Section3Part3Example01 from "./pages/chapters/chapter3/section3.3/examples/root-folder-example01/Example01.tsx";
import Chapter3Section3Part3Example02 from "./pages/chapters/chapter3/section3.3/examples/root-folder-example02/Example02.tsx";
import Chapter3Section3Part3Example03 from "./pages/chapters/chapter3/section3.3/examples/root-folder-example03/Example03.tsx";
import Chapter3Section3Part3Example04 from "./pages/chapters/chapter3/section3.3/examples/root-folder-example04/Example04.tsx";
import Chapter3Section3Part3Example05 from "./pages/chapters/chapter3/section3.3/examples/root-folder-example05/Example05.tsx";
import Chapter3Section3Part3Example06 from "./pages/chapters/chapter3/section3.3/examples/root-folder-example06/Example06.tsx";
import Chapter3Section3Part3Example07 from "./pages/chapters/chapter3/section3.3/examples/root-folder-example07/Example07.tsx";
import Chapter3Section3Part3Example08 from "./pages/chapters/chapter3/section3.3/examples/root-folder-example08/Example08.tsx";
import Chapter3Section3Part3Example09 from "./pages/chapters/chapter3/section3.3/examples/root-folder-example09/Example09.tsx";
import Chapter3Section3Part3Example10 from "./pages/chapters/chapter3/section3.3/examples/root-folder-example10/Example10.tsx";
// SECTION 3.4
import Section3Part4 from "./pages/chapters/chapter3/section3.4/Section3.4Page.tsx";
import Chapter3Section3Part4Example01 from "./pages/chapters/chapter3/section3.4/examples/root-folder-example01/Example01.tsx";
import Chapter3Section3Part4Example02 from "./pages/chapters/chapter3/section3.4/examples/root-folder-example02/Example02.tsx";
import Chapter3Section3Part4Example03 from "./pages/chapters/chapter3/section3.4/examples/root-folder-example03/Example03.tsx";
import Chapter3Section3Part4Example04 from "./pages/chapters/chapter3/section3.4/examples/root-folder-example04/Example04.tsx";
import Chapter3Section3Part4Example05 from "./pages/chapters/chapter3/section3.4/examples/root-folder-example05/Example05.tsx";
import Chapter3Section3Part4Example06 from "./pages/chapters/chapter3/section3.4/examples/root-folder-example06/Example06.tsx";
import Chapter3Section3Part4Example07 from "./pages/chapters/chapter3/section3.4/examples/root-folder-example07/Example07.tsx";
import Chapter3Section3Part4Example08 from "./pages/chapters/chapter3/section3.4/examples/root-folder-example08/Example08.tsx";
import Chapter3Section3Part4Example09 from "./pages/chapters/chapter3/section3.4/examples/root-folder-example09/Example09.tsx";
import Chapter3Section3Part4Example10 from "./pages/chapters/chapter3/section3.4/examples/root-folder-example10/Example10.tsx";
// SECTION 3.5
import Section3Part5 from "./pages/chapters/chapter3/section3.5/Section3.5Page.tsx";
import Chapter3Section3Part5Example01 from "./pages/chapters/chapter3/section3.5/examples/root-folder-example01/Example01.tsx";
import Chapter3Section3Part5Example02 from "./pages/chapters/chapter3/section3.5/examples/root-folder-example02/Example02.tsx";
import Chapter3Section3Part5Example03 from "./pages/chapters/chapter3/section3.5/examples/root-folder-example03/Example03.tsx";
import Chapter3Section3Part5Example04 from "./pages/chapters/chapter3/section3.5/examples/root-folder-example04/Example04.tsx";
import Chapter3Section3Part5Example05 from "./pages/chapters/chapter3/section3.5/examples/root-folder-example05/Example05.tsx";
import Chapter3Section3Part5Example06 from "./pages/chapters/chapter3/section3.5/examples/root-folder-example06/Example06.tsx";
import Chapter3Section3Part5Example07 from "./pages/chapters/chapter3/section3.5/examples/root-folder-example07/Example07.tsx";
import Chapter3Section3Part5Example08 from "./pages/chapters/chapter3/section3.5/examples/root-folder-example08/Example08.tsx";
import Chapter3Section3Part5Example09 from "./pages/chapters/chapter3/section3.5/examples/root-folder-example09/Example09.tsx";
import Chapter3Section3Part5Example10 from "./pages/chapters/chapter3/section3.5/examples/root-folder-example10/Example10.tsx";
// SECTION 3.6
import Section3Part6 from "./pages/chapters/chapter3/section3.6/Section3.6Page.tsx";
import Chapter3Section3Part6Example01 from "./pages/chapters/chapter3/section3.6/examples/root-folder-example01/Example01.tsx";
import Chapter3Section3Part6Example02 from "./pages/chapters/chapter3/section3.6/examples/root-folder-example02/Example02.tsx";
import Chapter3Section3Part6Example03 from "./pages/chapters/chapter3/section3.6/examples/root-folder-example03/Example03.tsx";
import Chapter3Section3Part6Example04 from "./pages/chapters/chapter3/section3.6/examples/root-folder-example04/Example04.tsx";
import Chapter3Section3Part6Example05 from "./pages/chapters/chapter3/section3.6/examples/root-folder-example05/Example05.tsx";
import Chapter3Section3Part6Example06 from "./pages/chapters/chapter3/section3.6/examples/root-folder-example06/Example06.tsx";
import Chapter3Section3Part6Example07 from "./pages/chapters/chapter3/section3.6/examples/root-folder-example07/Example07.tsx";
import Chapter3Section3Part6Example08 from "./pages/chapters/chapter3/section3.6/examples/root-folder-example08/Example08.tsx";
import Chapter3Section3Part6Example09 from "./pages/chapters/chapter3/section3.6/examples/root-folder-example09/Example09.tsx";
import Chapter3Section3Part6Example10 from "./pages/chapters/chapter3/section3.6/examples/root-folder-example10/Example10.tsx";
// SECTION 3.7
import Section3Part7 from "./pages/chapters/chapter3/section3.7/Section3.7Page.tsx";
import Chapter3Section3Part7Example01 from "./pages/chapters/chapter3/section3.7/examples/root-folder-example01/Example01.tsx";
import Chapter3Section3Part7Example02 from "./pages/chapters/chapter3/section3.7/examples/root-folder-example02/Example02.tsx";
import Chapter3Section3Part7Example03 from "./pages/chapters/chapter3/section3.7/examples/root-folder-example03/Example03.tsx";
import Chapter3Section3Part7Example04 from "./pages/chapters/chapter3/section3.7/examples/root-folder-example04/Example04.tsx";
import Chapter3Section3Part7Example05 from "./pages/chapters/chapter3/section3.7/examples/root-folder-example05/Example05.tsx";
import Chapter3Section3Part7Example06 from "./pages/chapters/chapter3/section3.7/examples/root-folder-example06/Example06.tsx";
import Chapter3Section3Part7Example07 from "./pages/chapters/chapter3/section3.7/examples/root-folder-example07/Example07.tsx";
import Chapter3Section3Part7Example08 from "./pages/chapters/chapter3/section3.7/examples/root-folder-example08/Example08.tsx";
import Chapter3Section3Part7Example09 from "./pages/chapters/chapter3/section3.7/examples/root-folder-example09/Example09.tsx";
import Chapter3Section3Part7Example10 from "./pages/chapters/chapter3/section3.7/examples/root-folder-example10/Example10.tsx";
// CHAPTER 4
import Chapter4Page from "./pages/chapters/chapter4/Chapter4Page";
// SECTION 4.1
import Section4Part1 from "./pages/chapters/chapter4/section4.1/Section4.1Page.tsx";
import Chapter4Section4Part1Example01 from "./pages/chapters/chapter4/section4.1/examples/root-folder-example01/Example01.tsx";
import Chapter4Section4Part1Example02 from "./pages/chapters/chapter4/section4.1/examples/root-folder-example02/Example02.tsx";
import Chapter4Section4Part1Example03 from "./pages/chapters/chapter4/section4.1/examples/root-folder-example03/Example03.tsx";
import Chapter4Section4Part1Example04 from "./pages/chapters/chapter4/section4.1/examples/root-folder-example04/Example04.tsx";
import Chapter4Section4Part1Example05 from "./pages/chapters/chapter4/section4.1/examples/root-folder-example05/Example05.tsx";
import Chapter4Section4Part1Example06 from "./pages/chapters/chapter4/section4.1/examples/root-folder-example06/Example06.tsx";
import Chapter4Section4Part1Example07 from "./pages/chapters/chapter4/section4.1/examples/root-folder-example07/Example07.tsx";
import Chapter4Section4Part1Example08 from "./pages/chapters/chapter4/section4.1/examples/root-folder-example08/Example08.tsx";
import Chapter4Section4Part1Example09 from "./pages/chapters/chapter4/section4.1/examples/root-folder-example09/Example09.tsx";
import Chapter4Section4Part1Example10 from "./pages/chapters/chapter4/section4.1/examples/root-folder-example10/Example10.tsx";
// SECTION 4.2
import Section4Part2 from "./pages/chapters/chapter4/section4.2/Section4.2Page.tsx";
import Chapter4Section4Part2Example01 from "./pages/chapters/chapter4/section4.2/examples/root-folder-example01/Example01.tsx";
import Chapter4Section4Part2Example02 from "./pages/chapters/chapter4/section4.2/examples/root-folder-example02/Example02.tsx";
import Chapter4Section4Part2Example03 from "./pages/chapters/chapter4/section4.2/examples/root-folder-example03/Example03.tsx";
import Chapter4Section4Part2Example04 from "./pages/chapters/chapter4/section4.2/examples/root-folder-example04/Example04.tsx";
import Chapter4Section4Part2Example05 from "./pages/chapters/chapter4/section4.2/examples/root-folder-example05/Example05.tsx";
import Chapter4Section4Part2Example06 from "./pages/chapters/chapter4/section4.2/examples/root-folder-example06/Example06.tsx";
import Chapter4Section4Part2Example07 from "./pages/chapters/chapter4/section4.2/examples/root-folder-example07/Example07.tsx";
import Chapter4Section4Part2Example08 from "./pages/chapters/chapter4/section4.2/examples/root-folder-example08/Example08.tsx";
import Chapter4Section4Part2Example09 from "./pages/chapters/chapter4/section4.2/examples/root-folder-example09/Example09.tsx";
import Chapter4Section4Part2Example10 from "./pages/chapters/chapter4/section4.2/examples/root-folder-example10/Example10.tsx";
// SECTION 4.3
import Section4Part3 from "./pages/chapters/chapter4/section4.3/Section4.3Page.tsx";
import Chapter4Section4Part3Example01 from "./pages/chapters/chapter4/section4.3/examples/root-folder-example01/Example01.tsx";
import Chapter4Section4Part3Example02 from "./pages/chapters/chapter4/section4.3/examples/root-folder-example02/Example02.tsx";
import Chapter4Section4Part3Example03 from "./pages/chapters/chapter4/section4.3/examples/root-folder-example03/Example03.tsx";
import Chapter4Section4Part3Example04 from "./pages/chapters/chapter4/section4.3/examples/root-folder-example04/Example04.tsx";
import Chapter4Section4Part3Example05 from "./pages/chapters/chapter4/section4.3/examples/root-folder-example05/Example05.tsx";
import Chapter4Section4Part3Example06 from "./pages/chapters/chapter4/section4.3/examples/root-folder-example06/Example06.tsx";
import Chapter4Section4Part3Example07 from "./pages/chapters/chapter4/section4.3/examples/root-folder-example07/Example07.tsx";
import Chapter4Section4Part3Example08 from "./pages/chapters/chapter4/section4.3/examples/root-folder-example08/Example08.tsx";
import Chapter4Section4Part3Example09 from "./pages/chapters/chapter4/section4.3/examples/root-folder-example09/Example09.tsx";
import Chapter4Section4Part3Example10 from "./pages/chapters/chapter4/section4.3/examples/root-folder-example10/Example10.tsx";
import Chapter4Section4Part3Example11 from "./pages/chapters/chapter4/section4.3/examples/root-folder-example11/Example11.tsx";
import Chapter4Section4Part3Example12 from "./pages/chapters/chapter4/section4.3/examples/root-folder-example12/Example12.tsx";
// SECTION 4.4
import Section4Part4 from "./pages/chapters/chapter4/section4.4/Section4.4Page.tsx";
import Chapter4Section4Part4Example01 from "./pages/chapters/chapter4/section4.4/examples/root-folder-example01/Example01.tsx";
import Chapter4Section4Part4Example02 from "./pages/chapters/chapter4/section4.4/examples/root-folder-example02/Example02.tsx";
import Chapter4Section4Part4Example03 from "./pages/chapters/chapter4/section4.4/examples/root-folder-example03/Example03.tsx";
import Chapter4Section4Part4Example04 from "./pages/chapters/chapter4/section4.4/examples/root-folder-example04/Example04.tsx";
import Chapter4Section4Part4Example05 from "./pages/chapters/chapter4/section4.4/examples/root-folder-example05/Example05.tsx";
import Chapter4Section4Part4Example06 from "./pages/chapters/chapter4/section4.4/examples/root-folder-example06/Example06.tsx";
import Chapter4Section4Part4Example07 from "./pages/chapters/chapter4/section4.4/examples/root-folder-example07/Example07.tsx";
import Chapter4Section4Part4Example08 from "./pages/chapters/chapter4/section4.4/examples/root-folder-example08/Example08.tsx";
import Chapter4Section4Part4Example09 from "./pages/chapters/chapter4/section4.4/examples/root-folder-example09/Example09.tsx";
import Chapter4Section4Part4Example10 from "./pages/chapters/chapter4/section4.4/examples/root-folder-example10/Example10.tsx";
import Chapter4Section4Part4Example11 from "./pages/chapters/chapter4/section4.4/examples/root-folder-example11/Example11.tsx";
import Chapter4Section4Part4Example12 from "./pages/chapters/chapter4/section4.4/examples/root-folder-example12/Example12.tsx";
import Chapter4Section4Part4Example13 from "./pages/chapters/chapter4/section4.4/examples/root-folder-example13/Example13.tsx";
// SECTION 4.5
import Section4Part5 from "./pages/chapters/chapter4/section4.5/Section4.5Page.tsx";
import Chapter4Section4Part5Example01 from "./pages/chapters/chapter4/section4.5/examples/root-folder-example01/Example01.tsx";
import Chapter4Section4Part5Example02 from "./pages/chapters/chapter4/section4.5/examples/root-folder-example02/Example02.tsx";
import Chapter4Section4Part5Example03 from "./pages/chapters/chapter4/section4.5/examples/root-folder-example03/Example03.tsx";
import Chapter4Section4Part5Example04 from "./pages/chapters/chapter4/section4.5/examples/root-folder-example04/Example04.tsx";
import Chapter4Section4Part5Example05 from "./pages/chapters/chapter4/section4.5/examples/root-folder-example05/Example05.tsx";
import Chapter4Section4Part5Example06 from "./pages/chapters/chapter4/section4.5/examples/root-folder-example06/Example06.tsx";
import Chapter4Section4Part5Example07 from "./pages/chapters/chapter4/section4.5/examples/root-folder-example07/Example07.tsx";
import Chapter4Section4Part5Example08 from "./pages/chapters/chapter4/section4.5/examples/root-folder-example08/Example08.tsx";
import Chapter4Section4Part5Example09 from "./pages/chapters/chapter4/section4.5/examples/root-folder-example09/Example09.tsx";
import Chapter4Section4Part5Example10 from "./pages/chapters/chapter4/section4.5/examples/root-folder-example10/Example10.tsx";
import Chapter4Section4Part5Example11 from "./pages/chapters/chapter4/section4.5/examples/root-folder-example11/Example11.tsx";
import Chapter4Section4Part5Example12 from "./pages/chapters/chapter4/section4.5/examples/root-folder-example12/Example12.tsx";
// SECTION 4.6
import Section4Part6 from "./pages/chapters/chapter4/section4.6/Section4.6Page.tsx";
import Chapter4Section4Part6Example01 from "./pages/chapters/chapter4/section4.6/examples/root-folder-example01/Example01.tsx";
import Chapter4Section4Part6Example02 from "./pages/chapters/chapter4/section4.6/examples/root-folder-example02/Example02.tsx";
import Chapter4Section4Part6Example03 from "./pages/chapters/chapter4/section4.6/examples/root-folder-example03/Example03.tsx";
import Chapter4Section4Part6Example04 from "./pages/chapters/chapter4/section4.6/examples/root-folder-example04/Example04.tsx";
import Chapter4Section4Part6Example05 from "./pages/chapters/chapter4/section4.6/examples/root-folder-example05/Example05.tsx";
import Chapter4Section4Part6Example06 from "./pages/chapters/chapter4/section4.6/examples/root-folder-example06/Example06.tsx";
import Chapter4Section4Part6Example07 from "./pages/chapters/chapter4/section4.6/examples/root-folder-example07/Example07.tsx";
import Chapter4Section4Part6Example08 from "./pages/chapters/chapter4/section4.6/examples/root-folder-example08/Example08.tsx";
import Chapter4Section4Part6Example09 from "./pages/chapters/chapter4/section4.6/examples/root-folder-example09/Example09.tsx";
import Chapter4Section4Part6Example10 from "./pages/chapters/chapter4/section4.6/examples/root-folder-example10/Example10.tsx";
// SECTION 4.7
import Section4Part7 from "./pages/chapters/chapter4/section4.7/Section4.7Page.tsx";
import Chapter4Section4Part7Example01 from "./pages/chapters/chapter4/section4.7/examples/root-folder-example01/Example01.tsx";
import Chapter4Section4Part7Example02 from "./pages/chapters/chapter4/section4.7/examples/root-folder-example02/Example02.tsx";
import Chapter4Section4Part7Example03 from "./pages/chapters/chapter4/section4.7/examples/root-folder-example03/Example03.tsx";
import Chapter4Section4Part7Example04 from "./pages/chapters/chapter4/section4.7/examples/root-folder-example04/Example04.tsx";
import Chapter4Section4Part7Example05 from "./pages/chapters/chapter4/section4.7/examples/root-folder-example05/Example05.tsx";
import Chapter4Section4Part7Example06 from "./pages/chapters/chapter4/section4.7/examples/root-folder-example06/Example06.tsx";
import Chapter4Section4Part7Example07 from "./pages/chapters/chapter4/section4.7/examples/root-folder-example07/Example07.tsx";
import Chapter4Section4Part7Example08 from "./pages/chapters/chapter4/section4.7/examples/root-folder-example08/Example08.tsx";
import Chapter4Section4Part7Example09 from "./pages/chapters/chapter4/section4.7/examples/root-folder-example09/Example09.tsx";
import Chapter4Section4Part7Example10 from "./pages/chapters/chapter4/section4.7/examples/root-folder-example10/Example10.tsx";
// SECTION 4.8
import Section4Part8 from "./pages/chapters/chapter4/section4.8/Section4.8Page.tsx";
import Chapter4Section4Part8Example01 from "./pages/chapters/chapter4/section4.8/examples/root-folder-example01/Example01.tsx";
import Chapter4Section4Part8Example02 from "./pages/chapters/chapter4/section4.8/examples/root-folder-example02/Example02.tsx";
import Chapter4Section4Part8Example03 from "./pages/chapters/chapter4/section4.8/examples/root-folder-example03/Example03.tsx";
import Chapter4Section4Part8Example04 from "./pages/chapters/chapter4/section4.8/examples/root-folder-example04/Example04.tsx";
import Chapter4Section4Part8Example05 from "./pages/chapters/chapter4/section4.8/examples/root-folder-example05/Example05.tsx";
import Chapter4Section4Part8Example06 from "./pages/chapters/chapter4/section4.8/examples/root-folder-example06/Example06.tsx";
import Chapter4Section4Part8Example07 from "./pages/chapters/chapter4/section4.8/examples/root-folder-example07/Example07.tsx";
import Chapter4Section4Part8Example08 from "./pages/chapters/chapter4/section4.8/examples/root-folder-example08/Example08.tsx";
import Chapter4Section4Part8Example09 from "./pages/chapters/chapter4/section4.8/examples/root-folder-example09/Example09.tsx";
import Chapter4Section4Part8Example10 from "./pages/chapters/chapter4/section4.8/examples/root-folder-example10/Example10.tsx";

// We setup React-Router-Dom for our web app's navigation here.
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing page */}
        <Route
          path="/"
          element={
            <HomePage
              chapterNum1="1"
              chapterTitle1="Describing the UI"
              chapterNum2="2"
              chapterTitle2="Adding Interactivity"
              chapterNum3="3"
              chapterTitle3="Managing State"
              chapterNum4="4"
              chapterTitle4="Escape Hatches"
            />
          }
        />
        {/* Chapter 1 page */}
        <Route
          path="/chapter1"
          element={
            <Chapter1Page chapterNum="1" chapterTitle="Describing the UI" />
          }
        />
        {/* Chapter 1 Section 1.1 page */}
        <Route
          path="/section1.1"
          element={
            <Section1Part1
              chapterNum="1"
              chapterTitle="Describing the UI"
              sectionNum="1.1"
              sectionTitle="Responding to Events"
            />
          }
        />
        {/* Chapter 1 Section 1.1 examples */}
        <Route
          path="/section1.1/example01"
          element={<Chapter1Section1Part1Example01 />}
        />
        <Route
          path="/section1.1/example02"
          element={<Chapter1Section1Part1Example02 />}
        />
        <Route
          path="/section1.1/example03"
          element={<Chapter1Section1Part1Example03 />}
        />
        <Route
          path="/section1.1/example04"
          element={<Chapter1Section1Part1Example04 />}
        />
        <Route
          path="/section1.1/example05"
          element={<Chapter1Section1Part1Example05 />}
        />
        <Route
          path="/section1.1/example06"
          element={<Chapter1Section1Part1Example06 />}
        />
        <Route
          path="/section1.1/example07"
          element={<Chapter1Section1Part1Example07 />}
        />
        <Route
          path="/section1.1/example08"
          element={<Chapter1Section1Part1Example08 />}
        />
        <Route
          path="/section1.1/example09"
          element={<Chapter1Section1Part1Example09 />}
        />
        <Route
          path="/section1.1/example10"
          element={<Chapter1Section1Part1Example10 />}
        />
        {/* End of section */}
        {/* Chapter 1 Section 1.2 page */}
        <Route
          path="/section1.2"
          element={
            <Section1Part2
              chapterNum="1"
              chapterTitle="Describing the UI"
              sectionNum="1.2"
              sectionTitle="Importing and Exporting Components"
            />
          }
        />
        {/* Chapter 1 Section 1.2 examples */}
        <Route
          path="/section1.2/example01"
          element={<Chapter1Section1Part2Example01 />}
        />
        <Route
          path="/section1.2/example02"
          element={<Chapter1Section1Part2Example02 />}
        />
        <Route
          path="/section1.2/example03"
          element={<Chapter1Section1Part2Example03 />}
        />
        <Route
          path="/section1.2/example04"
          element={<Chapter1Section1Part2Example04 />}
        />
        <Route
          path="/section1.2/example05"
          element={<Chapter1Section1Part2Example05 />}
        />
        <Route
          path="/section1.2/example06"
          element={<Chapter1Section1Part2Example06 />}
        />
        <Route
          path="/section1.2/example07"
          element={<Chapter1Section1Part2Example07 />}
        />
        <Route
          path="/section1.2/example08"
          element={<Chapter1Section1Part2Example08 />}
        />
        <Route
          path="/section1.2/example09"
          element={<Chapter1Section1Part2Example09 />}
        />
        <Route
          path="/section1.2/example10"
          element={<Chapter1Section1Part2Example10 />}
        />
        {/* End of section */}
        {/* Chapter 1 Section 1.3 page */}
        <Route
          path="/section1.3"
          element={
            <Section1Part3
              chapterNum="1"
              chapterTitle="Your First Component"
              sectionNum="1.3"
              sectionTitle="Importing and Exporting Components"
            />
          }
        />
        {/* Chapter 1 Section 1.3 examples */}
        <Route
          path="/section1.3/example01"
          element={<Chapter1Section1Part3Example01 />}
        />
        <Route
          path="/section1.3/example02"
          element={<Chapter1Section1Part3Example02 />}
        />
        <Route
          path="/section1.3/example03"
          element={<Chapter1Section1Part3Example03 />}
        />
        <Route
          path="/section1.3/example04"
          element={<Chapter1Section1Part3Example04 />}
        />
        <Route
          path="/section1.3/example05"
          element={<Chapter1Section1Part3Example05 />}
        />
        <Route
          path="/section1.3/example06"
          element={<Chapter1Section1Part3Example06 />}
        />
        <Route
          path="/section1.3/example07"
          element={<Chapter1Section1Part3Example07 />}
        />
        <Route
          path="/section1.3/example08"
          element={<Chapter1Section1Part3Example08 />}
        />
        <Route
          path="/section1.3/example09"
          element={<Chapter1Section1Part3Example09 />}
        />
        <Route
          path="/section1.3/example10"
          element={<Chapter1Section1Part3Example10 />}
        />
        {/* End of section */}
        {/* Chapter 1 Section 1.4 page */}
        <Route
          path="/section1.4"
          element={
            <Section1Part4
              chapterNum="1"
              chapterTitle="Describing the UI"
              sectionNum="1.4"
              sectionTitle="JavaScript in JSX with Curly Braces"
            />
          }
        />
        {/* Chapter 1 Section 1.4 examples */}
        <Route
          path="/section1.4/example01"
          element={<Chapter1Section1Part4Example01 />}
        />
        <Route
          path="/section1.4/example02"
          element={<Chapter1Section1Part4Example02 />}
        />
        <Route
          path="/section1.4/example03"
          element={<Chapter1Section1Part4Example03 />}
        />
        <Route
          path="/section1.4/example04"
          element={<Chapter1Section1Part4Example04 />}
        />
        <Route
          path="/section1.4/example05"
          element={<Chapter1Section1Part4Example05 />}
        />
        <Route
          path="/section1.4/example06"
          element={<Chapter1Section1Part4Example06 />}
        />
        <Route
          path="/section1.4/example07"
          element={<Chapter1Section1Part4Example07 />}
        />
        <Route
          path="/section1.4/example08"
          element={<Chapter1Section1Part4Example08 />}
        />
        <Route
          path="/section1.4/example09"
          element={<Chapter1Section1Part4Example09 />}
        />
        <Route
          path="/section1.4/example10"
          element={<Chapter1Section1Part4Example10 />}
        />
        {/* End of section */}
        {/* Chapter 1 Section 1.5 page */}
        <Route
          path="/section1.5"
          element={
            <Section1Part5
              chapterNum="1"
              chapterTitle="Describing the UI"
              sectionNum="1.5"
              sectionTitle="Passing Props to a Component"
            />
          }
        />
        {/* Chapter 1 Section 1.5 examples */}
        <Route
          path="/section1.5/example01"
          element={<Chapter1Section1Part5Example01 />}
        />
        <Route
          path="/section1.5/example02"
          element={<Chapter1Section1Part5Example02 />}
        />
        <Route
          path="/section1.5/example03"
          element={<Chapter1Section1Part5Example03 />}
        />
        <Route
          path="/section1.5/example04"
          element={<Chapter1Section1Part5Example04 />}
        />
        <Route
          path="/section1.5/example05"
          element={<Chapter1Section1Part5Example05 />}
        />
        <Route
          path="/section1.5/example06"
          element={<Chapter1Section1Part5Example06 />}
        />
        <Route
          path="/section1.5/example07"
          element={<Chapter1Section1Part5Example07 />}
        />
        <Route
          path="/section1.5/example08"
          element={<Chapter1Section1Part5Example08 />}
        />
        <Route
          path="/section1.5/example09"
          element={<Chapter1Section1Part5Example09 />}
        />
        <Route
          path="/section1.5/example10"
          element={<Chapter1Section1Part5Example10 />}
        />
        {/* End of section */}
        {/* Chapter 1 Section 1.6 page */}
        <Route
          path="/section1.6"
          element={
            <Section1Part6
              chapterNum="1"
              chapterTitle="Describing the UI"
              sectionNum="1.6"
              sectionTitle="Conditional Rendering"
            />
          }
        />
        {/* Chapter 1 Section 1.6 examples */}
        <Route
          path="/section1.6/example01"
          element={<Chapter1Section1Part6Example01 />}
        />
        <Route
          path="/section1.6/example02"
          element={<Chapter1Section1Part6Example02 />}
        />
        <Route
          path="/section1.6/example03"
          element={<Chapter1Section1Part6Example03 />}
        />
        <Route
          path="/section1.6/example04"
          element={<Chapter1Section1Part6Example04 />}
        />
        <Route
          path="/section1.6/example05"
          element={<Chapter1Section1Part6Example05 />}
        />
        <Route
          path="/section1.6/example06"
          element={<Chapter1Section1Part6Example06 />}
        />
        <Route
          path="/section1.6/example07"
          element={<Chapter1Section1Part6Example07 />}
        />
        <Route
          path="/section1.6/example08"
          element={<Chapter1Section1Part6Example08 />}
        />
        <Route
          path="/section1.6/example09"
          element={<Chapter1Section1Part6Example09 />}
        />
        <Route
          path="/section1.6/example10"
          element={<Chapter1Section1Part6Example10 />}
        />
        {/* End of section */}
        {/* Chapter 1 Section 1.7 page */}
        <Route
          path="/section1.7"
          element={
            <Section1Part7
              chapterNum="1"
              chapterTitle="Describing the UI"
              sectionNum="1.7"
              sectionTitle="Rendering Lists"
            />
          }
        />
        {/* Chapter 1 Section 1.7 examples */}
        <Route
          path="/section1.7/example01"
          element={<Chapter1Section1Part7Example01 />}
        />
        <Route
          path="/section1.7/example02"
          element={<Chapter1Section1Part7Example02 />}
        />
        <Route
          path="/section1.7/example03"
          element={<Chapter1Section1Part7Example03 />}
        />
        <Route
          path="/section1.7/example04"
          element={<Chapter1Section1Part7Example04 />}
        />
        <Route
          path="/section1.7/example05"
          element={<Chapter1Section1Part7Example05 />}
        />
        <Route
          path="/section1.7/example06"
          element={<Chapter1Section1Part7Example06 />}
        />
        <Route
          path="/section1.7/example07"
          element={<Chapter1Section1Part7Example07 />}
        />
        <Route
          path="/section1.7/example08"
          element={<Chapter1Section1Part7Example08 />}
        />
        <Route
          path="/section1.7/example09"
          element={<Chapter1Section1Part7Example09 />}
        />
        <Route
          path="/section1.7/example10"
          element={<Chapter1Section1Part7Example10 />}
        />
        {/* End of section */}
        {/* Chapter 1 Section 1.8 page */}
        <Route
          path="/section1.8"
          element={
            <Section1Part8
              chapterNum="1"
              chapterTitle="Describing the UI"
              sectionNum="1.8"
              sectionTitle="Keeping Components Pure"
            />
          }
        />
        {/* Chapter 1 Section 1.8 examples */}
        <Route
          path="/section1.8/example01"
          element={<Chapter1Section1Part8Example01 />}
        />
        <Route
          path="/section1.8/example02"
          element={<Chapter1Section1Part8Example02 />}
        />
        <Route
          path="/section1.8/example03"
          element={<Chapter1Section1Part8Example03 />}
        />
        <Route
          path="/section1.8/example04"
          element={<Chapter1Section1Part8Example04 />}
        />
        <Route
          path="/section1.8/example05"
          element={<Chapter1Section1Part8Example05 />}
        />
        <Route
          path="/section1.8/example06"
          element={<Chapter1Section1Part8Example06 />}
        />
        <Route
          path="/section1.8/example07"
          element={<Chapter1Section1Part8Example07 />}
        />
        <Route
          path="/section1.8/example08"
          element={<Chapter1Section1Part8Example08 />}
        />
        <Route
          path="/section1.8/example09"
          element={<Chapter1Section1Part8Example09 />}
        />
        <Route
          path="/section1.8/example10"
          element={<Chapter1Section1Part8Example10 />}
        />
        {/* End of section */}
        {/* Chapter 1 Section 1.9 page */}
        <Route
          path="/section1.9"
          element={
            <Section1Part9
              chapterNum="1"
              chapterTitle="Describing the UI"
              sectionNum="1.9"
              sectionTitle="Your UI as a Tree"
            />
          }
        />
        {/* Chapter 1 Section 1.9 examples */}
        <Route
          path="/section1.9/example01"
          element={<Chapter1Section1Part9Example01 />}
        />
        <Route
          path="/section1.9/example02"
          element={<Chapter1Section1Part9Example02 />}
        />
        <Route
          path="/section1.9/example03"
          element={<Chapter1Section1Part9Example03 />}
        />
        <Route
          path="/section1.9/example04"
          element={<Chapter1Section1Part9Example04 />}
        />
        <Route
          path="/section1.9/example05"
          element={<Chapter1Section1Part9Example05 />}
        />
        <Route
          path="/section1.9/example06"
          element={<Chapter1Section1Part9Example06 />}
        />
        <Route
          path="/section1.9/example07"
          element={<Chapter1Section1Part9Example07 />}
        />
        <Route
          path="/section1.9/example08"
          element={<Chapter1Section1Part9Example08 />}
        />
        <Route
          path="/section1.9/example09"
          element={<Chapter1Section1Part9Example09 />}
        />
        <Route
          path="/section1.9/example10"
          element={<Chapter1Section1Part9Example10 />}
        />
        {/* End of section */}
        {/* Chapter 2 */}
        <Route
          path="/chapter2"
          element={
            <Chapter2Page
              chapterNum="2"
              chapterTitle="Adding Interactivity"
              sectionNum="2.1"
              sectionTitle="Responding to Events"
            />
          }
        />
        {/* Chapter 2 Section 2.1 page */}
        <Route
          path="/section2.1"
          element={
            <Section2Part1
              chapterNum="2"
              chapterTitle="Adding Interactivity"
              sectionNum="2.1"
              sectionTitle="Responding to Events"
            />
          }
        />
        {/* Chapter 2 Section 2.1 examples */}
        <Route
          path="/section2.1/example01"
          element={<Chapter2Section2Part1Example01 />}
        />
        <Route
          path="/section2.1/example02"
          element={<Chapter2Section2Part1Example02 />}
        />
        <Route
          path="/section2.1/example03"
          element={<Chapter2Section2Part1Example03 />}
        />
        <Route
          path="/section2.1/example04"
          element={<Chapter2Section2Part1Example04 />}
        />
        <Route
          path="/section2.1/example05"
          element={<Chapter2Section2Part1Example05 />}
        />
        <Route
          path="/section2.1/example06"
          element={<Chapter2Section2Part1Example06 />}
        />
        <Route
          path="/section2.1/example07"
          element={<Chapter2Section2Part1Example07 />}
        />
        <Route
          path="/section2.1/example08"
          element={<Chapter2Section2Part1Example08 />}
        />
        <Route
          path="/section2.1/example09"
          element={<Chapter2Section2Part1Example09 />}
        />
        <Route
          path="/section2.1/example10"
          element={<Chapter2Section2Part1Example10 />}
        />
        {/* End of section */}
        {/* Chapter 2 Section 2.2 page */}
        <Route
          path="/section2.2"
          element={
            <Section2Part2
              chapterNum="2"
              chapterTitle="Adding Interactivity"
              sectionNum="2.2"
              sectionTitle="State: A Component's Memory"
            />
          }
        />
        {/* Chapter 2 Section 2.2 examples */}
        <Route
          path="/section2.2/example01"
          element={<Chapter2Section2Part2Example01 />}
        />
        <Route
          path="/section2.2/example02"
          element={<Chapter2Section2Part2Example02 />}
        />
        <Route
          path="/section2.2/example03"
          element={<Chapter2Section2Part2Example03 />}
        />
        <Route
          path="/section2.2/example04"
          element={<Chapter2Section2Part2Example04 />}
        />
        <Route
          path="/section2.2/example05"
          element={<Chapter2Section2Part2Example05 />}
        />
        <Route
          path="/section2.2/example06"
          element={<Chapter2Section2Part2Example06 />}
        />
        <Route
          path="/section2.2/example07"
          element={<Chapter2Section2Part2Example07 />}
        />
        <Route
          path="/section2.2/example08"
          element={<Chapter2Section2Part2Example08 />}
        />
        <Route
          path="/section2.2/example09"
          element={<Chapter2Section2Part2Example09 />}
        />
        <Route
          path="/section2.2/example10"
          element={<Chapter2Section2Part2Example10 />}
        />
        {/* End of section */}
        {/* Chapter 2 Section 2.3 page */}
        <Route
          path="/section2.3"
          element={
            <Section2Part3
              chapterNum="2"
              chapterTitle="Adding Interactivity"
              sectionNum="2.3"
              sectionTitle="Render and Commit"
            />
          }
        />
        {/* Chapter 2 Section 2.3 examples */}
        <Route
          path="/section2.3/example01"
          element={<Chapter2Section2Part3Example01 />}
        />
        <Route
          path="/section2.3/example02"
          element={<Chapter2Section2Part3Example02 />}
        />
        <Route
          path="/section2.3/example03"
          element={<Chapter2Section2Part3Example03 />}
        />
        <Route
          path="/section2.3/example04"
          element={<Chapter2Section2Part3Example04 />}
        />
        <Route
          path="/section2.3/example05"
          element={<Chapter2Section2Part3Example05 />}
        />
        <Route
          path="/section2.3/example06"
          element={<Chapter2Section2Part3Example06 />}
        />
        <Route
          path="/section2.3/example07"
          element={<Chapter2Section2Part3Example07 />}
        />
        <Route
          path="/section2.3/example08"
          element={<Chapter2Section2Part3Example08 />}
        />
        <Route
          path="/section2.3/example09"
          element={<Chapter2Section2Part3Example09 />}
        />
        <Route
          path="/section2.3/example10"
          element={<Chapter2Section2Part3Example10 />}
        />
        {/* End of section */}
        {/* Chapter 2 Section 2.4 page */}
        <Route
          path="/section2.4"
          element={
            <Section2Part4
              chapterNum="2"
              chapterTitle="Adding Interactivity"
              sectionNum="2.4"
              sectionTitle="State as a Snapshot"
            />
          }
        />
        {/* Chapter 2 Section 2.4 examples */}
        <Route
          path="/section2.4/example01"
          element={<Chapter2Section2Part4Example01 />}
        />
        <Route
          path="/section2.4/example02"
          element={<Chapter2Section2Part4Example02 />}
        />
        <Route
          path="/section2.4/example03"
          element={<Chapter2Section2Part4Example03 />}
        />
        <Route
          path="/section2.4/example04"
          element={<Chapter2Section2Part4Example04 />}
        />
        <Route
          path="/section2.4/example05"
          element={<Chapter2Section2Part4Example05 />}
        />
        <Route
          path="/section2.4/example06"
          element={<Chapter2Section2Part4Example06 />}
        />
        <Route
          path="/section2.4/example07"
          element={<Chapter2Section2Part4Example07 />}
        />
        <Route
          path="/section2.4/example08"
          element={<Chapter2Section2Part4Example08 />}
        />
        <Route
          path="/section2.4/example09"
          element={<Chapter2Section2Part4Example09 />}
        />
        <Route
          path="/section2.4/example10"
          element={<Chapter2Section2Part4Example10 />}
        />
        {/* End of section */}
        {/* Chapter 2 Section 2.5 page */}
        <Route
          path="/section2.5"
          element={
            <Section2Part5
              chapterNum="2"
              chapterTitle="Adding Interactivity"
              sectionNum="2.5"
              sectionTitle="Queueing a Series of State Updates"
            />
          }
        />
        {/* Chapter 2 Section 2.5 examples */}
        <Route
          path="/section2.5/example01"
          element={<Chapter2Section2Part5Example01 />}
        />
        <Route
          path="/section2.5/example02"
          element={<Chapter2Section2Part5Example02 />}
        />
        <Route
          path="/section2.5/example03"
          element={<Chapter2Section2Part5Example03 />}
        />
        <Route
          path="/section2.5/example04"
          element={<Chapter2Section2Part5Example04 />}
        />
        <Route
          path="/section2.5/example05"
          element={<Chapter2Section2Part5Example05 />}
        />
        <Route
          path="/section2.5/example06"
          element={<Chapter2Section2Part5Example06 />}
        />
        <Route
          path="/section2.5/example07"
          element={<Chapter2Section2Part5Example07 />}
        />
        <Route
          path="/section2.5/example08"
          element={<Chapter2Section2Part5Example08 />}
        />
        <Route
          path="/section2.5/example09"
          element={<Chapter2Section2Part5Example09 />}
        />
        <Route
          path="/section2.5/example10"
          element={<Chapter2Section2Part5Example10 />}
        />
        {/* End of section */}
        {/* Chapter 2 Section 2.6 page */}
        <Route
          path="/section2.6"
          element={
            <Section2Part6
              chapterNum="2"
              chapterTitle="Adding Interactivity"
              sectionNum="2.6"
              sectionTitle="Updating Objects in State"
            />
          }
        />
        {/* Chapter 2 Section 2.6 examples */}
        <Route
          path="/section2.6/example01"
          element={<Chapter2Section2Part6Example01 />}
        />
        <Route
          path="/section2.6/example02"
          element={<Chapter2Section2Part6Example02 />}
        />
        <Route
          path="/section2.6/example03"
          element={<Chapter2Section2Part6Example03 />}
        />
        <Route
          path="/section2.6/example04"
          element={<Chapter2Section2Part6Example04 />}
        />
        <Route
          path="/section2.6/example05"
          element={<Chapter2Section2Part6Example05 />}
        />
        <Route
          path="/section2.6/example06"
          element={<Chapter2Section2Part6Example06 />}
        />
        <Route
          path="/section2.6/example07"
          element={<Chapter2Section2Part6Example07 />}
        />
        <Route
          path="/section2.6/example08"
          element={<Chapter2Section2Part6Example08 />}
        />
        <Route
          path="/section2.6/example09"
          element={<Chapter2Section2Part6Example09 />}
        />
        <Route
          path="/section2.6/example10"
          element={<Chapter2Section2Part6Example10 />}
        />
        {/* End of section */}
        {/* Chapter 2 Section 2.7 page */}
        <Route
          path="/section2.7"
          element={
            <Section2Part7
              chapterNum="2"
              chapterTitle="Adding Interactivity"
              sectionNum="2.7"
              sectionTitle="Updating Arrays in State"
            />
          }
        />
        {/* Chapter 2 Section 2.7 examples */}
        <Route
          path="/section2.7/example01"
          element={<Chapter2Section2Part7Example01 />}
        />
        <Route
          path="/section2.7/example02"
          element={<Chapter2Section2Part7Example02 />}
        />
        <Route
          path="/section2.7/example03"
          element={<Chapter2Section2Part7Example03 />}
        />
        <Route
          path="/section2.7/example04"
          element={<Chapter2Section2Part7Example04 />}
        />
        <Route
          path="/section2.7/example05"
          element={<Chapter2Section2Part7Example05 />}
        />
        <Route
          path="/section2.7/example06"
          element={<Chapter2Section2Part7Example06 />}
        />
        <Route
          path="/section2.7/example07"
          element={<Chapter2Section2Part7Example07 />}
        />
        <Route
          path="/section2.7/example08"
          element={<Chapter2Section2Part7Example08 />}
        />
        <Route
          path="/section2.7/example09"
          element={<Chapter2Section2Part7Example09 />}
        />
        <Route
          path="/section2.7/example10"
          element={<Chapter2Section2Part7Example10 />}
        />
        {/* End of section */}
        {/* Chapter 3 */}
        <Route
          path="/chapter3"
          element={
            <Chapter3Page
              chapterNum="3"
              chapterTitle="Managing State"
              sectionNum="3.1"
              sectionTitle="Responding to Events"
            />
          }
        />
        {/* Chapter 3 Section 3.1 page */}
        <Route
          path="/section3.1"
          element={
            <Section3Part1
              chapterNum="3"
              chapterTitle="Managing State"
              sectionNum="3.1"
              sectionTitle="Responding to Events"
            />
          }
        />
        {/* Chapter 3 Section 3.1 examples */}
        <Route
          path="/section3.1/example01"
          element={<Chapter3Section3Part1Example01 />}
        />
        <Route
          path="/section3.1/example02"
          element={<Chapter3Section3Part1Example02 />}
        />
        <Route
          path="/section3.1/example03"
          element={<Chapter3Section3Part1Example03 />}
        />
        <Route
          path="/section3.1/example04"
          element={<Chapter3Section3Part1Example04 />}
        />
        <Route
          path="/section3.1/example05"
          element={<Chapter3Section3Part1Example05 />}
        />
        <Route
          path="/section3.1/example06"
          element={<Chapter3Section3Part1Example06 />}
        />
        <Route
          path="/section3.1/example07"
          element={<Chapter3Section3Part1Example07 />}
        />
        <Route
          path="/section3.1/example08"
          element={<Chapter3Section3Part1Example08 />}
        />
        <Route
          path="/section3.1/example09"
          element={<Chapter3Section3Part1Example09 />}
        />
        <Route
          path="/section3.1/example10"
          element={<Chapter3Section3Part1Example10 />}
        />
        {/* End of section */}
        {/* Chapter 3 Section 3.2 page */}
        <Route
          path="/section3.2"
          element={
            <Section3Part2
              chapterNum="3"
              chapterTitle="Managing State"
              sectionNum="3.2"
              sectionTitle="Responding to Events"
            />
          }
        />
        {/* Chapter 3 Section 3.2 examples */}
        <Route
          path="/section3.2/example01"
          element={<Chapter3Section3Part2Example01 />}
        />
        <Route
          path="/section3.2/example02"
          element={<Chapter3Section3Part2Example02 />}
        />
        <Route
          path="/section3.2/example03"
          element={<Chapter3Section3Part2Example03 />}
        />
        <Route
          path="/section3.2/example04"
          element={<Chapter3Section3Part2Example04 />}
        />
        <Route
          path="/section3.2/example05"
          element={<Chapter3Section3Part2Example05 />}
        />
        <Route
          path="/section3.2/example06"
          element={<Chapter3Section3Part2Example06 />}
        />
        <Route
          path="/section3.2/example07"
          element={<Chapter3Section3Part2Example07 />}
        />
        <Route
          path="/section3.2/example08"
          element={<Chapter3Section3Part2Example08 />}
        />
        <Route
          path="/section3.2/example09"
          element={<Chapter3Section3Part2Example09 />}
        />
        <Route
          path="/section3.2/example10"
          element={<Chapter3Section3Part2Example10 />}
        />
        {/* End of section */}
        {/* Chapter 3 Section 3.3 page */}
        <Route
          path="/section3.3"
          element={
            <Section3Part3
              chapterNum="3"
              chapterTitle="Managing State"
              sectionNum="3.3"
              sectionTitle="Sharing State Between Components"
            />
          }
        />
        {/* Chapter 3 Section 3.3 examples */}
        <Route
          path="/section3.3/example01"
          element={<Chapter3Section3Part3Example01 />}
        />
        <Route
          path="/section3.3/example02"
          element={<Chapter3Section3Part3Example02 />}
        />
        <Route
          path="/section3.3/example03"
          element={<Chapter3Section3Part3Example03 />}
        />
        <Route
          path="/section3.3/example04"
          element={<Chapter3Section3Part3Example04 />}
        />
        <Route
          path="/section3.3/example05"
          element={<Chapter3Section3Part3Example05 />}
        />
        <Route
          path="/section3.3/example06"
          element={<Chapter3Section3Part3Example06 />}
        />
        <Route
          path="/section3.3/example07"
          element={<Chapter3Section3Part3Example07 />}
        />
        <Route
          path="/section3.3/example08"
          element={<Chapter3Section3Part3Example08 />}
        />
        <Route
          path="/section3.3/example09"
          element={<Chapter3Section3Part3Example09 />}
        />
        <Route
          path="/section3.3/example10"
          element={<Chapter3Section3Part3Example10 />}
        />
        {/* End of section */}
        {/* Chapter 3 Section 3.4 page */}
        <Route
          path="/section3.4"
          element={
            <Section3Part4
              chapterNum="3"
              chapterTitle="Managing State"
              sectionNum="3.4"
              sectionTitle="Preserving and Resetting State"
            />
          }
        />
        {/* Chapter 3 Section 3.4 examples */}
        <Route
          path="/section3.4/example01"
          element={<Chapter3Section3Part4Example01 />}
        />
        <Route
          path="/section3.4/example02"
          element={<Chapter3Section3Part4Example02 />}
        />
        <Route
          path="/section3.4/example03"
          element={<Chapter3Section3Part4Example03 />}
        />
        <Route
          path="/section3.4/example04"
          element={<Chapter3Section3Part4Example04 />}
        />
        <Route
          path="/section3.4/example05"
          element={<Chapter3Section3Part4Example05 />}
        />
        <Route
          path="/section3.4/example06"
          element={<Chapter3Section3Part4Example06 />}
        />
        <Route
          path="/section3.4/example07"
          element={<Chapter3Section3Part4Example07 />}
        />
        <Route
          path="/section3.4/example08"
          element={<Chapter3Section3Part4Example08 />}
        />
        <Route
          path="/section3.4/example09"
          element={<Chapter3Section3Part4Example09 />}
        />
        <Route
          path="/section3.4/example10"
          element={<Chapter3Section3Part4Example10 />}
        />
        {/* End of section */}
        {/* Chapter 3 Section 3.5 page */}
        <Route
          path="/section3.5"
          element={
            <Section3Part5
              chapterNum="3"
              chapterTitle="Managing State"
              sectionNum="3.5"
              sectionTitle="Extracting State Logic into a Reducer"
            />
          }
        />
        {/* Chapter 3 Section 3.5 examples */}
        <Route
          path="/section3.5/example01"
          element={<Chapter3Section3Part5Example01 />}
        />
        <Route
          path="/section3.5/example02"
          element={<Chapter3Section3Part5Example02 />}
        />
        <Route
          path="/section3.5/example03"
          element={<Chapter3Section3Part5Example03 />}
        />
        <Route
          path="/section3.5/example04"
          element={<Chapter3Section3Part5Example04 />}
        />
        <Route
          path="/section3.5/example05"
          element={<Chapter3Section3Part5Example05 />}
        />
        <Route
          path="/section3.5/example06"
          element={<Chapter3Section3Part5Example06 />}
        />
        <Route
          path="/section3.5/example07"
          element={<Chapter3Section3Part5Example07 />}
        />
        <Route
          path="/section3.5/example08"
          element={<Chapter3Section3Part5Example08 />}
        />
        <Route
          path="/section3.5/example09"
          element={<Chapter3Section3Part5Example09 />}
        />
        <Route
          path="/section3.5/example10"
          element={<Chapter3Section3Part5Example10 />}
        />
        {/* End of section */}
        {/* Chapter 3 Section 3.6 page */}
        <Route
          path="/section3.6"
          element={
            <Section3Part6
              chapterNum="3"
              chapterTitle="Managing State"
              sectionNum="3.6"
              sectionTitle="Passing Data Deeply with Context"
            />
          }
        />
        {/* Chapter 3 Section 3.6 examples */}
        <Route
          path="/section3.6/example01"
          element={<Chapter3Section3Part6Example01 />}
        />
        <Route
          path="/section3.6/example02"
          element={<Chapter3Section3Part6Example02 />}
        />
        <Route
          path="/section3.6/example03"
          element={<Chapter3Section3Part6Example03 />}
        />
        <Route
          path="/section3.6/example04"
          element={<Chapter3Section3Part6Example04 />}
        />
        <Route
          path="/section3.6/example05"
          element={<Chapter3Section3Part6Example05 />}
        />
        <Route
          path="/section3.6/example06"
          element={<Chapter3Section3Part6Example06 />}
        />
        <Route
          path="/section3.6/example07"
          element={<Chapter3Section3Part6Example07 />}
        />
        <Route
          path="/section3.6/example08"
          element={<Chapter3Section3Part6Example08 />}
        />
        <Route
          path="/section3.6/example09"
          element={<Chapter3Section3Part6Example09 />}
        />
        <Route
          path="/section3.6/example10"
          element={<Chapter3Section3Part6Example10 />}
        />
        {/* End of section */}
        {/* Chapter 3 Section 3.7 page */}
        <Route
          path="/section3.7"
          element={
            <Section3Part7
              chapterNum="3"
              chapterTitle="Managing State"
              sectionNum="3.7"
              sectionTitle="Scaling Up with Reducer and Context"
            />
          }
        />
        {/* Chapter 3 Section 3.7 examples */}
        <Route
          path="/section3.7/example01"
          element={<Chapter3Section3Part7Example01 />}
        />
        <Route
          path="/section3.7/example02"
          element={<Chapter3Section3Part7Example02 />}
        />
        <Route
          path="/section3.7/example03"
          element={<Chapter3Section3Part7Example03 />}
        />
        <Route
          path="/section3.7/example04"
          element={<Chapter3Section3Part7Example04 />}
        />
        <Route
          path="/section3.7/example05"
          element={<Chapter3Section3Part7Example05 />}
        />
        <Route
          path="/section3.7/example06"
          element={<Chapter3Section3Part7Example06 />}
        />
        <Route
          path="/section3.7/example07"
          element={<Chapter3Section3Part7Example07 />}
        />
        <Route
          path="/section3.7/example08"
          element={<Chapter3Section3Part7Example08 />}
        />
        <Route
          path="/section3.7/example09"
          element={<Chapter3Section3Part7Example09 />}
        />
        <Route
          path="/section3.7/example10"
          element={<Chapter3Section3Part7Example10 />}
        />
        {/* End of section */}
        {/* Chapter 4 */}
        <Route
          path="/chapter4"
          element={
            <Chapter4Page
              chapterNum="4"
              chapterTitle="Escape Hatches"
              sectionNum="4.1"
              sectionTitle="Referencing Values with Refs"
            />
          }
        />
        {/* Chapter 4 Section 4.1 page */}
        <Route
          path="/section4.1"
          element={
            <Section4Part1
              chapterNum="4"
              chapterTitle="Escape Hatches"
              sectionNum="4.1"
              sectionTitle="Referencing Values with Refs"
            />
          }
        />
        {/* Chapter 4 Section 4.1 examples */}
        <Route
          path="/section4.1/example01"
          element={<Chapter4Section4Part1Example01 />}
        />
        <Route
          path="/section4.1/example02"
          element={<Chapter4Section4Part1Example02 />}
        />
        <Route
          path="/section4.1/example03"
          element={<Chapter4Section4Part1Example03 />}
        />
        <Route
          path="/section4.1/example04"
          element={<Chapter4Section4Part1Example04 />}
        />
        <Route
          path="/section4.1/example05"
          element={<Chapter4Section4Part1Example05 />}
        />
        <Route
          path="/section4.1/example06"
          element={<Chapter4Section4Part1Example06 />}
        />
        <Route
          path="/section4.1/example07"
          element={<Chapter4Section4Part1Example07 />}
        />
        <Route
          path="/section4.1/example08"
          element={<Chapter4Section4Part1Example08 />}
        />
        <Route
          path="/section4.1/example09"
          element={<Chapter4Section4Part1Example09 />}
        />
        <Route
          path="/section4.1/example10"
          element={<Chapter4Section4Part1Example10 />}
        />
        {/* End of section */}
        {/* Chapter 4 Section 4.2 page */}
        <Route
          path="/section4.2"
          element={
            <Section4Part2
              chapterNum="4"
              chapterTitle="Escape Hatches"
              sectionNum="4.2"
              sectionTitle="Manipulating the DOM with Refs"
            />
          }
        />
        {/* Chapter 4 Section 4.2 examples */}
        <Route
          path="/section4.2/example01"
          element={<Chapter4Section4Part2Example01 />}
        />
        <Route
          path="/section4.2/example02"
          element={<Chapter4Section4Part2Example02 />}
        />
        <Route
          path="/section4.2/example03"
          element={<Chapter4Section4Part2Example03 />}
        />
        <Route
          path="/section4.2/example04"
          element={<Chapter4Section4Part2Example04 />}
        />
        <Route
          path="/section4.2/example05"
          element={<Chapter4Section4Part2Example05 />}
        />
        <Route
          path="/section4.2/example06"
          element={<Chapter4Section4Part2Example06 />}
        />
        <Route
          path="/section4.2/example07"
          element={<Chapter4Section4Part2Example07 />}
        />
        <Route
          path="/section4.2/example08"
          element={<Chapter4Section4Part2Example08 />}
        />
        <Route
          path="/section4.2/example09"
          element={<Chapter4Section4Part2Example09 />}
        />
        <Route
          path="/section4.2/example10"
          element={<Chapter4Section4Part2Example10 />}
        />
        {/* End of section */}
        {/* Chapter 4 Section 4.3 page */}
        <Route
          path="/section4.3"
          element={
            <Section4Part3
              chapterNum="4"
              chapterTitle="Escape Hatches"
              sectionNum="4.3"
              sectionTitle="Synchronizing with Effects"
            />
          }
        />
        {/* Chapter 4 Section 4.3 examples */}
        <Route
          path="/section4.3/example01"
          element={<Chapter4Section4Part3Example01 />}
        />
        <Route
          path="/section4.3/example02"
          element={<Chapter4Section4Part3Example02 />}
        />
        <Route
          path="/section4.3/example03"
          element={<Chapter4Section4Part3Example03 />}
        />
        <Route
          path="/section4.3/example04"
          element={<Chapter4Section4Part3Example04 />}
        />
        <Route
          path="/section4.3/example05"
          element={<Chapter4Section4Part3Example05 />}
        />
        <Route
          path="/section4.3/example06"
          element={<Chapter4Section4Part3Example06 />}
        />
        <Route
          path="/section4.3/example07"
          element={<Chapter4Section4Part3Example07 />}
        />
        <Route
          path="/section4.3/example08"
          element={<Chapter4Section4Part3Example08 />}
        />
        <Route
          path="/section4.3/example09"
          element={<Chapter4Section4Part3Example09 />}
        />
        <Route
          path="/section4.3/example10"
          element={<Chapter4Section4Part3Example10 />}
        />
        <Route
          path="/section4.3/example11"
          element={<Chapter4Section4Part3Example11 />}
        />
        <Route
          path="/section4.3/example12"
          element={<Chapter4Section4Part3Example12 />}
        />
        {/* End of section */}
        {/* Chapter 4 Section 4.4 page */}
        <Route
          path="/section4.4"
          element={
            <Section4Part4
              chapterNum="4"
              chapterTitle="Escape Hatches"
              sectionNum="4.4"
              sectionTitle="You Might Not Need an Effect"
            />
          }
        />
        {/* Chapter 4 Section 4.4 examples */}
        <Route
          path="/section4.4/example01"
          element={<Chapter4Section4Part4Example01 />}
        />
        <Route
          path="/section4.4/example02"
          element={<Chapter4Section4Part4Example02 />}
        />
        <Route
          path="/section4.4/example03"
          element={<Chapter4Section4Part4Example03 />}
        />
        <Route
          path="/section4.4/example04"
          element={<Chapter4Section4Part4Example04 />}
        />
        <Route
          path="/section4.4/example05"
          element={<Chapter4Section4Part4Example05 />}
        />
        <Route
          path="/section4.4/example06"
          element={<Chapter4Section4Part4Example06 />}
        />
        <Route
          path="/section4.4/example07"
          element={<Chapter4Section4Part4Example07 />}
        />
        <Route
          path="/section4.4/example08"
          element={<Chapter4Section4Part4Example08 />}
        />
        <Route
          path="/section4.4/example09"
          element={<Chapter4Section4Part4Example09 />}
        />
        <Route
          path="/section4.4/example10"
          element={<Chapter4Section4Part4Example10 />}
        />
        <Route
          path="/section4.4/example11"
          element={<Chapter4Section4Part4Example11 />}
        />
        <Route
          path="/section4.4/example12"
          element={<Chapter4Section4Part4Example12 />}
        />
        <Route
          path="/section4.4/example13"
          element={<Chapter4Section4Part4Example13 />}
        />
        {/* End of section */}
        {/* Chapter 4 Section 4.5 page */}
        <Route
          path="/section4.5"
          element={
            <Section4Part5
              chapterNum="4"
              chapterTitle="Escape Hatches"
              sectionNum="4.5"
              sectionTitle="Lifecycle of Reactive Effects"
            />
          }
        />
        {/* Chapter 4 Section 4.5 examples */}
        <Route
          path="/section4.5/example01"
          element={<Chapter4Section4Part5Example01 />}
        />
        <Route
          path="/section4.5/example02"
          element={<Chapter4Section4Part5Example02 />}
        />
        <Route
          path="/section4.5/example03"
          element={<Chapter4Section4Part5Example03 />}
        />
        <Route
          path="/section4.5/example04"
          element={<Chapter4Section4Part5Example04 />}
        />
        <Route
          path="/section4.5/example05"
          element={<Chapter4Section4Part5Example05 />}
        />
        <Route
          path="/section4.5/example06"
          element={<Chapter4Section4Part5Example06 />}
        />
        <Route
          path="/section4.5/example07"
          element={<Chapter4Section4Part5Example07 />}
        />
        <Route
          path="/section4.5/example08"
          element={<Chapter4Section4Part5Example08 />}
        />
        <Route
          path="/section4.5/example09"
          element={<Chapter4Section4Part5Example09 />}
        />
        <Route
          path="/section4.5/example10"
          element={<Chapter4Section4Part5Example10 />}
        />
        <Route
          path="/section4.5/example11"
          element={<Chapter4Section4Part5Example11 />}
        />
        <Route
          path="/section4.5/example12"
          element={<Chapter4Section4Part5Example12 />}
        />
        {/* End of section */}
        {/* Chapter 4 Section 4.6 page */}
        <Route
          path="/section4.6"
          element={
            <Section4Part6
              chapterNum="4"
              chapterTitle="Escape Hatches"
              sectionNum="4.6"
              sectionTitle="Separating Events from Effects"
            />
          }
        />
        {/* Chapter 4 Section 4.6 examples */}
        <Route
          path="/section4.6/example01"
          element={<Chapter4Section4Part6Example01 />}
        />
        <Route
          path="/section4.6/example02"
          element={<Chapter4Section4Part6Example02 />}
        />
        <Route
          path="/section4.6/example03"
          element={<Chapter4Section4Part6Example03 />}
        />
        <Route
          path="/section4.6/example04"
          element={<Chapter4Section4Part6Example04 />}
        />
        <Route
          path="/section4.6/example05"
          element={<Chapter4Section4Part6Example05 />}
        />
        <Route
          path="/section4.6/example06"
          element={<Chapter4Section4Part6Example06 />}
        />
        <Route
          path="/section4.6/example07"
          element={<Chapter4Section4Part6Example07 />}
        />
        <Route
          path="/section4.6/example08"
          element={<Chapter4Section4Part6Example08 />}
        />
        <Route
          path="/section4.6/example09"
          element={<Chapter4Section4Part6Example09 />}
        />
        <Route
          path="/section4.6/example10"
          element={<Chapter4Section4Part6Example10 />}
        />
        {/* End of section */}
        {/* Chapter 4 Section 4.7 page */}
        <Route
          path="/section4.7"
          element={
            <Section4Part7
              chapterNum="4"
              chapterTitle="Escape Hatches"
              sectionNum="4.7"
              sectionTitle="Removing Effect Dependencies"
            />
          }
        />
        {/* Chapter 4 Section 4.7 examples */}
        <Route
          path="/section4.7/example01"
          element={<Chapter4Section4Part7Example01 />}
        />
        <Route
          path="/section4.7/example02"
          element={<Chapter4Section4Part7Example02 />}
        />
        <Route
          path="/section4.7/example03"
          element={<Chapter4Section4Part7Example03 />}
        />
        <Route
          path="/section4.7/example04"
          element={<Chapter4Section4Part7Example04 />}
        />
        <Route
          path="/section4.7/example05"
          element={<Chapter4Section4Part7Example05 />}
        />
        <Route
          path="/section4.7/example06"
          element={<Chapter4Section4Part7Example06 />}
        />
        <Route
          path="/section4.7/example07"
          element={<Chapter4Section4Part7Example07 />}
        />
        <Route
          path="/section4.7/example08"
          element={<Chapter4Section4Part7Example08 />}
        />
        <Route
          path="/section4.7/example09"
          element={<Chapter4Section4Part7Example09 />}
        />
        <Route
          path="/section4.7/example10"
          element={<Chapter4Section4Part7Example10 />}
        />
        {/* End of section */}
        {/* Chapter 4 Section 4.8 page */}
        <Route
          path="/section4.8"
          element={
            <Section4Part8
              chapterNum="4"
              chapterTitle="Escape Hatches"
              sectionNum="4.8"
              sectionTitle="Reusing Logic with Custom Hooks"
            />
          }
        />
        {/* Chapter 4 Section 4.8 examples */}
        <Route
          path="/section4.8/example01"
          element={<Chapter4Section4Part8Example01 />}
        />
        <Route
          path="/section4.8/example02"
          element={<Chapter4Section4Part8Example02 />}
        />
        <Route
          path="/section4.8/example03"
          element={<Chapter4Section4Part8Example03 />}
        />
        <Route
          path="/section4.8/example04"
          element={<Chapter4Section4Part8Example04 />}
        />
        <Route
          path="/section4.8/example05"
          element={<Chapter4Section4Part8Example05 />}
        />
        <Route
          path="/section4.8/example06"
          element={<Chapter4Section4Part8Example06 />}
        />
        <Route
          path="/section4.8/example07"
          element={<Chapter4Section4Part8Example07 />}
        />
        <Route
          path="/section4.8/example08"
          element={<Chapter4Section4Part8Example08 />}
        />
        <Route
          path="/section4.8/example09"
          element={<Chapter4Section4Part8Example09 />}
        />
        <Route
          path="/section4.8/example10"
          element={<Chapter4Section4Part8Example10 />}
        />
        {/* End of section */}
      </Routes>
    </BrowserRouter>
  );
}
