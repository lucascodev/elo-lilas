import Link from "next/link";
import { Logo } from "@/shared/presentation/components/brand/logo/logo";
import type { NavigationItem } from "../../view-models/navigation-item.type";

const COLUMNS: { title: string; links: NavigationItem[] }[] = [
  {
    title: "Informação",
    links: [
      { label: "Entenda a violência", href: "/entenda/" },
      { label: "Seus direitos", href: "/direitos/" },
      { label: "Perguntas frequentes", href: "/perguntas/" },
      { label: "Crianças e adolescentes", href: "/criancas-e-adolescentes/" },
    ],
  },
  {
    title: "Ajuda",
    links: [
      { label: "Como pedir ajuda", href: "/ajuda/" },
      { label: "Rede de apoio", href: "/rede-de-apoio/" },
      { label: "Plano de segurança", href: "/ajuda/plano-de-seguranca/" },
      { label: "Como ajudar alguém", href: "/como-ajudar/" },
    ],
  },
  {
    title: "Projeto",
    links: [
      { label: "Sobre", href: "/sobre/" },
      { label: "Privacidade", href: "/sobre/#privacy" },
      { label: "Acessibilidade", href: "/sobre/#accessibility" },
    ],
  },
];

type SiteFooterProps = {
  siteName: string;
  partnerName: string;
  contentReviewedAt: string;
};

export function SiteFooter({ siteName, partnerName, contentReviewedAt }: SiteFooterProps) {
  return (
    <footer className="bg-ink pb-32 md:pb-0">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-4 md:gap-12 md:px-12 md:py-16">
        <div className="flex flex-col gap-3.5">
          <p className="flex items-center gap-2.5">
            <Logo tone="dark" />
            <span className="font-heading text-xl font-bold text-white">{siteName}</span>
          </p>
          <p className="text-[15px] leading-6 text-on-dark">
            Projeto de extensão da UNIASSELVI. Instituição parceira: {partnerName}.
          </p>
          <p className="text-[13px] text-on-dark">Conteúdo revisado em {contentReviewedAt}</p>
        </div>
        {COLUMNS.map((column) => (
          <nav key={column.title} aria-label={column.title} className="flex flex-col gap-3">
            <p className="font-heading text-[15px] font-semibold text-white">{column.title}</p>
            <ul className="flex flex-col gap-3">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[15px] text-on-dark no-underline hover:text-white hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
    </footer>
  );
}
