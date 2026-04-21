import { Link } from "react-router-dom";

type Props = {
  title?: string;
  text?: string;
};

export default function CtaBlock({
  title = "Pasikalbėkime apie jūsų darbą",
  text = "Atsakome per vieną darbo dieną. Konsultacija ir preliminari sąmata — be mokesčio.",
}: Props) {
  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="container-editorial">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-end">
          <div className="col-span-12 md:col-span-7">
            <p className="eyebrow mb-4 reveal">Susisiekti</p>
            <div className="rule mb-6 reveal" />
            <h2 className="font-display text-[32px] md:text-[48px] leading-[1.05] tracking-[-0.015em] reveal">
              {title}
            </h2>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground reveal">
              {text}
            </p>
          </div>
          <div className="col-span-12 md:col-span-5 flex flex-wrap items-center gap-5 md:justify-end reveal">
            <Link
              to="/kontaktai"
              className="text-[12px] uppercase tracking-[0.22em] px-6 py-4 bg-foreground text-background hover:bg-foreground/90 transition-colors"
            >
              Prašyti sąmatos
            </Link>
            <a href="tel:+37060000000" className="text-[13px] link-underline">
              +370 600 00 000
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
