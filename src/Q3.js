
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
function Q3() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const location = useLocation();
  const questionHandler = (isCorrect) => {
    if (isCorrect) {
      navigate("/Q4", { state: { score: location.state.score + 1 } });
    } else {
      navigate("/Q4", { state: { score: location.state.score + 0 } });
      console.log("wrong answer");
    }
  };
  console.log(location.state.score);
  const Question = [
    {
      answerOptions: [
        { answerText: "Hong-Kong", isCorrect: false },
        { answerText: "Beijing", isCorrect: true },
        { answerText: "Shanghai", isCorrect: false },
        { answerText: "chengdu", isCorrect: false },
      ],
    },
  ];
  return (
    <div className="Quiz">
      <h1 className="Font-quiz1">Question #3</h1>
      <p className="Font-quiz2">Name the Capital of the China.</p>
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

export default Q3;