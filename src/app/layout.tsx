import "@fontsource/atkinson-hyperlegible/400.css";
import "@fontsource/atkinson-hyperlegible/700.css";
import "@fontsource/lexend/500.css";
import "@fontsource/lexend/600.css";
import "@fontsource/lexend/700.css";
import "./globals.css";

import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { EmergencyBar, makeListHelpChannels } from "@/modules/help-channels";
import { QuickExitShortcut } from "@/modules/quick-exit";
import { makeGetSiteSettings } from "@/modules/site-settings";
import { SiteFooter, SiteHeader } from "@/modules/site-shell";
import { CONTENT_SECURITY_POLICY } from "@/shared/presentation/constants/content-security-policy.constant";

export const metadata: Metadata = {
  title: { default: "Elo Lilás", template: "%s | Elo Lilás" },
  description: "Informação, orientação e o caminho até a rede de apoio da sua cidade.",
  referrer: "no-referrer",
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#5B2E91",
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const [settings, emergencyChannels] = await Promise.all([
    makeGetSiteSettings().execute(),
    makeListHelpChannels().execute({ scope: "emergency-bar" }),
  ]);

  return (
    <html lang="pt-BR" data-scroll-behavior="smooth">
      <head>
        <meta httpEquiv="Content-Security-Policy" content={CONTENT_SECURITY_POLICY} />
      </head>
      <body>
        <QuickExitShortcut />
        <SiteHeader siteName={settings.siteName} emergencyChannels={emergencyChannels} />
        <main id="main-content" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <SiteFooter siteName={settings.siteName} partnerName={settings.partnerName} contentReviewedAt={settings.contentReviewedAt} />
        <EmergencyBar channels={emergencyChannels} />
      </body>
    </html>
  );
}
