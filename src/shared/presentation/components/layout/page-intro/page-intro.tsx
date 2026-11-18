import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Eyebrow } from "../../content/eyebrow/eyebrow";
import type { NavigationCrumb } from "../../navigation/related-links/navigation-crumb.type";
import type { PageIntroImage } from "./page-intro-image.type";
import { toPublicAssetPath } from "@/shared/utils/assets/to-public-asset-path";

type PageIntroProps = {
  crumbs: NavigationCrumb[];
  eyebrow: string;
  title: string;
  lead: string;
  image?: PageIntroImage;
  children?: ReactNode;
};

export function PageIntro({ crumbs, eyebrow, title, lead, image, children }: PageIntroProps) {
  return (
    <section className="md:bg-soft">
      <div className={`mx-auto grid max-w-7xl gap-6 px-5 pt-5 pb-6 md:items-center md:gap-16 md:px-12 md:py-14 ${image ? "md:grid-cols-2" : ""}`}>
        <div className="flex max-w-3xl flex-col gap-3 md:gap-4">
          <nav aria-label="Você está em">
            <ol className="flex flex-wrap gap-1.5 text-sm text-muted md:text-[15px]">
              <li>
                <Link href="/">Início</Link>
              </li>
              {crumbs.map((crumb) => (
                <li key={crumb.label} className="flex gap-1.5">
                  <span aria-hidden="true">/</span>
                  {crumb.href ? <Link href={crumb.href}>{crumb.label}</Link> : <span aria-current="page">{crumb.label}</span>}
                </li>
              ))}
            </ol>
          </nav>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="text-[30px] leading-[38px] font-bold tracking-tight md:text-5xl md:leading-[56px]">{title}</h1>
          <p className="md:text-[19px] md:leading-[30px]">{lead}</p>
          {children}
        </div>
        {image && (
          <Image
            src={toPublicAssetPath(image.src)}
            alt={image.alt}
            width={image.width}
            height={image.height}
            priority
            style={{ objectPosition: image.position ?? "center" }}
            className="h-44 w-full rounded-card object-cover md:h-90 md:rounded-panel"
          />
        )}
      </div>
    </section>
  );
}
