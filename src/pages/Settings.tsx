import React, { useContext, useReducer, useState } from "react";
import classes from "./Settings.module.css";
import Wave from "../components/Wave";
import Header from "../components/Header";
import Button from "../components/Button";
import DifficultySettings from "../components/DifficultySettings";
import Topics from "../components/Topics";
import { useNavigate } from "react-router-dom";

function reducer(state: any, action: any) {
  return {
    categories: state.categories.map((c: any) =>
      c.value === action.type ? { ...c, isActive: !c.isActive } : c
    ),
  };
}

function Settings() {
  const navigate = useNavigate();
  const [difficulty, setDifficulty] = useState(0);
  const [topicState, dispatchTopics] = useReducer(reducer, {
    categories: [
      { isActive: false, value: "Music" },
      { isActive: false, value: "History" },
      { isActive: false, value: "Geography" },
      { isActive: false, value: "Science" },
    ],
  });

  const difficultyToString = () => {
    switch (difficulty) {
      case 0:
        return "easy";
      case 1:
        return "medium";
      case 2:
        return "hard";
      default:
        return "error";
    }
  };

  const onPlayBtn = () => {
    const topicString = topicState.categories
      .filter((c: any) => c.isActive)
      .map((c: any) => c.value.toLowerCase())
      .toString();

    const params = {
      topicString: topicString,
      difficultyString: difficultyToString(),
    };

    window.localStorage.setItem("params", JSON.stringify(params));

    navigate("/game");
  };

  return (
    <React.Fragment>
      <Header />
      <main className={classes.wrapper}>
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
