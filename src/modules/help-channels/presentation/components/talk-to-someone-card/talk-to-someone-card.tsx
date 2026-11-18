import { Icon } from "@/shared/presentation/components/icons/icon/icon";
import type { HelpChannelOutputDto } from "../../../application/dtos/list-help-channels/help-channel-output.dto";
import { ChannelButton } from "../channel-button/channel-button";

type TalkToSomeoneCardProps = {
  channels: HelpChannelOutputDto[];
};

export function TalkToSomeoneCard({ channels }: TalkToSomeoneCardProps) {
  return (
    <section aria-labelledby="talking-heading" className="flex flex-col gap-3 rounded-card bg-ink p-6">
      <span className="flex size-11 items-center justify-center rounded-full bg-white text-primary">
        <Icon name="chat" size={22} />
      </span>
      <h2 id="talking-heading" className="text-[17px] font-semibold text-white">
        Precisa conversar?
      </h2>
      <p className="text-[15px] leading-6 text-on-dark">A Central 180 orienta e recebe denúncias, 24 horas, de forma sigilosa.</p>
      {channels.map((channel) => (
        <ChannelButton key={channel.id} channel={channel} label={`${channel.shortName === "180" ? "Ligar 180" : `${channel.shortName} ${channel.label}`}`} variant="on-dark" />
      ))}
    </section>
  );
}
