import React from "react";
import { useLocation } from "react-router-dom";

function Result() {
  const location = useLocation();
  return (
    <div className="Quiz">
      <h1 className="Font-quiz1">Result</h1>
      <h2 className="Font-quiz2">Your Score = {location.state.score}</h2>
    </div>
  );
}

export default Result;
