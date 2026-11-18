import type { HelpChannel } from "../entities/help-channel.entity";

export interface HelpChannelRepository {
  listAll(): Promise<HelpChannel[]>;
}
