import "server-only";
import { ListHelpChannelsUseCase } from "../../application/use-cases/list-help-channels.use-case";
import { LocalHelpChannelRepository } from "../../infra/repositories/local-help-channel.repository";

export function makeListHelpChannels(): ListHelpChannelsUseCase {
  return new ListHelpChannelsUseCase(new LocalHelpChannelRepository());
}
