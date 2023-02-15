import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import classes from "./Timer.module.css";

const renderTime = ({ remainingTime }: any) => {
  if (remainingTime === 0) {
    return <div className={classes.timer}>Too late...</div>;
  }
  return (
    <div className={classes.timer}>
      <div className={classes.value}>{remainingTime}</div>
    </div>
  );
};

const Timer: React.FC<{ resetTimer: number; onComplete: () => void }> = (
  props
) => {
  return (
    <CountdownCircleTimer
      key={props.resetTimer}
      isPlaying
      duration={15}
      size={250}
      colors={["#ffffff", "#c92a2a"]}
      trailColor={"#121212"}
      colorsTime={[4, 0]}
      onComplete={props.onComplete}
    >
      {renderTime}
    </CountdownCircleTimer>
  );
};

export default Timer;
