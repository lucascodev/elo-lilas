import { Eyebrow } from "@/shared/presentation/components/content/eyebrow/eyebrow";

export function VicariousViolenceCallout() {
  return (
    <div className="flex h-full flex-col gap-2.5 rounded-card bg-primary p-5 md:p-6">
      <Eyebrow tone="on-dark">Novo na lei em 2026</Eyebrow>
      <h3 className="text-xl font-semibold text-white">Violência vicária</h3>
      <p className="text-[15px] leading-6 text-soft">
        Quando o agressor usa filhos, familiares ou animais de estimação para atingir a mulher. Incluída na Lei Maria da Penha pela Lei
        15.384/2026.
      </p>
    </div>
  );
}
