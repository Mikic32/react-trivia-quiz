import React from "react";
import Header from "../components/UI/Header";
import classes from "./About.module.css";

const About = () => {
  return (
    <>
      <Header />
      <main className={classes.wrapper}>
        <div className={classes.container}>
          <h1>About the Trivia Quiz Web App</h1>

          <p>
            Welcome to the Trivia Quiz Web App! This app is designed to help you
            test your knowledge on a wide range of topics, including music,
            history, geography, and science.
          </p>

          <p>
            Our trivia quiz is made using <b>React</b> and <b>TypeScript</b>, which provides a
            seamless and responsive user experience. We've also used a <a className={classes.link} href="https://the-trivia-api.com/">Trivia
            Quiz API</a> to fetch questions, ensuring that the questions are always
            up to date and accurate.
          </p>

          <h2>How to Play</h2>

          <p>
            Playing the Trivia Quiz Web App is easy.Each quiz is timed, so
            you'll need to answer each question before the timer runs out.
            Simply select the answer you think is correct. If your answer is
            correct, the the answer will flash green and move on to the next
            question. If your answer is incorrect, the answer will flash red and
            highlight the correct answer before moving on to the next question.
          </p>

          <p>
            At the end of the quiz, the app will show you how many questions you
            answered correctly, and give you the option to try the quiz again.
            You can also select a different category for the quiz, or adjust the
            difficulty level to suit your preferences.
          </p>

          <h2>Our Goal</h2>

          <p>
            Our goal with the Trivia Quiz Web App is to provide an entertaining
            and educational experience that challenges your knowledge on a wide
            range of topics. We're always looking for ways to improve the app,
            so if you have any feedback or suggestions, please don't hesitate to
            get in touch with us.
          </p>

          <p>Thanks for using the Trivia Quiz Web App, and happy quizzing!</p>
        </div>
      </main>
    </>
  );
};

export default About;
