import { ChannelButton, type HelpChannelOutputDto } from "@/modules/help-channels";
import { Icon } from "@/shared/presentation/components/icons/icon/icon";
import type { IconName } from "@/shared/presentation/components/icons/icon/icon-name.type";

const CONTACTS: { icon: IconName; title: string; description: string }[] = [
  { icon: "users", title: "Um adulto de confiança", description: "Professora, avó, tia, vizinha ou a mãe de um amigo." },
  { icon: "shield", title: "Conselho Tutelar", description: "Protege crianças e adolescentes. O endereço está na rede de apoio." },
  { icon: "phone", title: "Disque 100", description: "Ligação gratuita, 24 horas. Não precisa dizer o nome." },
];

type TrustedContactsProps = {
  disque100?: HelpChannelOutputDto;
};

export function TrustedContacts({ disque100 }: TrustedContactsProps) {
  return (
    <section aria-labelledby="telling-heading" className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 md:gap-7 md:px-12 md:py-18">
      <h2 id="telling-heading" className="text-[21px] leading-7 font-semibold md:text-[34px] md:leading-[42px]">
        Para quem você pode contar
      </h2>
      <ul className="grid gap-3 md:grid-cols-3 md:gap-6">
        {CONTACTS.map((contact) => (
          <li key={contact.title} className="flex gap-3.5 rounded-card border border-line p-4.5 md:flex-col md:gap-3 md:p-7">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-soft text-primary">
              <Icon name={contact.icon} size={22} />
            </span>
            <span className="flex flex-col gap-1">
              <h3 className="text-[17px] font-semibold md:text-xl">{contact.title}</h3>
              <p className="text-[15px] leading-6 md:text-base">{contact.description}</p>
            </span>
          </li>
        ))}
      </ul>
      {disque100 && <ChannelButton channel={disque100} label="Ligar para o Disque 100" variant="primary" className="md:min-h-14 md:self-start md:px-7" />}
    </section>
  );
}
