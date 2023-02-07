import React, { useState } from "react";
import useToggle from "../hooks/useToggle";
import Setting from "./Setting";
import classes from "./Difficulty.module.css"

const DifficultySettings: React.FC<{current: number ,onChange:(state: number) => void}> = (props) => {

  return (
    <div className="difficulty-container">
            <Setting
              isActive={props.current === 0}
              className={"smiley easy"}
              title={"Easy"}
              onClick={() => {
                props.onChange(0);
              }}
            />
            <Setting
              isActive={props.current === 1}
              className={"smiley medium"}
              title={"Medium"}
              onClick={() => {
                props.onChange(1);
              }}
            />
            <Setting
              isActive={props.current === 2}
              className={"smiley hard"}
              title={"Hard"}
              onClick={() => {
                props.onChange(2);
              }}
            />
    </div>
  );
}

export default DifficultySettings;
