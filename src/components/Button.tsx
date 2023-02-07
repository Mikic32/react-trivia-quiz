import React from "react";
import classes from "./Button.module.css"

const Button : React.FC<{label:string, onClick: () => void, large?:boolean}> = (props: any) => {
  return (
    <button
      className={`${classes.btn} ${(props.large && classes["btn-big"])}`}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
}

export default Button;
