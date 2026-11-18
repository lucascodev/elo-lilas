import type { QuizQuestion } from "../../domain/entities/quiz-question.entity";
import type { QuizQuestionRepository } from "../../domain/repositories/quiz-question.repository";
import { QUIZ_QUESTIONS_DATA } from "../data/quiz-questions.data";

export class LocalQuizQuestionRepository implements QuizQuestionRepository {
  async listAll(): Promise<QuizQuestion[]> {
    return QUIZ_QUESTIONS_DATA;
  }
}
