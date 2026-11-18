import type { HelpChannelRepository } from "../../domain/repositories/help-channel.repository";
import type { HelpChannelOutputDto } from "../dtos/list-help-channels/help-channel-output.dto";
import type { ListHelpChannelsInputDto } from "../dtos/list-help-channels/list-help-channels-input.dto";
import { mapHelpChannelToOutputDto } from "../mappers/help-channel-to-output-dto.mapper";

export class ListHelpChannelsUseCase {
  constructor(private readonly repository: HelpChannelRepository) {}

  async execute(input: ListHelpChannelsInputDto = {}): Promise<HelpChannelOutputDto[]> {
    const channels = await this.repository.listAll();
    const scoped = channels.filter((channel) => {
      if (input.scope === "emergency-bar") return channel.showInEmergencyBar;
      if (input.scope === "emergency") return channel.isEmergency;
      if (input.scope === "listening") return channel.showInEmergencyBar && !channel.isEmergency;
      if (input.scope === "child-protection") return channel.protectsChildren;
      return true;
    });
    return [...scoped].sort((a, b) => a.order - b.order).map(mapHelpChannelToOutputDto);
  }
}
