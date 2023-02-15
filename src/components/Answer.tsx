import React, { useState } from "react";
import classes from "./Answer.module.css";

const Answer: React.FC<{
  letter: number;
  value: string;
  correctAnswer: string;
  selectedAnswer: string | null;
  onSelect: (answer: string) => void;
}> = (props) => {
  let classesString = classes.answer;

  if (
    props.selectedAnswer === props.value &&
    props.value !== props.correctAnswer
  ) {
    classesString = `${classesString} ${classes.incorrect}`;
  }

  if (props.selectedAnswer && props.value === props.correctAnswer) {
    classesString = `${classesString} ${classes.correct}`;
  }

  return (
    <button
      onClick={() => {
        props.onSelect(props.value);
      }}
      className={classesString}
    >
      {props.value}
    </button>
  );
};

export default Answer;
