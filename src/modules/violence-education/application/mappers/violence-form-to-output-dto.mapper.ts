import type { ViolenceForm } from "../../domain/entities/violence-form.entity";
import type { ViolenceFormOutputDto } from "../dtos/list-violence-forms/violence-form-output.dto";

export function mapViolenceFormToOutputDto(form: ViolenceForm): ViolenceFormOutputDto {
  return {
    id: form.id,
    name: form.name,
    summary: form.summary,
    examples: [...form.examples],
    legalReference: form.legalReference,
  };
}
