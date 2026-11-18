import type { QuizQuestion } from "../../domain/entities/quiz-question.entity";

// Wording to be validated with the partner institution (RN06).
export const QUIZ_QUESTIONS_DATA: QuizQuestion[] = [
  { id: "phone-monitoring", text: "A pessoa controla seu celular, suas senhas ou suas redes sociais?", indicatesSevereRisk: false, order: 1 },
  { id: "isolation", text: "Ela decide com quem você pode falar ou aonde pode ir?", indicatesSevereRisk: false, order: 2 },
  { id: "fear", text: "Você sente medo da reação dela?", indicatesSevereRisk: false, order: 3 },
  { id: "humiliation", text: "Ela humilha, xinga ou ridiculariza você, sozinha ou na frente de outras pessoas?", indicatesSevereRisk: false, order: 4 },
  { id: "financial-control", text: "Ela controla seu dinheiro, seus documentos ou seu trabalho?", indicatesSevereRisk: false, order: 5 },
  { id: "property-destruction", text: "Ela já quebrou ou destruiu objetos seus?", indicatesSevereRisk: false, order: 6 },
  { id: "threats", text: "Ela já ameaçou machucar você, seus filhos ou seus animais?", indicatesSevereRisk: true, order: 7 },
  { id: "physical-aggression", text: "Ela já empurrou, apertou, bateu ou machucou você?", indicatesSevereRisk: true, order: 8 },
  { id: "sexual-violence", text: "Ela já obrigou você a ter relações ou práticas sexuais que você não queria?", indicatesSevereRisk: true, order: 9 },
  { id: "abuse-cycle", text: "Depois de uma agressão, ela pede desculpas, promete mudar e depois tudo se repete?", indicatesSevereRisk: false, order: 10 },
];
