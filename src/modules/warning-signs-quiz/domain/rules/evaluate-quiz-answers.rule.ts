import { QUIZ_THRESHOLDS } from "../constants/quiz-thresholds.constant";
import type { QuizResultLevel } from "../entities/quiz-result-level.type";

export type QuizAnswer = {
  answeredYes: boolean;
  indicatesSevereRisk: boolean;
};

export function evaluateQuizAnswers(answers: QuizAnswer[]): QuizResultLevel {
  const yesCount = answers.filter((answer) => answer.answeredYes).length;
  const hasSevereRisk = answers.some((answer) => answer.answeredYes && answer.indicatesSevereRisk);

  if (hasSevereRisk || yesCount >= QUIZ_THRESHOLDS.risk) return "risk";
  if (yesCount >= QUIZ_THRESHOLDS.alert) return "alert";
  if (yesCount >= QUIZ_THRESHOLDS.attention) return "attention";
  return "none";
}
