import { Icon } from "@/shared/presentation/components/icons/icon/icon";

export function SafetyWarning() {
  return (
    <p role="note" className="flex items-start gap-3 rounded-card bg-ink p-4 text-[15px] leading-6 text-white md:items-center md:px-6 md:py-5 md:text-base">
      <Icon name="alert" className="shrink-0 text-on-dark" />
      Imprimir ou salvar esta lista em um aparelho que outra pessoa usa pode ser perigoso.
    </p>
  );
}
