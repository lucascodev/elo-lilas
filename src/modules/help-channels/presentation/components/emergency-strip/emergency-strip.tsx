import type { HelpChannelOutputDto } from "../../../application/dtos/list-help-channels/help-channel-output.dto";
import { HelpChannelLink } from "../help-channel-link/help-channel-link";

type EmergencyStripProps = {
  channels: HelpChannelOutputDto[];
};

export function EmergencyStrip({ channels }: EmergencyStripProps) {
  return (
    <nav aria-label="Ajuda imediata" className="hidden bg-soft md:block">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-6 lg:px-12">
        <p className="grow font-heading text-sm font-semibold text-ink">Precisa de ajuda agora?</p>
        <ul className="flex gap-2">
          {channels.map((channel) => (
            <li key={channel.id}>
              <HelpChannelLink channel={channel} layout="inline" />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
