import React from "react";
import classes from "./Topic.module.css"
import Topic from "./Topic";
import CategoryObj from "../models/CategoryObj";
const Topics: React.FC<{topics:{categories:CategoryObj[]}, dispatch:(action:{type:string}) => void}> = (props) => {
  return (<div className={classes["topics-container"]}>
    {props.topics.categories.map((c:CategoryObj) => (
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