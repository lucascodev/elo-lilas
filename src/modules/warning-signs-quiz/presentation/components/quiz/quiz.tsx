"use client";

import type { QuizQuestionOutputDto } from "../../../application/dtos/get-quiz/quiz-question-output.dto";
import { Icon } from "@/shared/presentation/components/icons/icon/icon";
import { useQuiz } from "../../hooks/use-quiz/use-quiz";
import { QuizResult } from "../quiz-result/quiz-result";

type QuizProps = {
  questions: QuizQuestionOutputDto[];
};

export function Quiz({ questions }: QuizProps) {
  const quiz = useQuiz(questions);

  return (
    <section aria-label="Teste de sinais de alerta" className="flex flex-col gap-5 md:gap-6 md:rounded-panel md:border md:border-line md:p-10">
      <p className="flex items-center gap-2.5 rounded-xl bg-soft px-4 py-3 text-[15px] text-ink">
        <Icon name="lock" size={18} className="shrink-0 text-primary" />
        Suas respostas não são salvas nem enviadas. Tudo acontece só no seu aparelho.
      </p>
      {quiz.result ? (
        <QuizResult badge={quiz.result.badge} title={quiz.result.title} text={quiz.result.text} onRestart={quiz.restart} />
      ) : (
        <div className="flex flex-col gap-5 md:gap-6">
          <div className="flex flex-col gap-2">
            <p className="text-sm font-bold text-muted" aria-live="polite">
              {quiz.progressLabel}
            </p>
            <div className="h-2 rounded bg-mid" aria-hidden="true">
              <div className="h-2 rounded bg-primary transition-[width]" style={{ width: `${quiz.progressPercent}%` }} />
            </div>
          </div>
          <h2 className="min-h-34 text-[26px] leading-[34px] font-bold md:min-h-21 md:text-[32px] md:leading-[42px]">{quiz.currentQuestion?.text}</h2>
          <div className="grid gap-3 md:grid-cols-2">
            <button
              type="button"
              onClick={() => quiz.answer(true)}
              className="min-h-14 rounded-xl border-[1.5px] border-primary bg-primary font-heading text-base font-semibold text-white hover:bg-primary-dark"
            >
              Sim
            </button>
            <button
              type="button"
              onClick={() => quiz.answer(false)}
              className="min-h-14 rounded-xl border-[1.5px] border-primary bg-white font-heading text-base font-semibold text-primary hover:bg-soft"
            >
              Não
            </button>
          </div>
          {quiz.canGoBack && (
            <button type="button" onClick={quiz.goBack} className="min-h-11 self-center font-bold text-primary underline">
              Voltar à pergunta anterior
            </button>
          )}
        </div>
      )}
    </section>
  );
}
