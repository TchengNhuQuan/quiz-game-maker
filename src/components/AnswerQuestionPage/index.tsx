import { useState } from "react";
import styles from "./answerQuestionPage.module.scss";
import { listOfQuestions } from "./constants";
import FinalResult from "./FinalResult";
import QuestionCard from "./QuestionCard";

interface AnswerQuestionPageProps {
  title?: string;
  question?: string;
  answer?: string;
}

export type AnswerObject = {
  question: string;
  answer: string;
  isCorrect: boolean;
  correctAnswer: string;
};

export type QuestionList = {
  question: string;
  answerA: string;
  answerB: string;
  answerC: string;
  answerD: string;
  correctAnswer: string;
};

const AnswerQuestionPage = () => {
  const [showResults, setShowResults] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);

  const checkAnswer = (answer: string) => {
    if (answer === listOfQuestions[currentQuestion]?.correctAnswer) {
      setScore(score + 1);
      setIsCorrect(true);
    }
    const answerObject = {
      question: listOfQuestions[currentQuestion].question,
      answer: answer,
      isCorrect,
      correctAnswer: listOfQuestions[currentQuestion].correctAnswer,
    };
    setUserAnswers((prev) => [...prev, answerObject]);
    if (currentQuestion + 1 === listOfQuestions.length) {
      setShowResults(true);
    }
  };

  function handleOnclick() {
    if (currentQuestion + 1 < listOfQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  }

  return (
    <div className={styles.answerPage}>
      <div className={styles.quizInfoContainer}>
        <div className={styles.quizTitle}>USA Quiz us</div>
        <div>Number of Questions: {listOfQuestions.length}</div>
        <div>Current Score: {score}</div>
      </div>
      {showResults ? (
        <FinalResult score={score} questions={listOfQuestions} />
      ) : (
        <QuestionCard
          listOfQuestions={listOfQuestions}
          currentQuestion={currentQuestion}
          isCorrect={isCorrect}
          checkAnswer={checkAnswer}
          userAnswer={userAnswers[currentQuestion]?.answer}
        />
      )}
      {userAnswers.length === currentQuestion + 1 &&
        currentQuestion !== listOfQuestions.length - 1 && (
          <button className={styles.quizButton} onClick={() => handleOnclick()}>
            Next
          </button>
        )}
    </div>
  );
};

export default AnswerQuestionPage;
