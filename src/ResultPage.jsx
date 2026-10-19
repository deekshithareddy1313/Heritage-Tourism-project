
export default function ResultPage({ result, onRetry }) {
  return (
    <div
      style={{
        maxWidth: "650px",
        margin: "30px auto",
        padding: "25px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        borderRadius: "15px",
        background: "#f8fafc"
      }}
    >
      <h1>🏆 Mission Completed!</h1>
      <p>Congratulations, Heritage Explorer!</p>

      <div
        style={{
          padding: "20px",
          margin: "20px 0",
          background: "#fff2cc",
          borderRadius: "12px"
        }}
      >
        <h2>🎖️ {result.badge}</h2>
        <p>Your Heritage Achievement</p>
      </div>

      <h2>⭐ Score: {result.score}</h2>
      <h2>⚡ XP Earned: {result.xp}</h2>
      <h2>
        ✅ Correct Answers: {result.correctAnswers}/
        {result.totalQuestions}
      </h2>
      <h2>🎯 Accuracy: {result.accuracy}%</h2>

      <p>
        {result.accuracy === 100
          ? "Perfect! You are a Heritage Master!"
          : result.accuracy >= 70
          ? "Excellent! You know your heritage well!"
          : "Good attempt! Play again to improve your score."}
      </p>

      <button
        onClick={onRetry}
        style={{
          padding: "12px 24px",
          background: "#234c36",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer"
        }}
      >
        🔄 Play Again
      </button>
    </div>
  );
}
