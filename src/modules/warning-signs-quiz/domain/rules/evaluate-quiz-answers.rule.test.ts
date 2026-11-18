import { describe, expect, it } from "vitest";
import { evaluateQuizAnswers, type QuizAnswer } from "./evaluate-quiz-answers.rule";

function answers(yes: number, total = 10, severeYes = false): QuizAnswer[] {
  return Array.from({ length: total }, (_, index) => ({
    answeredYes: index < yes,
    indicatesSevereRisk: severeYes && index === 0,
  }));
}

describe("evaluateQuizAnswers", () => {
  it("returns none when every answer is no", () => {
    expect(evaluateQuizAnswers(answers(0))).toBe("none");
  });

  it("returns attention for one or two signs", () => {
    expect(evaluateQuizAnswers(answers(2))).toBe("attention");
  });

  it("returns alert from three signs", () => {
    expect(evaluateQuizAnswers(answers(3))).toBe("alert");
  });

  it("returns risk from six signs", () => {
    expect(evaluateQuizAnswers(answers(6))).toBe("risk");
  });

  it("returns risk when a severe-risk question is answered yes", () => {
    expect(evaluateQuizAnswers(answers(1, 10, true))).toBe("risk");
  });
});
