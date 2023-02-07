import React from 'react'

const Question: React.FC<{text:string}> = (props) => {
  return (
    <div className="question-container">
       <h1>{props.text}</h1> 
    </div>
  )
}

export default Question