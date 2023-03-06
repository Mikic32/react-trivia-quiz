import React from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css"


function Header() {
  return (
    <header className={classes["header-container"]}>
      <Link to="/" className={classes.logo}>
        Trivia<span>Quiz</span>
      </Link>
      <nav>
        <a href="https://github.com/Mikic32/react-trivia-quiz">GitHub</a>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}

export default Header;
