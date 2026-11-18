import Link from "next/link";
import { ChannelButton, type HelpChannelOutputDto } from "@/modules/help-channels";
import { Eyebrow } from "@/shared/presentation/components/content/eyebrow/eyebrow";

type AnonymousReportSectionProps = {
  listeningChannels: HelpChannelOutputDto[];
};

export function AnonymousReportSection({ listeningChannels }: AnonymousReportSectionProps) {
  return (
    <div className="grid gap-6 md:grid-cols-12 md:items-center md:gap-12">
      <section aria-labelledby="report-heading" className="flex flex-col gap-3.5 md:col-span-7">
        <h2 id="report-heading" className="text-[21px] font-semibold md:text-3xl">
          Denúncia anônima
        </h2>
        <p className="md:text-lg md:leading-7">
          Pelo Ligue 180 qualquer pessoa pode denunciar, sem dizer o nome. A denúncia é encaminhada aos órgãos responsáveis e você recebe
          um protocolo para acompanhar.
        </p>
        <div className="flex flex-col gap-3 md:flex-row">
          {listeningChannels.map((channel, index) => (
            <ChannelButton
              key={channel.id}
              channel={channel}
              label={channel.shortName === "180" ? "Ligar 180" : `${channel.shortName} ${channel.label}`}
              variant={index === 0 ? "primary" : "outline"}
            />
          ))}
        </div>
      </section>
      <aside className="flex flex-col gap-2 rounded-card border border-line p-5 md:col-span-5 md:p-6">
        <Eyebrow>Para crianças e adolescentes</Eyebrow>
        <h2 className="text-lg font-semibold">Disque 100 e Conselho Tutelar</h2>
        <p>Se a violência envolve uma criança ou adolescente, ligue 100 ou procure o Conselho Tutelar.</p>
        <Link href="/criancas-e-adolescentes/" className="font-bold">
          Saiba mais
        </Link>
      </aside>
    </div>
  );
}
