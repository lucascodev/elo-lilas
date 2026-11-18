export type HelpChannelRecord = {
  id: string;
  short_name: string;
  label: string;
  description: string;
  contact: { kind: "phone" | "whatsapp" | "email"; value: string };
  emergency: boolean;
  emergency_bar: boolean;
  children: boolean;
  order: number;
};
