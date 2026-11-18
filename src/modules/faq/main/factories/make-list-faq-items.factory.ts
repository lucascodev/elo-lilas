import "server-only";
import { ListFaqItemsUseCase } from "../../application/use-cases/list-faq-items.use-case";
import { LocalFaqItemRepository } from "../../infra/repositories/local-faq-item.repository";

export function makeListFaqItems(): ListFaqItemsUseCase {
  return new ListFaqItemsUseCase(new LocalFaqItemRepository());
}
