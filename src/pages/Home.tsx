import React from "react";
import { redirect, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";
import Wave from "../components/Wave";
import "../styles/style.css";
import "../styles/wave.css";





function Home() {

  const navigate = useNavigate()
  
  const onGetStarted = () => {
    navigate("/settings");
  };

  return (
    <React.Fragment>
      <Header />
      <main>
        <div className="container">
          <div className="home-text-box">
            <h1>Test your trivia expertise with this Quiz!</h1>
            <p>
              Put your knowledge to the test, select up to 4 topics for the quiz,
              the topics include Music, History, Geography and Science. Then
              select the difficulty level. You will answer 5 multiple choice
              questions based on the topics you selected.
            </p>
            <Button onClick={onGetStarted} label="GET STARTED!" />
          </div>
          <div className="home-image"></div>
        </div>
        <Wave waveIndex={0} />
      </main>
    </React.Fragment>
  );
}

export default Home;
