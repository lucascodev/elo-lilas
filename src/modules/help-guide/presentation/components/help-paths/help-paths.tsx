import { ChannelButton, type HelpChannelOutputDto } from "@/modules/help-channels";
import { ButtonLink } from "@/shared/presentation/components/actions/button-link/button-link";
import { Eyebrow } from "@/shared/presentation/components/content/eyebrow/eyebrow";
import { Icon } from "@/shared/presentation/components/icons/icon/icon";
import { HelpPathCard } from "./components/help-path-card/help-path-card";

type HelpPathsProps = {
  channels: Record<string, HelpChannelOutputDto | undefined>;
  onlinePoliceReport: { label: string; url: string; appName: string };
};

export function HelpPaths({ channels, onlinePoliceReport }: HelpPathsProps) {
  const emergency = channels["military-police"];
  const phone180 = channels["dial-180"];
  const whatsapp180 = channels["dial-180-whatsapp"];

  return (
    <ol className="grid gap-4 md:grid-cols-2 md:gap-5">
      <li className="flex flex-col gap-3 rounded-card bg-primary p-5 md:col-span-2 md:flex-row md:items-center md:gap-6 md:px-8 md:py-7">
        <span className="hidden size-11 shrink-0 items-center justify-center rounded-full bg-white text-primary md:flex">
          <Icon name="alert" size={22} />
        </span>
        <span className="flex grow flex-col gap-1">
          <Eyebrow tone="on-dark">Caminho 1</Eyebrow>
          <h2 className="text-xl font-semibold text-white md:text-[22px]">Está em risco agora? Ligue 190.</h2>
          <span className="text-soft">A Polícia Militar atende 24 horas, todos os dias.</span>
        </span>
        {emergency && <ChannelButton channel={emergency} label="Ligar 190" variant="on-dark" className="md:min-h-13" />}
      </li>
      <HelpPathCard step={2} icon="chat" title="Orientação e denúncia">
        <p>O Ligue 180 é gratuito, sigiloso e funciona 24 horas. A denúncia pode ser anônima e você recebe um protocolo para acompanhar.</p>
        <div className="grid grid-cols-2 gap-2 md:flex">
          {phone180 && <ChannelButton channel={phone180} label="Ligar 180" />}
          {whatsapp180 && <ChannelButton channel={whatsapp180} label="WhatsApp" />}
        </div>
        <p className="text-sm text-muted">E-mail central180@mulheres.gov.br. Atendimento em Libras.</p>
      </HelpPathCard>
      <HelpPathCard step={3} icon="book" title="Boletim de ocorrência">
        <p>
          Na Delegacia da Mulher, em qualquer delegacia ou pela internet, 24 horas, na {onlinePoliceReport.label}. Pela internet também é possível
          pedir medida protetiva.
        </p>
        <a
          href={onlinePoliceReport.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 items-center justify-center self-start rounded-xl border-[1.5px] border-primary px-5 font-heading text-[15px] font-semibold text-primary no-underline hover:bg-soft"
        >
          Abrir a delegacia online
        </a>
        <p className="text-sm text-muted">Também pelo aplicativo {onlinePoliceReport.appName}, para Android e iPhone.</p>
      </HelpPathCard>
      <HelpPathCard id="protective-order" step={4} icon="shield" title="Medida protetiva" highlighted wide>
        <div className="grid gap-4 md:grid-cols-2 md:gap-7">
          <p>
            <strong className="text-ink">Não é preciso ter boletim de ocorrência.</strong> Peça na delegacia, na Defensoria Pública ou no
            Ministério Público. A Justiça analisa com base no seu relato, e as medidas valem enquanto existir risco.
          </p>
          <div className="flex flex-col gap-1.5 rounded-xl bg-soft p-4">
            <h3 className="text-[15px] font-semibold">O que ajuda levar, se puder</h3>
            <ul className="list-disc pl-5 text-[15px]">
              <li>Documento com foto</li>
              <li>Endereço do agressor, se souber</li>
              <li>Prints, áudios, fotos ou laudos</li>
              <li>Nome de testemunhas</li>
            </ul>
          </div>
        </div>
      </HelpPathCard>
      <HelpPathCard step={5} icon="users" title="Apoio psicológico e social">
        <p>O CRAS, o CREAS e o Centro de Referência da Mulher acolhem você e sua família.</p>
        <ButtonLink href="/rede-de-apoio/" variant="outline" className="self-start">
          Ver endereços
        </ButtonLink>
      </HelpPathCard>
      <HelpPathCard step={6} icon="scale" title="Orientação jurídica gratuita">
        <p>A Defensoria Pública ajuda com medida protetiva, guarda dos filhos, pensão e divórcio, sem custo.</p>
      </HelpPathCard>
    </ol>
  );
}
