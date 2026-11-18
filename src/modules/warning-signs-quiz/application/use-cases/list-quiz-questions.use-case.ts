import type { QuizQuestionRepository } from "../../domain/repositories/quiz-question.repository";
import type { QuizQuestionOutputDto } from "../dtos/get-quiz/quiz-question-output.dto";

export class ListQuizQuestionsUseCase {
  constructor(private readonly repository: QuizQuestionRepository) {}

  async execute(): Promise<QuizQuestionOutputDto[]> {
    const questions = await this.repository.listAll();
    return [...questions]
      .sort((a, b) => a.order - b.order)
      .map((question) => ({ id: question.id, text: question.text, indicatesSevereRisk: question.indicatesSevereRisk }));
  }
}
