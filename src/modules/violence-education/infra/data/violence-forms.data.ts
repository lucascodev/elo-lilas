import type { ViolenceFormRecord } from "../types/violence-form-record.type";

export const VIOLENCE_FORMS_DATA: ViolenceFormRecord[] = [
  {
    id: "physical",
    name: "Física",
    summary: "Qualquer agressão ao corpo.",
    examples: ["Empurrar, apertar, puxar o cabelo", "Bater, chutar, queimar", "Impedir de sair de casa à força"],
    legal_reference: "Lei 11.340/2006, art. 7º, I",
    order: 1,
  },
  {
    id: "psychological",
    name: "Psicológica",
    summary: "Ataques à sua autoestima e à sua liberdade.",
    examples: ["Humilhar, xingar, ameaçar", "Controlar o celular, as roupas e as amizades", "Fazer você duvidar da própria memória"],
    legal_reference: "Lei 11.340/2006, art. 7º, II",
    order: 2,
  },
  {
    id: "sexual",
    name: "Sexual",
    summary: "Qualquer ato sexual sem o seu consentimento.",
    examples: ["Forçar relações ou práticas sexuais", "Impedir o uso de métodos contraceptivos", "Obrigar a engravidar ou a abortar"],
    legal_reference: "Lei 11.340/2006, art. 7º, III",
    order: 3,
  },
  {
    id: "property",
    name: "Patrimonial",
    summary: "Controle sobre seu dinheiro, seus documentos e seus bens.",
    examples: ["Reter documentos ou cartões", "Quebrar celular e objetos pessoais", "Impedir você de trabalhar"],
    legal_reference: "Lei 11.340/2006, art. 7º, IV",
    order: 4,
  },
  {
    id: "moral",
    name: "Moral",
    summary: "Mentiras, ofensas e exposição para atacar sua reputação.",
    examples: ["Inventar mentiras sobre você", "Expor sua intimidade para outras pessoas", "Ofender em público ou nas redes"],
    legal_reference: "Lei 11.340/2006, art. 7º, V",
    order: 5,
  },
];
