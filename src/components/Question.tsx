import React from 'react'
import classes from "./Question.module.css"

const Question: React.FC<{text:string}> = (props) => {
  return (
    <div className={classes["question-container"]}>
       <h1>{props.text}</h1> 
    </div>
  )
}

export default Question