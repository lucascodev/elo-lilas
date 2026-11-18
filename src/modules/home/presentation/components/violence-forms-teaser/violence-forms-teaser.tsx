import Link from "next/link";
import type { ViolenceFormOutputDto } from "@/modules/violence-education";

type ViolenceFormsTeaserProps = {
  forms: ViolenceFormOutputDto[];
};

export function ViolenceFormsTeaser({ forms }: ViolenceFormsTeaserProps) {
  return (
    <section aria-labelledby="forms-heading" className="mx-auto flex max-w-7xl flex-col gap-3 px-5 pb-8 md:gap-7 md:px-12 md:pb-22">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div className="flex flex-col gap-2">
          <p className="hidden font-heading text-xs font-semibold tracking-[0.08em] text-primary uppercase md:block">Entenda</p>
          <h2 id="forms-heading" className="text-[21px] leading-7 font-semibold md:text-[34px] md:leading-[42px]">
            Nem toda violência deixa marca no corpo
          </h2>
          <p className="md:hidden">A Lei Maria da Penha reconhece cinco formas de violência.</p>
        </div>
        <Link href="/entenda/" className="hidden font-bold md:block">
          Ver as cinco formas
        </Link>
      </div>
      <ul className="flex flex-wrap gap-2 md:grid md:grid-cols-5 md:gap-4">
        {forms.map((form) => (
          <li key={form.id}>
            <Link
              href={`/entenda/#${form.id}`}
              className="inline-flex min-h-10 items-center rounded-full bg-soft px-4 font-heading text-sm font-medium text-primary-dark no-underline md:flex md:h-full md:flex-col md:items-start md:gap-1.5 md:rounded-card md:p-5.5"
            >
              <span className="md:text-lg md:font-semibold md:text-ink">{form.name}</span>
              <span className="hidden font-body text-[15px] leading-[22px] text-muted md:block">{form.summary}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
