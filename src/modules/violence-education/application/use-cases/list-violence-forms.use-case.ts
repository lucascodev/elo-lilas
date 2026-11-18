import type { ViolenceFormRepository } from "../../domain/repositories/violence-form.repository";
import type { ViolenceFormOutputDto } from "../dtos/list-violence-forms/violence-form-output.dto";
import { mapViolenceFormToOutputDto } from "../mappers/violence-form-to-output-dto.mapper";

export class ListViolenceFormsUseCase {
  constructor(private readonly repository: ViolenceFormRepository) {}

  async execute(): Promise<ViolenceFormOutputDto[]> {
    const forms = await this.repository.listAll();
    return [...forms].sort((a, b) => a.order - b.order).map(mapViolenceFormToOutputDto);
  }
}
