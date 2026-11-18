import { ChannelButton, type HelpChannelOutputDto } from "@/modules/help-channels";
import { Icon } from "@/shared/presentation/components/icons/icon/icon";

type WitnessBannerProps = {
  emergencyChannel?: HelpChannelOutputDto;
};

export function WitnessBanner({ emergencyChannel }: WitnessBannerProps) {
  return (
    <section aria-labelledby="emergency-heading" className="flex flex-col gap-2.5 rounded-[20px] bg-primary p-5 md:flex-row md:items-center md:gap-8 md:rounded-panel md:px-10 md:py-8">
      <span className="hidden size-14 shrink-0 items-center justify-center rounded-full bg-white text-primary md:flex">
        <Icon name="alert" size={24} />
      </span>
      <div className="flex grow flex-col gap-1">
        <h2 id="emergency-heading" className="text-[21px] font-semibold text-white md:text-[28px] md:leading-9">
          Presenciou uma agressão?
        </h2>
        <p className="text-soft md:text-lg">Ligue 190 na hora. Você não precisa se identificar.</p>
      </div>
      {emergencyChannel && <ChannelButton channel={emergencyChannel} label="Ligar 190" variant="on-dark" className="mt-1 md:mt-0 md:min-h-14 md:px-7" />}
    </section>
  );
}
