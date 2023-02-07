import React from 'react'
import classes from './Answer.module.css'

const Answer: React.FC<{text: string}> = (props) => {
  return (
    <button className={classes.answer}>{props.text}</button>
  )
}

export default Answer