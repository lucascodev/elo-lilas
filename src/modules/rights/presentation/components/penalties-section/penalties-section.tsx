import { PENALTIES } from "../../constants/penalties.constant";

export function PenaltiesSection() {
  return (
    <section aria-labelledby="penalties-heading" className="flex flex-col gap-4">
      <h2 id="penalties-heading" className="text-[21px] leading-7 font-semibold md:text-3xl">
        Penalidades para o agressor
      </h2>
      <ul className="grid gap-3 md:grid-cols-3 md:gap-4">
        {PENALTIES.map((penalty) => (
          <li key={penalty.title} className="flex flex-col gap-1.5 rounded-card border border-line p-5">
            <h3 className="text-[17px] font-semibold">{penalty.title}</h3>
            <p className="text-[15px] leading-6">{penalty.description}</p>
            <p className="text-[13px] text-muted">{penalty.law}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
