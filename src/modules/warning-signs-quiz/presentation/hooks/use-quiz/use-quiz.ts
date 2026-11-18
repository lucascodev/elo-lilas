"use client";

import { useState } from "react";
import type { QuizQuestionOutputDto } from "../../../application/dtos/get-quiz/quiz-question-output.dto";
import { evaluateQuizAnswers } from "../../../domain/rules/evaluate-quiz-answers.rule";
import { QUIZ_RESULT_CONTENT } from "../../constants/quiz-result-content.constant";

export function useQuiz(questions: QuizQuestionOutputDto[]) {
  const [answers, setAnswers] = useState<boolean[]>([]);
  const isFinished = answers.length >= questions.length;
  const currentIndex = Math.min(answers.length, questions.length - 1);
  const level = isFinished
    ? evaluateQuizAnswers(answers.map((answeredYes, index) => ({ answeredYes, indicatesSevereRisk: questions[index]?.indicatesSevereRisk ?? false })))
    : null;

  return {
    isFinished,
    currentQuestion: questions[currentIndex],
    progressLabel: `Pergunta ${currentIndex + 1} de ${questions.length}`,
    progressPercent: Math.max(4, Math.round((answers.length / questions.length) * 100)),
    canGoBack: answers.length > 0 && !isFinished,
    result: level ? QUIZ_RESULT_CONTENT[level] : null,
    answer: (value: boolean) => setAnswers((previous) => [...previous, value]),
    goBack: () => setAnswers((previous) => previous.slice(0, -1)),
    restart: () => setAnswers([]),
  };
}
