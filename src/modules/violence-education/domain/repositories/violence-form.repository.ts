import type { ViolenceForm } from "../entities/violence-form.entity";

export interface ViolenceFormRepository {
  listAll(): Promise<ViolenceForm[]>;
}
