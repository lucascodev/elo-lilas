import Link from "next/link";
import { Eyebrow } from "../../content/eyebrow/eyebrow";
import { Icon } from "../../icons/icon/icon";
import type { NavigationCrumb } from "./navigation-crumb.type";

type RelatedLinksProps = {
  links: Required<NavigationCrumb>[];
};

export function RelatedLinks({ links }: RelatedLinksProps) {
  return (
    <nav aria-label="Veja também" className="rounded-card border border-line bg-white px-6 py-5">
      <Eyebrow className="mb-1.5">Veja também</Eyebrow>
      <ul>
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="flex min-h-11 items-center justify-between border-b border-line font-heading text-[15px] font-medium text-ink no-underline last:border-0 hover:text-primary"
            >
              {link.label}
              <Icon name="chevron-right" className="text-primary" />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
