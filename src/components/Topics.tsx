import React from "react";
import classes from "./Topic.module.css"
import Topic from "./Topic";
const Topics: React.FC<{topics:{categories:[]}, dispatch:({}) => void}> = (props) => {
  return (<div className={classes["topics-container"]}>
    {props.topics.categories.map((c: any) => (
      <Topic
        onClick={() => {
          props.dispatch({ type: c.value });
        }}
        isActive={c.isActive}
        title={c.value}
        key={c.value}
      />
    ))}
  </div>)
}

export default Topics