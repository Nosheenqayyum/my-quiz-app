import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import "./UI.css"
function Quiz() {
  const navigate = useNavigate();
  const gotoQ1 = () => {
    navigate("/Q1");
  };
  const [showScore, setShowScore] = useState(false);

  return (
    <div className="Quiz">
      <h1 className="Font-quiz1">Quiz</h1>
      <p className="Font-quiz2">This Quiz contains 5 Question init.</p>

      <Button variant="secondary" onClick={() => gotoQ1()}>
        Start
      </Button>
    </div>
  );
}

export default Quiz;
