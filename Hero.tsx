import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-monument.jpg";

export default function Hero() {
  return (
    <section id="top" className="relative pt-28 md:pt-32 lg:pt-36">
      <div className="container-editorial">
        <div className="grid grid-cols-12 gap-x-6 gap-y-10 items-end">
          <div className="col-span-12 lg:col-span-7">
            <p className="eyebrow mb-6 reveal">Akmens studija · Vilnius ir Elektrėnai</p>
            <h1 className="font-display text-[44px] sm:text-[60px] md:text-[78px] lg:text-[92px] leading-[1.02] tracking-[-0.02em] text-foreground reveal">
              Granito paminklai
              <br />
              ir <span className="italic text-foreground/85">kapaviečių</span> sprendimai.
            </h1>
          </div>

          <div className="col-span-12 lg:col-span-4 lg:col-start-9 lg:pb-3">
            <div className="rule mb-6 reveal" />
            <p className="text-[15px] leading-relaxed text-muted-foreground max-w-sm reveal">
              Gaminame paminklus, dengiame kapavietes granito plokštėmis,
              graviruojame užrašus ir restauruojame seniau statytus darbus.
              Viską suderiname su Jumis — nuo pirmo eskizo iki sumontuoto
              paminklo vietoje.
            </p>
            <div className="mt-8 flex items-center gap-6 reveal">
              <Link
                to="/kontaktai"
                className="text-[12px] uppercase tracking-[0.22em] px-6 py-4 bg-foreground text-background hover:bg-foreground/90 transition-colors"
              >
                Gauti konsultaciją
              </Link>
              <Link to="/galerija" className="text-[13px] text-foreground/80 link-underline">
                Peržiūrėti darbus
              </Link>
            </div>
          </div>
        </div>

        <figure className="relative mt-14 md:mt-20 reveal">
          <div className="aspect-[16/10] md:aspect-[16/8] overflow-hidden bg-muted">
            <img
              src={heroImg}
              alt="Granitinis paminklas su širdies formos pjūviu ramioje kapinių aplinkoje"
              width={1600}
              height={1280}
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>
          <figcaption className="mt-4 flex justify-between items-end text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            <span>Paminklas iš juodo granito · individualus projektas</span>
            <span className="hidden md:inline">Vilnius · 2024</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
