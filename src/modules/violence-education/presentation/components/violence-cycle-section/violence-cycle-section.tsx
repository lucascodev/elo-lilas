import { NumberedSteps } from "@/shared/presentation/components/content/numbered-steps/numbered-steps";

const CYCLE_STEPS = [
  { title: "Tensão", description: "Irritação, ameaças e clima de medo crescem." },
  { title: "Explosão", description: "A agressão acontece." },
  { title: "Arrependimento", description: "Pedido de desculpas e promessas de mudança. Depois, o ciclo recomeça." },
];

export function ViolenceCycleSection() {
  return (
    <section aria-labelledby="cycle-heading" className="md:bg-soft">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 md:gap-7 md:px-12 md:py-18">
        <div className="flex max-w-3xl flex-col gap-2">
          <h2 id="cycle-heading" className="text-[21px] leading-7 font-semibold md:text-[34px] md:leading-[42px]">
            O ciclo da violência
          </h2>
          <p className="md:text-lg md:leading-7">A violência costuma seguir um ciclo que se repete e fica mais grave com o tempo.</p>
        </div>
        <NumberedSteps steps={CYCLE_STEPS} />
      </div>
    </section>
  );
}
