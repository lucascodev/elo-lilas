import type { QuizQuestion } from "../entities/quiz-question.entity";

export interface QuizQuestionRepository {
  listAll(): Promise<QuizQuestion[]>;
}
