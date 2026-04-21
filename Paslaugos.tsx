import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import PageHero from "@/components/site/PageHero";
import CtaBlock from "@/components/site/CtaBlock";
import { services } from "@/lib/services";

export default function Paslaugos() {
  return (
    <>
      <SEO
        title="Paslaugos: paminklai, dengimas, restauravimas | Akmens Darbai"
        description="Septynios akmens studijos paslaugos: paminklų gamyba, kapaviečių projektavimas, dengimas plokštėmis, restauravimas, graviravimas, autoriniai sprendimai ir didmena."
      />
      <PageHero
        eyebrow="Paslaugos"
        h1="Visos akmens darbų paslaugos."
        intro="Nuo vieno paminklo iki pilnai sutvarkytos kapavietės. Pasirinkite paslaugą — pamatysite, ką ji apima ir kada ji aktuali."
        crumbs={[{ label: "Pradžia", to: "/" }, { label: "Paslaugos" }]}
      />

      <section className="pb-24 md:pb-32">
        <div className="container-editorial">
          <div className="grid grid-cols-12 gap-6 md:gap-8">
            {services.map((s, i) => {
              const span = i % 3 === 0 ? "md:col-span-7" : i % 3 === 1 ? "md:col-span-5" : "md:col-span-6";
              const offset = i % 3 === 1 ? "md:mt-10" : i % 3 === 2 ? "md:mt-16" : "";
              return (
                <article key={s.slug} className={`col-span-12 ${span} ${offset} reveal group`}>
                  <Link to={`/${s.slug}`} className="block">
                    <div className="relative overflow-hidden bg-muted aspect-[4/5]">
                      <img
                        src={s.img}
                        alt={s.alt}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="mt-5 flex items-baseline gap-4">
                      <span className="text-[11px] tracking-[0.22em] text-muted-foreground">{s.num}</span>
                      <h2 className="font-display text-2xl md:text-[28px] tracking-[-0.01em]">{s.title}</h2>
                    </div>
                    <p className="mt-3 text-[14.5px] leading-relaxed text-muted-foreground max-w-md">
                      {s.short}
                    </p>
                    <span className="mt-4 inline-block text-[12px] uppercase tracking-[0.22em] text-foreground/80 link-underline">
                      Skaityti plačiau →
                    </span>
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBlock />
    </>
  );
}
