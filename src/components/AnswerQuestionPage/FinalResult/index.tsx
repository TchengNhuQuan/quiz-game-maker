import styles from "./finalResult.module.scss";

interface FinalResulProps {
  score: number;
  questions: any;
}

const FinalResult = (props: FinalResulProps) => {
  const { score, questions } = props;
  return (
    <div className={styles.container}>
      <h1>Final Results</h1>
      <h2>
        {score} out of {questions.length} correct - (
        {(score / questions.length) * 100}%)
      </h2>
    </div>
  );
};

export default FinalResult;
