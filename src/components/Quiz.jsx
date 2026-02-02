import { useCallback, useState } from "react";
import QUESTIONS from "../questions.js";
import Questions from "./Questions.jsx";
import Summary from "./Summary.jsx";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  //   const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length; //drived State

  console.log(activeQuestionIndex);
  console.log(userAnswers);
  const questionsIsComplete = activeQuestionIndex === QUESTIONS.length;
  //   useEffect(() => {
  //     if (!questionsIsComplete) {
  //       setShuffledAnswers(() => {
  //         const shuffled = [...QUESTIONS[activeQuestionIndex].answers];
  //         shuffled.sort(() => Math.random() - 0.5);
  //         return shuffled;
  //       });
  //     }
  //   }, [activeQuestionIndex, questionsIsComplete]);

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer,
  ) {
    setUserAnswers((prevAnswer) => {
      return [...prevAnswer, selectedAnswer];
    });
  }, []);
  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer],
  );

  if (questionsIsComplete) {
    return <Summary userAnswers={userAnswers} />;
  }

  return (
    <div id="quiz">
      <Questions
        key={activeQuestionIndex}
        indexKey={activeQuestionIndex}
        onSkipAnswer={handleSkipAnswer}
        onSelectAnswer={handleSelectAnswer}
      />
    </div>
  );
}
