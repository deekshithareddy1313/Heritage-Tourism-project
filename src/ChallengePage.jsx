
import { useState } from "react";
import { getChallenges } from "./challenges";
import { calculateResult } from "./gameLogic";
import ResultPage from "./ResultPage";

export default function ChallengePage({
  destinationId = "all",
  onComplete
}) {
  const questions = getChallenges(destinationId);

  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [correct, setCorrect] = useState(0);
  const [result, setResult] = useState(null);

  if (questions.length === 0) {
    return <h2>No questions available.</h2>;
  }

  if (result) {
    return (
      <ResultPage
        result={result}
        onRetry={() => {
          setIndex(0);
          setSelected(null);
          setCorrect(0);
          setResult(null);
        }}
      />
    );
  }

  const question = questions[index];
  const answered = selected !== null;
  const isCorrect = selected === question.correctAnswer;

  function selectAnswer(optionIndex) {
    if (answered) return;

    setSelected(optionIndex);

    if (optionIndex === question.correctAnswer) {
      setCorrect((previous) => previous + 1);
    }
  }

  function nextQuestion() {
    if (!answered) return;

    if (index < questions.length - 1) {
      setIndex(index + 1);
      setSelected(null);
      return;
    }

    const finalCorrect = correct + (isCorrect ? 1 : 0);

    const finalResult = calculateResult(
      destinationId,
      questions.length,
      finalCorrect
    );

    setResult(finalResult);
    if (onComplete) onComplete(finalResult);
  }

  return (
    <div style={{ maxWidth: 650, margin: "30px auto", padding: 24 }}>
      <h1>🏛️ Heritage Challenge</h1>
      <p>Question {index + 1} of {questions.length}</p>
      <p>⭐ XP: {correct * 10}</p>

      <h2>{question.question}</h2>

      {question.options.map((option, i) => (
        <button
          key={option}
          onClick={() => selectAnswer(i)}
          disabled={answered}
          style={{
            display: "block",
            width: "100%",
            padding: 14,
            margin: "10px 0",
            textAlign: "left",
            background: answered && i === question.correctAnswer
              ? "#c8f7d2"
              : answered && i === selected
              ? "#ffd1d1"
              : "white",
            border: "1px solid #aaa",
            borderRadius: 8,
            cursor: answered ? "default" : "pointer"
          }}
        >
          {String.fromCharCode(65 + i)}. {option}
        </button>
      ))}

      {answered && (
        <div>
          <h3>{isCorrect ? "Correct! 🎉" : "Incorrect!"}</h3>
          <p>{question.explanation}</p>
        </div>
      )}

      <p>Score: {correct * 10}</p>

      <button onClick={nextQuestion} disabled={!answered}>
        {index === questions.length - 1
          ? "View Results"
          : "Next Question →"}
      </button>
    </div>
  );
}
