import QuestionObj from "../models/QuestionObj";

async function fetchQuestions() {

    const params = JSON.parse(window.localStorage.getItem("params") || "{}");
    const res = await fetch(
      `https://the-trivia-api.com/api/questions?categories=${params.topicString}&limit=5&difficulty=${params.difficultyString}`
    );
    const data = await res.json();
    return data as QuestionObj[];
  }

  export default fetchQuestions