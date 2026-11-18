import type { FaqItem } from "../../domain/entities/faq-item.entity";
import type { FaqItemRepository } from "../../domain/repositories/faq-item.repository";
import { FAQ_ITEMS_DATA } from "../data/faq-items.data";

export class LocalFaqItemRepository implements FaqItemRepository {
  async listAll(): Promise<FaqItem[]> {
    return FAQ_ITEMS_DATA;
  }
}
