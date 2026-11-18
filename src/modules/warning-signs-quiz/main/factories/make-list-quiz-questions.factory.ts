import "server-only";
import { ListQuizQuestionsUseCase } from "../../application/use-cases/list-quiz-questions.use-case";
import { LocalQuizQuestionRepository } from "../../infra/repositories/local-quiz-question.repository";

export function makeListQuizQuestions(): ListQuizQuestionsUseCase {
  return new ListQuizQuestionsUseCase(new LocalQuizQuestionRepository());
}
