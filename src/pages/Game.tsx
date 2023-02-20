import React, { useState } from "react";
import classes from "./Game.module.css";
import QuestionObj from "../models/QuestionObj";
import { useQuery } from "react-query";
import Timer from "../components/game/Timer";
import fetchQuestions from "../api/fetchQuestions";
import GameContainer from "../components/game/GameContainer";
import Question from "../components/game/Question";
import Answer from "../components/game/Answer";
import ScoreCard from "../components/game/ScoreCard";

const Game = () => {
  const [score, setScore] = useState(0);
  const [currentAnswers, setCurrentAnswers] = useState<string[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isGameOver, setIsGameOver] = useState(false);

  const getCurrentAnswers = (
    index: number = currentQuestionIndex,
    questionsArr: QuestionObj[] = questions
  ) => {
    const answers = [...questionsArr[index].incorrectAnswers];
    answers.splice(
      Math.floor(Math.random() * 4),
      0,
      questionsArr[index].correctAnswer
    );
    return answers;
  };

  const { data: questions = [], isLoading } = useQuery(
    ["questions"],
    fetchQuestions,
    {
      onSuccess: (data) => {
        setCurrentAnswers(getCurrentAnswers(0, data));
      },
    }
  );

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    if (currentQuestionIndex + 1 === questions.length) {
      setIsGameOver(true);
    } else if (currentQuestionIndex < questions.length) {
      setCurrentAnswers(getCurrentAnswers(currentQuestionIndex + 1));
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const onSelectedAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    if (answer === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
    setTimeout(() => {
      handleNextQuestion();
    }, 1500);
  };

  const onTimeOut = () => {
    onSelectedAnswer("Out of Time");
  };

  return isLoading ? (
    <p>Loading...</p>
  ) : !isGameOver ? (
    <GameContainer topic={questions[currentQuestionIndex].category}>
      <Question text={questions[currentQuestionIndex].question} />
      <Timer isRunning={selectedAnswer} onComplete={onTimeOut} resetTimer={currentQuestionIndex} />
      <div className={classes["solutions-container"]}>
        {currentAnswers.map((answer, index) => {
          return (
            <Answer
              key={index}
              letter={index}
              value={answer}
              correctAnswer={questions[currentQuestionIndex].correctAnswer}
              selectedAnswer={selectedAnswer}
              onSelect={onSelectedAnswer}
            />
          );
        })}
      </div>
    </GameContainer>
  ) : (
      <ScoreCard
        score={score}
        difficulty={questions[currentQuestionIndex].difficulty}
      />
  );
};

export default Game;
