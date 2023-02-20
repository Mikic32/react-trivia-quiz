import React, { useReducer, useState } from "react";
import classes from "./Settings.module.css";
import Header from "../components/UI/Header";
import Button from "../components/UI/Button";
import { useNavigate } from "react-router-dom";
import CategoryObj from "../models/CategoryObj";
import generateTopicString from "../helpers/generateTopicString";
import difficultyToString from "../helpers/difficultyToString";
import Topics from "../components/settings/Topics";
import DifficultySettings from "../components/settings/DifficultySettings";

function reducer(
  state: { categories: CategoryObj[] },
  action: { type: string }
) {
  return {
    categories: state.categories.map((c: CategoryObj) =>
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
      { isActive: false, value: "Food & Drink" },
      { isActive: false, value: "Film & TV" },
      { isActive: false, value: "General Knowledge" },
    ],
  });

  const onPlayBtn = () => {
    const topicString = generateTopicString(topicState)
    const params = {
      topicString: topicString,
      difficultyString: difficultyToString(difficulty),
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
        {/* <Wave waveIndex={1} /> */}
      </main>
    </React.Fragment>
  );
}

export default Settings;
