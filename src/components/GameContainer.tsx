import React, { ReactNode } from 'react'
import classes from "./GameContainer.module.css"

const GameContainer:React.FC<{children:ReactNode, topic:string, showScore?:boolean}> = (props) => {
  return (
    <main className={`${classes["game-container"]} ${classes[props.topic]}`}>
     {!props.showScore? <div className={classes.card}>
      {props.children}
      </div> : props.children} 
    </main>
  )
}

export default GameContainer