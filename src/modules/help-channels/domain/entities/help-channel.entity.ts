export type HelpChannelContactKind = "phone" | "whatsapp" | "email";

export type HelpChannel = {
  readonly id: string;
  readonly shortName: string;
  readonly label: string;
  readonly description: string;
  readonly contactKind: HelpChannelContactKind;
  readonly contactValue: string;
  readonly isEmergency: boolean;
  readonly showInEmergencyBar: boolean;
  readonly protectsChildren: boolean;
  readonly order: number;
};
