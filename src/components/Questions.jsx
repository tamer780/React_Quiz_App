import Answers from "./Answers.jsx";
import QuestionTimer from "./QuestionTimer.jsx";
import QUESTIONS from "../questions.js";
import { useState } from "react";
export default function Questions({ indexKey, onSkipAnswer, onSelectAnswer }) {
  const [answer, setAnswer] = useState({
    selectAnwser: "",
    isCorrect: null,
  });

  let timer = 10000;
  if (answer.selectAnwser) {
    timer = 1000;
  }
  if (answer.isCorrect !== null) {
    timer = 2000;
  }
  function handleSelectAnswer(answer) {
    setAnswer({
      selectAnwser: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectAnwser: answer,
        isCorrect: QUESTIONS[indexKey].answers[0] === answer,
      });

      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);
    }, 1000);
  }
  let answerState = "";
  if (answer.selectAnwser && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectAnwser) {
    answerState = "answered";
  }
  return (
    <div id="question">
      <QuestionTimer
        key={timer}
        timeout={timer}
        onTimeout={answer.selectAnwser === "" ? onSkipAnswer : null}
        mode={answerState}
      />
      <h2>{QUESTIONS[indexKey].text}</h2>
      <Answers
        answers={QUESTIONS[indexKey].answers}
        answerSelected={answer.selectAnwser}
        onSelect={handleSelectAnswer}
        answerState={answerState}
      />
    </div>
  );
}
