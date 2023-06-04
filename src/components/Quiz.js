import React, { useState, useContext } from "react";

import { QuizContext } from "../helpers/Context";

import { Questions } from "../helpers/QuestionBank";

function Quiz() {
  const { score, setScore, setGameState } = useContext(QuizContext);

  const [currQuestion, setCurrQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  const nextQuestion = () => {
    if (Questions[currQuestion].answer == optionChosen) {
      setScore(score + 1); //this is only if we get correct answer, if not keep it way it is
    }
    setCurrQuestion(currQuestion + 1);
  };

  const finishQuiz = () => {
    if (Questions[currQuestion].answer == optionChosen) {
      setScore(score + 1);
    }
    setGameState("endScreen");
  };

  return (
    <div className="Quiz">
      <h2>{Questions[currQuestion].prompt}</h2>
      <div className="options">
        <button onClick={() => setOptionChosen("A")}>
          {Questions[currQuestion].optionA}
        </button>
        <button onClick={() => setOptionChosen("B")}>
          {Questions[currQuestion].optionB}
        </button>
        <button onClick={() => setOptionChosen("C")}>
          {Questions[currQuestion].optionC}
        </button>
        <button onClick={() => setOptionChosen("D")}>
          {Questions[currQuestion].optionD}
        </button>
      </div>

      {currQuestion == Questions.length - 1 ? (
        <button className="next" onClick={finishQuiz}>
          Finish Quiz
        </button>
      ) : (
        <button className="next" onClick={nextQuestion}>
          Next Question{" "}
        </button>
      )}
    </div>
  );
}

export default Quiz;

//current state is (0) because in our questionbank array 0 is the 1st prompt. In order to go to the next question, we just implement current question +1. Then we are on 1 of the array, which is the 2nd prompt, etc.
