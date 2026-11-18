import type { HelpChannelOutputDto } from "@/modules/help-channels";

export function indexChannelsById(channels: HelpChannelOutputDto[]): Record<string, HelpChannelOutputDto | undefined> {
  return Object.fromEntries(channels.map((channel) => [channel.id, channel]));
}
