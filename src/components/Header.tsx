import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/home" className="logo">
        Trivia<span>Quiz</span>
      </Link>
      <nav>
        <a href="https://github.com/Mikic32/trivia-quiz">GitHub</a>
        <a href="#">Contact Me</a>
      </nav>
    </header>
  );
}

export default Header;
