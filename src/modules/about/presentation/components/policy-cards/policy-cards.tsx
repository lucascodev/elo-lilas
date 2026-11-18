import { Icon } from "@/shared/presentation/components/icons/icon/icon";
import type { IconName } from "@/shared/presentation/components/icons/icon/icon-name.type";

const POLICIES: { id: string; icon: IconName; title: string; text: string }[] = [
  {
    id: "privacy",
    icon: "lock",
    title: "Privacidade",
    text: "Este site não usa cookies de rastreamento, não pede cadastro e não guarda nada do que você lê ou responde. As fontes e imagens vêm do próprio site, sem chamadas a serviços de terceiros.",
  },
  {
    id: "accessibility",
    icon: "users",
    title: "Acessibilidade",
    text: "Feito para funcionar com leitor de tela e teclado, com contraste alto e uma fonte criada para leitura fácil. A tradução para Libras pelo VLibras está prevista.",
  },
  {
    id: "credits",
    icon: "heart",
    title: "Créditos das imagens",
    text: "Fotos do Unsplash por Filip Rankovic Grobgaard, Hannah Busing, Priscilla Du Preez, Vitaly Gariev, Jordan Whitt, Urszula Kaźmierczak e Ruan Richard Rodrigues.",
  },
];

export function PolicyCards() {
  return (
    <div className="grid gap-4 md:grid-cols-3 md:gap-6">
      {POLICIES.map((policy) => (
        <section key={policy.id} id={policy.id} aria-labelledby={`${policy.id}-heading`} className="flex scroll-mt-28 flex-col gap-3 rounded-card border border-line p-5 md:p-7">
          <span className="flex size-11 items-center justify-center rounded-full bg-soft text-primary">
            <Icon name={policy.icon} size={22} />
          </span>
          <h2 id={`${policy.id}-heading`} className="text-lg font-semibold md:text-xl">
            {policy.title}
          </h2>
          <p>{policy.text}</p>
        </section>
      ))}
    </div>
  );
}
