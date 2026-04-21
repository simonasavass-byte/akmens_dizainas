import { Link } from "react-router-dom";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";

const works = [
  { img: g1, title: "Vientisas paminklas su medžio motyvu", meta: "Vilnius · 2024", span: "md:col-span-5" },
  { img: g2, title: "Šeimos paminklas, dvigubas", meta: "Elektrėnai · 2024", span: "md:col-span-7" },
  { img: g3, title: "Minimalus horizontalus sprendimas", meta: "Vilnius · 2023", span: "md:col-span-7" },
  { img: g4, title: "Klasikinis kryžius su pilna danga", meta: "Trakų r. · 2023", span: "md:col-span-5" },
];

export default function Gallery() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-editorial">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-16">
          <div>
            <p className="eyebrow mb-4 reveal">Pasirinkti darbai</p>
            <div className="rule mb-8 reveal" />
            <h2 className="font-display text-[34px] md:text-[52px] leading-[1.05] tracking-[-0.015em] reveal">
              Pastarųjų metų darbai.
            </h2>
          </div>
          <p className="max-w-md text-[15px] leading-relaxed text-muted-foreground reveal">
            Keli darbai iš Vilniaus ir Elektrėnų. Pilną archyvą parodome studijoje
            arba atsiunčiame el. paštu.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6 md:gap-8">
          {works.map((w, i) => (
            <figure
              key={i}
              className={`col-span-12 ${w.span} reveal ${i % 2 === 1 ? "md:mt-16" : ""}`}
            >
              <div className="aspect-[4/5] md:aspect-[5/6] overflow-hidden bg-muted">
                <img
                  src={w.img}
                  alt={w.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
              <figcaption className="mt-4 flex items-baseline justify-between gap-4">
                <p className="font-display text-lg md:text-xl">{w.title}</p>
                <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground whitespace-nowrap">
                  {w.meta}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-14 flex justify-center reveal">
          <Link
            to="/galerija"
            className="text-[12px] uppercase tracking-[0.22em] px-6 py-4 border border-foreground/80 hover:bg-foreground hover:text-background transition-colors"
          >
            Visi darbai
          </Link>
        </div>
      </div>
    </section>
  );
}
