import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
function Q4() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const location = useLocation();
  const questionHandler = (isCorrect) => {
    if (isCorrect) {
      navigate("/Q5", { state: { score: location.state.score + 1 } });
    } else {
      navigate("/Q5", { state: { score: location.state.score + 0} });
      console.log("wrong answer");
    }
  };
  console.log(location.state.score);
  const Question = [
    {
      answerOptions: [
        { answerText: "Omsk", isCorrect: false },
        { answerText: "Samara", isCorrect: false },
        { answerText: "Kazan", isCorrect: false },
        { answerText: "Moscow", isCorrect: true },
      ],
    },
  ];
  return (
    <div className="Quiz">
      <h1 className="Font-quiz1">Question #4</h1>
      <p className="Font-quiz2">Name the Capital of the Russia.</p>
      <div className="answer-section">
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

export default Q4;
