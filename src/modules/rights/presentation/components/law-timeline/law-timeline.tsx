import { LAW_TIMELINE } from "../../constants/law-timeline.constant";

export function LawTimeline() {
  return (
    <section aria-labelledby="timeline-heading" className="bg-soft">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 md:gap-7 md:px-12 md:py-18">
        <h2 id="timeline-heading" className="text-[21px] leading-7 font-semibold md:text-[34px] md:leading-[42px]">
          A lei ao longo do tempo
        </h2>
        <ol className="ml-1.5 flex flex-col border-l-2 border-on-dark pl-5 md:ml-0 md:grid md:grid-cols-6 md:gap-6 md:border-0 md:pl-0">
          {LAW_TIMELINE.map((entry, index) => (
            <li
              key={entry.year}
              className={`relative flex gap-3.5 pb-4.5 md:flex-col md:gap-2.5 md:border-t-[3px] md:pt-4.5 md:pb-0 ${
                index === LAW_TIMELINE.length - 1 ? "md:border-primary" : "md:border-on-dark"
              }`}
            >
              <span aria-hidden="true" className="absolute top-1.5 -left-[27px] size-3 rounded-full bg-primary md:hidden" />
              <span className="w-12 shrink-0 font-heading text-lg font-bold text-primary md:text-[22px]">{entry.year}</span>
              <span className="text-[15px] leading-6">{entry.text}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
