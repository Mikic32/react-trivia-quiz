import React from "react";
import classes from "./Topic.module.css";

const Topic: React.FC<{isActive: boolean, onClick: () => void, title: string}> = (props) => {
  return (
    <div
      className={`${classes.topic} ${props.isActive && classes["topic-checked"]}`}
      onClick={props.onClick}
    >
      {props.title}
    </div>
  );
}

export default Topic;
