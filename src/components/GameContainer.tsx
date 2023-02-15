import React, { ReactNode } from 'react'
import classes from "./GameContainer.module.css"

const GameContainer:React.FC<{children:ReactNode, topic:string}> = (props) => {
  return (
    <main className={`${classes["game-container"]} ${classes[props.topic]}`}>
      <div className={classes.card}>
      {props.children}
      </div>
    </main>
  )
}

export default GameContainer