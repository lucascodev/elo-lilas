export type SupportServiceRecord = {
  id: string;
  name: string;
  category: "social-assistance" | "health" | "security" | "justice" | "shelter" | "child-protection";
  address: string;
  opening_hours: string;
  phone: string;
  notes?: string;
  last_verified_at: string;
  order: number;
};
