import { Link } from "react-router-dom";
import { services } from "@/lib/services";

export default function HomeServices() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-editorial">
        <div className="grid grid-cols-12 gap-x-6 mb-14 md:mb-20">
          <div className="col-span-12 md:col-span-4">
            <p className="eyebrow mb-4 reveal">Paslaugos</p>
            <div className="rule reveal" />
          </div>
          <div className="col-span-12 md:col-span-8 mt-6 md:mt-0">
            <h2 className="font-display text-[34px] md:text-[52px] leading-[1.05] tracking-[-0.015em] reveal">
              Ką darome akmens studijoje.
            </h2>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground reveal">
              Septynios paslaugos vienoje vietoje: paminklai, projektai, dangos,
              graviravimas ir restauravimas. Vilnius ir Elektrėnai.
            </p>
          </div>
        </div>

        <ul className="border-t border-border">
          {services.map((s) => (
            <li key={s.slug} className="border-b border-border reveal">
              <Link
                to={`/${s.slug}`}
                className="grid grid-cols-12 gap-4 md:gap-8 py-6 md:py-8 items-baseline group hover:bg-surface/60 transition-colors -mx-2 px-2"
              >
                <span className="col-span-2 md:col-span-1 text-[11px] tracking-[0.22em] text-muted-foreground">
                  {s.num}
                </span>
                <h3 className="col-span-10 md:col-span-4 font-display text-2xl md:text-[28px] tracking-[-0.01em]">
                  {s.title}
                </h3>
                <p className="col-span-12 md:col-span-6 text-[14.5px] leading-relaxed text-muted-foreground md:text-right md:pl-8">
                  {s.short}
                </p>
                <span className="col-span-12 md:col-span-1 md:text-right text-[12px] uppercase tracking-[0.22em] text-foreground/70 group-hover:text-foreground transition-colors">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10 reveal">
          <Link
            to="/paslaugos"
            className="text-[12px] uppercase tracking-[0.22em] px-6 py-4 border border-foreground/80 hover:bg-foreground hover:text-background transition-colors inline-block"
          >
            Visos paslaugos
          </Link>
        </div>
      </div>
    </section>
  );
}
