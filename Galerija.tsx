import SEO from "@/components/SEO";
import PageHero from "@/components/site/PageHero";
import CtaBlock from "@/components/site/CtaBlock";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import paminklai from "@/assets/service-paminklai.jpg";
import dengimas from "@/assets/service-dengimas.jpg";
import restauravimas from "@/assets/service-restauravimas.jpg";
import autoriniai from "@/assets/service-autoriniai.jpg";

const works = [
  { img: g1, title: "Vientisas paminklas su medžio motyvu", meta: "Vilnius · 2024" },
  { img: g2, title: "Šeimos paminklas, dvigubas", meta: "Elektrėnai · 2024" },
  { img: paminklai, title: "Klasikinis kryžius", meta: "Vilnius · 2024" },
  { img: g3, title: "Minimalus horizontalus sprendimas", meta: "Vilnius · 2023" },
  { img: dengimas, title: "Pilna kapavietės danga", meta: "Trakų r. · 2023" },
  { img: g4, title: "Klasikinis kryžius su pilna danga", meta: "Trakų r. · 2023" },
  { img: autoriniai, title: "Autorinis skulptūrinis paminklas", meta: "Vilnius · 2023" },
  { img: restauravimas, title: "Restauruota angelo skulptūra", meta: "Elektrėnai · 2022" },
];

export default function Galerija() {
  return (
    <>
      <SEO
        title="Darbų galerija | Akmens Darbai · Vilnius, Elektrėnai"
        description="Atrinkti pastarųjų metų darbai: paminklai, dangos, restauracijos ir autoriniai sprendimai Vilniuje, Elektrėnuose ir visoje Lietuvoje."
      />
      <PageHero
        eyebrow="Darbai"
        h1="Mūsų darbai Vilniuje ir Elektrėnuose."
        intro="Pasirinkti pastarųjų metų paminklai, dangos ir restauracijos. Pilną archyvą parodome studijoje arba atsiunčiame el. paštu."
        crumbs={[{ label: "Pradžia", to: "/" }, { label: "Darbai" }]}
      />

      <section className="pb-24 md:pb-32">
        <div className="container-editorial">
          <div className="grid grid-cols-12 gap-6 md:gap-8">
            {works.map((w, i) => {
              const span = i % 3 === 0 ? "md:col-span-7" : i % 3 === 1 ? "md:col-span-5" : "md:col-span-6";
              const offset = i % 4 === 1 ? "md:mt-12" : i % 4 === 3 ? "md:mt-20" : "";
              return (
                <figure key={i} className={`col-span-12 ${span} ${offset} reveal`}>
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
              );
            })}
          </div>
        </div>
      </section>

      <CtaBlock title="Patiko kažkuris darbas?" text="Parašykite — pasidalinsime panašiais sprendimais ir kainos diapazonu." />
    </>
  );
}
