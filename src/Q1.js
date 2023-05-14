import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./UI.css";
import Q2 from "./Q2";

function Q1() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score] = useState(0);
  const navigate = useNavigate();

  const questionHandler = (isCorrect) => {
    if (isCorrect) {
      navigate("/Q2", { state: { score: score + 1 } });
    } else {
      navigate("/Q2", { state: { score: score + 0 } });
      console.log("wrong answer");
    }
  };

  const Question = [
    {
      answerOptions: [
        { answerText: "Islamabad", isCorrect: true },
        { answerText: "Karachi", isCorrect: false },
        { answerText: "Lahore", isCorrect: false },
        { answerText: "Peshawar", isCorrect: false },
      ],
    },
  ];

  return (
    <div className="Quiz">
      <h1 className="Font-quiz1">Question #1</h1>
      <p className="Font-quiz2">Name the capital of the Pakistan</p>

      <div className="button">
        {Question[currentQuestion].answerOptions.map((answerOption, index) => {
          console.log(answerOption);
          return (
            <Button variant="secondary" onClick={() => questionHandler(answerOption.isCorrect)}>
              {answerOption.answerText}
            </Button>
          );
        })}
      </div>
    </div>
  );
}

export default Q1;
