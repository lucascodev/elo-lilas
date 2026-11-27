import { toTrackEventAttributes } from "@/modules/analytics/presentation/utils/to-track-event-attributes";
import { Icon } from "@/shared/presentation/components/icons/icon/icon";
import type { HelpChannelOutputDto } from "../../../application/dtos/list-help-channels/help-channel-output.dto";

type ChannelButtonProps = {
  channel: HelpChannelOutputDto;
  label: string;
  variant?: "primary" | "outline" | "on-dark";
  className?: string;
};

const VARIANTS = {
  primary: "border-primary bg-primary text-white hover:bg-primary-dark hover:text-white",
  outline: "border-primary bg-white text-primary hover:bg-soft",
  "on-dark": "border-white bg-white text-primary hover:bg-soft",
};

export function ChannelButton({ channel, label, variant = "outline", className = "" }: ChannelButtonProps) {
  return (
    <a
      href={channel.href}
      {...toTrackEventAttributes("canal", channel.id, `${channel.shortName} ${channel.label}`)}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border-[1.5px] px-5 font-heading text-[15px] font-semibold no-underline ${VARIANTS[variant]} ${className}`}
    >
      {channel.href.startsWith("tel:") && <Icon name="phone" size={18} />}
      {label}
    </a>
  );
}
