import { Eyebrow } from "@/shared/presentation/components/content/eyebrow/eyebrow";
import { Icon } from "@/shared/presentation/components/icons/icon/icon";

type ProjectCreditsProps = {
  partnerName: string;
};

export function ProjectCredits({ partnerName }: ProjectCreditsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-6">
      <div className="flex items-center gap-4 rounded-card border border-line p-5 md:gap-5 md:p-7">
        <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl border border-dashed border-primary-light bg-soft text-xs text-muted md:size-22">
          logo
        </div>
        <div className="flex flex-col gap-1">
          <Eyebrow>Instituição parceira</Eyebrow>
          <h2 className="text-lg font-semibold md:text-xl">{partnerName}</h2>
          <p className="text-sm text-muted">Responsável pelo conteúdo e pela rede de apoio</p>
        </div>
      </div>
      <div className="flex items-center gap-4 rounded-card border border-line p-5 md:gap-5 md:p-7">
        <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-soft text-primary">
          <Icon name="book" size={24} />
        </span>
        <div className="flex flex-col gap-1">
          <Eyebrow>Extensão universitária</Eyebrow>
          <h2 className="text-lg font-semibold md:text-xl">UNIASSELVI</h2>
          <p className="text-sm text-muted">Desenvolvimento: Lucas Pereira dos Reis</p>
        </div>
      </div>
    </div>
  );
}
