type NumberedStep = {
  title: string;
  description: string;
};

type NumberedStepsProps = {
  steps: NumberedStep[];
};

const STEP_COLORS = ["bg-primary-light", "bg-primary", "bg-primary-dark"];

export function NumberedSteps({ steps }: NumberedStepsProps) {
  return (
    <ol className="grid gap-4 md:grid-cols-3 md:gap-5">
      {steps.map((step, index) => (
        <li key={step.title} className="flex gap-3.5 rounded-[20px] md:flex-col md:gap-3 md:border md:border-line md:bg-white md:p-7">
          <span
            className={`flex size-9 shrink-0 items-center justify-center rounded-full font-heading font-bold text-white md:size-11 md:text-lg ${STEP_COLORS[index % STEP_COLORS.length]}`}
          >
            {index + 1}
          </span>
          <span className="flex flex-col gap-0.5 md:gap-2">
            <span className="font-heading text-[17px] font-semibold text-ink md:text-xl">{step.title}</span>
            <span className="text-sm leading-5 text-muted md:text-base md:leading-relaxed md:text-body">{step.description}</span>
          </span>
        </li>
      ))}
    </ol>
  );
}
