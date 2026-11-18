export type QuizQuestion = {
  readonly id: string;
  readonly text: string;
  readonly indicatesSevereRisk: boolean;
  readonly order: number;
};
