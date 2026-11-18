import type { ViolenceForm } from "../../domain/entities/violence-form.entity";
import type { ViolenceFormRepository } from "../../domain/repositories/violence-form.repository";
import { VIOLENCE_FORMS_DATA } from "../data/violence-forms.data";
import { mapViolenceFormRecordToEntity } from "../mappers/violence-form-record-to-entity.mapper";

export class LocalViolenceFormRepository implements ViolenceFormRepository {
  async listAll(): Promise<ViolenceForm[]> {
    return VIOLENCE_FORMS_DATA.map(mapViolenceFormRecordToEntity);
  }
}
