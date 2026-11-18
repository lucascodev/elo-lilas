import type { HelpChannel } from "../../domain/entities/help-channel.entity";
import type { HelpChannelRepository } from "../../domain/repositories/help-channel.repository";
import { HELP_CHANNELS_DATA } from "../data/help-channels.data";
import { mapHelpChannelRecordToEntity } from "../mappers/help-channel-record-to-entity.mapper";

export class LocalHelpChannelRepository implements HelpChannelRepository {
  async listAll(): Promise<HelpChannel[]> {
    return HELP_CHANNELS_DATA.map(mapHelpChannelRecordToEntity);
  }
}
