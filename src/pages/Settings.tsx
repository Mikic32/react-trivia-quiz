import React, { useReducer, useState } from "react";
import classes from "./Settings.module.css"
import Wave from "../components/Wave";
import Header from "../components/Header";
import Button from "../components/Button";
import DifficultySettings from "../components/DifficultySettings";
import Topics from "../components/Topics";

function reducer(state: any, action: any) {
  return {
    categories: state.categories.map((c: any) =>
      c.value === action.type ? { ...c, isActive: !c.isActive } : c
    ),
  };
}

function Settings() {
  const [difficulty, setDifficulty] = useState(0);

  const [topicState, dispatchTopics] = useReducer(reducer, {
    categories: [
      { isActive: false, value: "Music" },
      { isActive: false, value: "History" },
      { isActive: false, value: "Geography" },
      { isActive: false, value: "Science" },
    ],
  });

  console.log(
    topicState.categories
      .filter((c: any) => c.isActive)
      .map((c: any) => c.value.toLowerCase())
      .toString()
  );
  const onPlayBtn = () => {};
  console.log(topicState);
  return (
    <React.Fragment>
      <Header />
      <main>
        <div className={classes.card}>
          <h2>Please select your topics*</h2>
          <Topics topics={topicState} dispatch={dispatchTopics} />
          <h2>Select difficulty level</h2>
          <DifficultySettings current={difficulty} onChange={setDifficulty} />
          <Button onClick={onPlayBtn} large label="Play!" />
        </div>
        <Wave waveIndex={1} />
      </main>
    </React.Fragment>
  );
}

export default Settings;
