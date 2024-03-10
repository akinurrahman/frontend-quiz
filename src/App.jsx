import React, { useState } from "react";
import "./App.css";
import { quizzes } from "./quizzes";

const App = () => {
  const [answers, setAnswers] = useState(
    quizzes.map(() => ({ text: "", isCorrect: false })) // Initialize with empty strings and false for isCorrect
  );

  const findCorrectAnswer = (option, index) => {
    const correctAnswer = quizzes[index].correctAnswer;
    const newAnswers = [...answers];
    newAnswers[index] = {
      text:
        option === correctAnswer
          ? `You are correct! ${option} is the correct answer.`
          : `You are wrong! ${option} is not the correct answer.`,
      isCorrect: option === correctAnswer, // Set isCorrect to true if the answer is correct
    };
    setAnswers(newAnswers);
  };

  return (
    <div className="App  ">
      <h1>FrontEnd Quiz</h1>

      <div className="quiz__container">
        {quizzes.map((quizItem, index) => (
          <div className="quiz__container--single" key={index}>
            <p className="question">{quizItem.question}</p>
            {quizItem.options.map((option, i) => (
              <div className="answers" key={i}>
                <button onClick={() => findCorrectAnswer(option, index)}>
                  {option}
                </button>
              </div>
            ))}
            <p
              className={
                answers[index].isCorrect ? "correct__answer" : "wrong__answer"
              }
            >
              {answers[index].text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
