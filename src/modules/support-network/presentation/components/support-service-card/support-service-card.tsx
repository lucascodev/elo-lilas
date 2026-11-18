import { Icon } from "@/shared/presentation/components/icons/icon/icon";
import type { SupportServiceCardViewModel } from "../../view-models/support-service-card-view-model.type";

type SupportServiceCardProps = {
  service: SupportServiceCardViewModel;
};

export function SupportServiceCard({ service }: SupportServiceCardProps) {
  return (
    <article className="flex flex-col gap-2.5 rounded-card border border-line bg-white p-5 md:p-6">
      <p className="font-heading text-xs font-semibold tracking-[0.08em] text-primary uppercase">{service.categoryLabel}</p>
      <h3 className="text-[17px] leading-6 font-semibold md:text-lg">{service.name}</h3>
      <p className="flex items-start gap-2 text-[15px]">
        <Icon name="pin" size={18} className="mt-0.5 shrink-0 text-primary" />
        {service.address}
      </p>
      <p className="flex items-center gap-2 text-[15px]">
        <Icon name="clock" size={18} className="shrink-0 text-primary" />
        {service.openingHours}
      </p>
      <p className="flex items-center gap-2 text-[15px]">
        <Icon name="phone" size={18} className="shrink-0 text-primary" />
        {service.phoneLabel}
      </p>
      {service.notes && <p className="text-sm leading-5 text-muted">{service.notes}</p>}
      {service.showStaleWarning && (
        <p className="flex items-start gap-2.5 rounded-xl bg-warning-bg p-3 text-sm leading-5 text-warning-text">
          <Icon name="alert" className="shrink-0 text-warning-icon" />
          Dados verificados há mais de 6 meses. Confirme por telefone antes de ir.
        </p>
      )}
      <div className="mt-1 grid grid-cols-2 gap-2">
        {service.phoneHref ? (
          <a
            href={service.phoneHref}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border-[1.5px] border-primary bg-primary font-heading text-[15px] font-semibold text-white no-underline hover:bg-primary-dark hover:text-white"
          >
            <Icon name="phone" size={18} />
            Ligar
          </a>
        ) : (
          <span className="inline-flex min-h-12 items-center justify-center rounded-xl border border-line text-sm text-muted">Telefone a confirmar</span>
        )}
        <a
          href={service.routeHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 items-center justify-center rounded-xl border-[1.5px] border-primary font-heading text-[15px] font-semibold text-primary no-underline hover:bg-soft"
        >
          Ver rota
        </a>
      </div>
      <p className="text-[13px] text-muted">{service.verifiedLabel}</p>
    </article>
  );
}
