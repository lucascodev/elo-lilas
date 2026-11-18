import Link from "next/link";
import { EmergencyStrip, type HelpChannelOutputDto } from "@/modules/help-channels";
import { QuickExitButton } from "@/modules/quick-exit";
import { Logo } from "@/shared/presentation/components/brand/logo/logo";
import { MainNav } from "./components/main-nav/main-nav";
import { MobileMenu } from "./components/mobile-menu/mobile-menu";
import { SkipLink } from "./components/skip-link/skip-link";

type SiteHeaderProps = {
  siteName: string;
  emergencyChannels: HelpChannelOutputDto[];
};

export function SiteHeader({ siteName, emergencyChannels }: SiteHeaderProps) {
  return (
    <>
      <SkipLink />
      <header className="sticky top-0 z-40 border-b border-line bg-white">
        <div className="mx-auto flex h-17 max-w-7xl items-center gap-2 pr-3 pl-4 md:h-21 md:gap-10 md:px-12">
          <Link href="/" aria-label={`${siteName}, página inicial`} className="flex grow items-center gap-2 no-underline lg:grow-0">
            <Logo />
            <span className="font-heading text-[19px] font-bold text-ink md:text-[22px]">{siteName}</span>
          </Link>
          <MainNav />
          <QuickExitButton showShortcutHint />
          <MobileMenu />
        </div>
      </header>
      <EmergencyStrip channels={emergencyChannels} />
    </>
  );
}
