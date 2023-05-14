import { Routes, Route } from "react-router-dom";
import Quiz from "./Quiz";
import Q1 from "./Q1";
import Q2 from "./Q2";
import Q3 from "./Q3";
import Q4 from "./Q4";
import Q5 from "./Q5";
import Result from "./Result";
function Base() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Quiz />} />
        <Route path="Q1" element={<Q1 />} />
        <Route path="Q2" element={<Q2 />} />
        <Route path="Q3" element={<Q3 />} />
        <Route path="Q4" element={<Q4 />} />
        <Route path="Q5" element={<Q5 />} />
        <Route path="Result" element={<Result/>} />
      </Routes>
    </div>
  );
}

export default Base;