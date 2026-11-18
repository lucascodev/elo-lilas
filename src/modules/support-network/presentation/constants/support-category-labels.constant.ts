import type { SupportServiceCategory } from "../../domain/entities/support-service-category.type";

export const SUPPORT_CATEGORY_LABELS: Record<SupportServiceCategory, string> = {
  "social-assistance": "Assistência social",
  health: "Saúde",
  security: "Segurança",
  justice: "Justiça",
  shelter: "Acolhimento",
  "child-protection": "Proteção à infância",
};
