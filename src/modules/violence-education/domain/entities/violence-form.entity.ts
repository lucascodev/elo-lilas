export type ViolenceForm = {
  readonly id: string;
  readonly name: string;
  readonly summary: string;
  readonly examples: readonly string[];
  readonly legalReference: string;
  readonly order: number;
};
