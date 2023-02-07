import React from "react";
import useToggle from "../hooks/useToggle";

function Topic(props: any) {
  return (
    <div
      className={"topic " + (props.isActive && "topic-checked")}
      onClick={props.onClick}
    >
      {props.title}
    </div>
  );
}

export default Topic;
