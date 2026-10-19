
export function calculateResult(
  destinationId,
  totalQuestions,
  correctAnswers
) {
  const score = correctAnswers * 10;
  const xp = correctAnswers * 10;

  const accuracy =
    totalQuestions > 0
      ? Math.round((correctAnswers / totalQuestions) * 100)
      : 0;

  let badge = "Beginner Explorer";

  if (totalQuestions > 0 && accuracy === 100) {
    badge = "Heritage Master";
  } else if (accuracy >= 70) {
    badge = "Heritage Explorer";
  } else if (accuracy >= 40) {
    badge = "Curious Traveller";
  }

  return {
    destinationId,
    totalQuestions,
    correctAnswers,
    score,
    xp,
    accuracy,
    badge
  };
}
