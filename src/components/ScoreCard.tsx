import React from "react";
import { useNavigate } from "react-router-dom";

import classes from "./ScoreCard.module.css";

const ScoreCard: React.FC<{ score: number; difficulty: string }> = (props) => {
  const navigate = useNavigate();
  const onConfirm = () => {
    navigate("/settings");
  };
  
  return (
    <div className={classes["score-card"]}>
      <h1>Well Done!</h1>
      <div className={classes.quizInfo}>
        <div className={`${classes.row} ${classes.overall}`}>
          <span>
            <h2>Overall Score:{`${props.score}/5`}</h2>
          </span>
          <span id={classes.overall}></span>
        </div>
        <div className={classes.row}>
          <span>Difficulty: {`${props.difficulty}`}</span>
          <span id={classes.difficulty}></span>
        </div>
        <p>A better score display coming soon ;)</p>
      </div>
      <button
        onClick={onConfirm}
        id={classes.confirm}
        className={classes["btn-big"]}
      >
        Confirm
      </button>
    </div>
  );
};

export default ScoreCard;
