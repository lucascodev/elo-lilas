import { toTrackEventAttributes } from "@/modules/analytics/presentation/utils/to-track-event-attributes";
import { ShortcutCard } from "./components/shortcut-card/shortcut-card";

export function HomeShortcuts() {
  return (
    <section aria-label="Atalhos" className="mx-auto max-w-7xl px-5 pb-8 md:px-12 md:pb-22">
      <ul className="grid gap-3 md:grid-cols-3 md:gap-6">
        <li>
          <ShortcutCard
            href="tel:190"
            icon="phone"
            title="Estou em perigo agora"
            description="Ligue 190. A Polícia Militar atende 24 horas, todos os dias."
            highlighted
            trackEventAttributes={toTrackEventAttributes("canal", "military-police", "190 Emergência")}
          />
        </li>
        <li>
          <ShortcutCard href="/entenda/" icon="book" title="Quero entender o que estou vivendo" description="Formas de violência, o ciclo da violência e sinais de alerta." />
        </li>
        <li>
          <ShortcutCard href="/como-ajudar/" icon="heart" title="Quero ajudar alguém" description="Como agir sem colocar a pessoa em risco." />
        </li>
      </ul>
    </section>
  );
}
