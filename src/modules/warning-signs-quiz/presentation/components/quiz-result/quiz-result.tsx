import Link from "next/link";
import { Icon } from "@/shared/presentation/components/icons/icon/icon";

type QuizResultProps = {
  badge: string;
  title: string;
  text: string;
  onRestart: () => void;
};

export function QuizResult({ badge, title, text, onRestart }: QuizResultProps) {
  return (
    <div className="flex flex-col gap-4" role="status">
      <span className="self-start rounded-full bg-ink px-3.5 py-1.5 font-heading text-[13px] font-semibold text-white">{badge}</span>
      <h2 className="text-[26px] leading-[34px] font-bold md:text-[32px] md:leading-[42px]">{title}</h2>
      <p className="md:text-lg md:leading-7">{text}</p>
      <p className="text-sm text-muted">Este teste é uma orientação, não um diagnóstico.</p>
      <div className="flex flex-col gap-3 md:flex-row md:flex-wrap">
        <a href="tel:190" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border-[1.5px] border-primary bg-primary px-5 font-heading font-semibold text-white no-underline hover:bg-primary-dark hover:text-white">
          <Icon name="phone" size={18} />
          Ligar 190 (emergência)
        </a>
        <a href="tel:180" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border-[1.5px] border-primary px-5 font-heading font-semibold text-primary no-underline hover:bg-soft">
          <Icon name="phone" size={18} />
          Ligar 180
        </a>
        <Link href="/ajuda/" className="inline-flex min-h-12 items-center justify-center rounded-xl border-[1.5px] border-primary px-5 font-heading font-semibold text-primary no-underline hover:bg-soft">
          Ver como pedir ajuda
        </Link>
      </div>
      <button type="button" onClick={onRestart} className="min-h-11 self-center font-bold text-primary underline md:self-start">
        Refazer o teste
      </button>
    </div>
  );
}
