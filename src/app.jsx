
import ChallengePage from "./ChallengePage";

export default function App() {
  return (
    <div>
      <header
        style={{
          background: "#234c36",
          color: "white",
          padding: "20px",
          textAlign: "center"
        }}
      >
        <h1>🏛️ Heritage Tourism</h1>
        <p>Explore Heritage. Answer Quizzes. Earn Rewards!</p>
      </header>

      <ChallengePage destinationId="all" />
    </div>
  );
}
