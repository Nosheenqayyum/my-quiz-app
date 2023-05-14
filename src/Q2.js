import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./UI.css";
import Q3 from "./Q3";
function Q2() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const navigate = useNavigate();

  const location = useLocation();

  const questionHandler = (isCorrect) => {
    if (isCorrect) {
      navigate("/Q3", { state: { score: location.state.score + 1 } });
    } else {
      navigate("/Q3", { state: { score: location.state.score + 0 } });
      console.log("wrong answer");
    }
  };

  console.log(location.state.score);

  const Question = [
    {
      answerOptions: [
        { answerText: "Kandhar", isCorrect: false },
        { answerText: "Ghor", isCorrect: false },
        { answerText: "Kabul", isCorrect: true },
        { answerText: "Mazarsharif", isCorrect: false },
      ],
    },
  ];
  return (
    <div className="Quiz">
      <h1 className="Font-quiz1">Question #2</h1>
      <p className="Font-quiz2">Name the Capital of the Afghanistan.</p>
      <div className="answer-section">
        {Question[currentQuestion].answerOptions.map((answerOption, index) => {
          console.log(answerOption);
          return (
            <Button
              variant="secondary" onClick={() => questionHandler(answerOption.isCorrect)}>
              {answerOption.answerText}
            </Button>
          );
        })}
      </div>
    </div>
  );
}

export default Q2;
