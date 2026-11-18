import type { ViolenceForm } from "../../domain/entities/violence-form.entity";
import type { ViolenceFormRecord } from "../types/violence-form-record.type";

export function mapViolenceFormRecordToEntity(record: ViolenceFormRecord): ViolenceForm {
  return {
    id: record.id,
    name: record.name,
    summary: record.summary,
    examples: record.examples,
    legalReference: record.legal_reference,
    order: record.order,
  };
}
