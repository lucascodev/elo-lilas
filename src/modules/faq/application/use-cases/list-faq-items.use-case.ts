import type { FaqItemRepository } from "../../domain/repositories/faq-item.repository";
import type { FaqItemOutputDto } from "../dtos/list-faq/faq-item-output.dto";

export class ListFaqItemsUseCase {
  constructor(private readonly repository: FaqItemRepository) {}

  async execute(): Promise<FaqItemOutputDto[]> {
    const items = await this.repository.listAll();
    return [...items].sort((a, b) => a.order - b.order).map(({ id, question, answer }) => ({ id, question, answer }));
  }
}
