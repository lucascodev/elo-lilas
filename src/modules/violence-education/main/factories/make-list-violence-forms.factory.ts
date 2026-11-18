import "server-only";
import { ListViolenceFormsUseCase } from "../../application/use-cases/list-violence-forms.use-case";
import { LocalViolenceFormRepository } from "../../infra/repositories/local-violence-form.repository";

export function makeListViolenceForms(): ListViolenceFormsUseCase {
  return new ListViolenceFormsUseCase(new LocalViolenceFormRepository());
}
