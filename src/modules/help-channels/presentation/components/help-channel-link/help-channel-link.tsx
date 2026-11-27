import { toTrackEventAttributes } from "@/modules/analytics/presentation/utils/to-track-event-attributes";
import type { HelpChannelOutputDto } from "../../../application/dtos/list-help-channels/help-channel-output.dto";

type HelpChannelLinkProps = {
  channel: HelpChannelOutputDto;
  layout: "stacked" | "inline";
};

export function HelpChannelLink({ channel, layout }: HelpChannelLinkProps) {
  const trackEventAttributes = toTrackEventAttributes("canal", channel.id, `${channel.shortName} ${channel.label}`);
  const tone = channel.isEmergency
    ? "border-primary bg-primary text-white hover:bg-primary-dark hover:text-white"
    : "border-primary bg-white text-primary hover:bg-soft";

  if (layout === "stacked") {
    return (
      <a
        href={channel.href}
        {...trackEventAttributes}
        className={`flex min-h-15 flex-col items-center justify-center rounded-2xl border-[1.5px] px-1 text-center no-underline ${tone}`}
      >
        <span className="font-heading text-lg leading-6 font-semibold">{channel.shortName}</span>
        <span className="text-xs leading-4">{channel.label}</span>
      </a>
    );
  }

  return (
    <a
      href={channel.href}
      {...trackEventAttributes}
      className={`inline-flex min-h-10 items-center gap-1.5 rounded-xl border-[1.5px] px-4 font-heading text-sm font-semibold no-underline ${tone}`}
    >
      {channel.shortName} {channel.label}
    </a>
  );
}
