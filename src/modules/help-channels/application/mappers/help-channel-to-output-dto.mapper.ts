import type { HelpChannel } from "../../domain/entities/help-channel.entity";
import type { HelpChannelOutputDto } from "../dtos/list-help-channels/help-channel-output.dto";

function buildHref(channel: HelpChannel): string {
  if (channel.contactKind === "phone") return `tel:${channel.contactValue}`;
  if (channel.contactKind === "whatsapp") return `https://wa.me/${channel.contactValue}`;
  return `mailto:${channel.contactValue}`;
}

export function mapHelpChannelToOutputDto(channel: HelpChannel): HelpChannelOutputDto {
  return {
    id: channel.id,
    shortName: channel.shortName,
    label: channel.label,
    description: channel.description,
    href: buildHref(channel),
    isEmergency: channel.isEmergency,
    showInEmergencyBar: channel.showInEmergencyBar,
  };
}
