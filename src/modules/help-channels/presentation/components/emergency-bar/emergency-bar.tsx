import type { HelpChannelOutputDto } from "../../../application/dtos/list-help-channels/help-channel-output.dto";
import { HelpChannelLink } from "../help-channel-link/help-channel-link";

type EmergencyBarProps = {
  channels: HelpChannelOutputDto[];
};

export function EmergencyBar({ channels }: EmergencyBarProps) {
  return (
    <nav
      aria-label="Ajuda imediata"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white px-4 pt-2.5 pb-[max(1rem,env(safe-area-inset-bottom))] shadow-[0_-6px_18px_rgba(36,26,51,0.08)] md:hidden"
    >
      <p className="mb-2 font-heading text-[13px] font-semibold text-ink">Precisa de ajuda agora?</p>
      <ul className="grid grid-cols-3 gap-2">
        {channels.map((channel) => (
          <li key={channel.id}>
            <HelpChannelLink channel={channel} layout="stacked" />
          </li>
        ))}
      </ul>
    </nav>
  );
}
