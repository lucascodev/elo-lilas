import type { FaqItem } from "../entities/faq-item.entity";

export interface FaqItemRepository {
  listAll(): Promise<FaqItem[]>;
}
