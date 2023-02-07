import React from "react";
import "../styles/game.css"
import DUMMY_QUESTION from "../data/DummyResponse";
import Question from "../components/Question";
import Answer from "../components/Answer";

const answers = [DUMMY_QUESTION.correctAnswer, ...DUMMY_QUESTION.incorrectAnswers]

const Game = () => {
  return (
    <main>
      <div className="card">
        <Question text={DUMMY_QUESTION.question}/>
        <div className="solutions-container">
        {answers.map(answer => {
           return <Answer key={answer} text={answer}/>
        })}
        </div>
      </div>
    </main>
  );
};

export default Game;
