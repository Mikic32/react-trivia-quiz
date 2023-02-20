import React from "react";
import classes from "./Home.module.css"
import {useNavigate } from "react-router-dom";
import Button from "../components/UI/Button";
import Header from "../components/UI/Header";

function Home() {

  const navigate = useNavigate()
  
  const onGetStarted = () => {
    navigate("/settings");
  };

  return (
    <React.Fragment>
      <Header />
      <main className={classes.wrapper}>
        <div className={classes.container}>
          <div className={classes["home-text-box"]}>
            <h1>Test your trivia expertise with this Quiz!</h1>
            <p>
              Put your knowledge to the test, select up to <b>7 topics</b> for the quiz,
              the topics include <b>Music</b>,<b> History</b>, <b>Geography</b> and <b>more</b>! Then
              select the difficulty level. You will answer <b>5 multiple choice
              questions</b> based on the topics you selected.
            </p>
            <Button onClick={onGetStarted} label="GET STARTED!" />
          </div>
          <div className={classes["home-image"]}></div>
        </div>
      </main>
    </React.Fragment>
  );
}

export default Home;
