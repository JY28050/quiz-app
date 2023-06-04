import React, { useContext } from "react";
import { QuizContext } from "../helpers/Context";
import { Questions } from "../helpers/QuestionBank";
import "../App.css";

function EndScreen() {
  const { score, setScore, setGameState } = useContext(QuizContext);

  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
  };

  return (
    <div className="EndScreen">
      <h1>Quiz Finished!</h1>
      <h3>
        {" "}
        Your Final Score is: {score} / {Questions.length}{" "}
      </h3>
      <button className="restart" onClick={restartQuiz}>
        {" "}
        Restart Quiz{" "}
      </button>
    </div>
  );
}

export default EndScreen;
