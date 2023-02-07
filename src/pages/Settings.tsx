import React, { useReducer, useState } from "react";
import Wave from "../components/Wave";
import Header from "../components/Header";
import "../styles/style.css";
import Topic from "../components/Topic";
import Button from "../components/Button";
import DifficultySettings from "../components/DifficultySettings";

function reducer(state: any, action: any) {
  return {
    categories: state.categories.map((c: any) =>
      c.value === action.type ? { ...c, isActive: !c.isActive } : c
    ),
  };
}

function Settings() {
  const [difficulty, setDifficulty] = useState(0);

  const [state, dispatch] = useReducer(reducer, {
    categories: [
      { isActive: false, value: "Music" },
      { isActive: false, value: "History" },
      { isActive: false, value: "Geography" },
      { isActive: false, value: "Science" },
    ],
  });

  console.log(
    state.categories
      .filter((c: any) => c.isActive)
      .map((c: any) => c.value.toLowerCase())
      .toString()
  );
  const onPlayBtn = () => {};
  console.log(state);
  return (
    <React.Fragment>
      <Header />
      <main>
        <div className="card">
          <h2>Please select your topics*</h2>
          <div className="topics-container">
            {state.categories.map((c: any) => (
              <Topic
                onClick={() => {
                  dispatch({ type: c.value });
                }}
                isActive={c.isActive}
                title={c.value}
                key={c.value}
              />
            ))}
          </div>
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
