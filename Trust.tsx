import { Link } from "react-router-dom";
import bw from "@/assets/heritage-bw.jpg";
import modern from "@/assets/heritage-modern.jpg";

const stats = [
  { n: "20+", l: "metų patirties" },
  { n: "1200+", l: "atliktų darbų" },
  { n: "10 m.", l: "garantija granitui" },
  { n: "2", l: "studijos: Vilnius, Elektrėnai" },
];

export default function Trust() {
  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="container-editorial">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-5">
            <p className="eyebrow mb-4 reveal">Apie studiją</p>
            <div className="rule mb-8 reveal" />
            <h2 className="font-display text-[34px] md:text-[52px] leading-[1.05] tracking-[-0.015em] reveal">
              Akmens dirbtuvės nuo 2003-ųjų.
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground max-w-md reveal">
              Dirbame su granitu daugiau nei dvidešimt metų. Studija Vilniuje,
              dirbtuvės Elektrėnuose. Visus etapus — pjovimą, poliravimą,
              graviravimą ir montavimą — atliekame patys.
            </p>

            <dl className="mt-12 grid grid-cols-2 gap-y-8 gap-x-6">
              {stats.map((s) => (
                <div key={s.l} className="reveal">
                  <dt className="font-display text-3xl md:text-4xl tracking-tight">{s.n}</dt>
                  <dd className="mt-1 text-[12px] uppercase tracking-[0.18em] text-muted-foreground">
                    {s.l}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 reveal">
              <Link
                to="/kontaktai"
                className="text-[12px] uppercase tracking-[0.22em] link-underline"
              >
                Susisiekti →
              </Link>
            </div>
          </div>

          <div className="col-span-12 md:col-span-7 grid grid-cols-2 gap-4 md:gap-6">
            <figure className="reveal mt-12">
              <div className="aspect-[4/5] overflow-hidden bg-muted">
                <img
                  src={bw}
                  alt="Archyvinė nuotrauka: meistras dirba akmens dirbtuvėse"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
              <figcaption className="mt-3 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                Dirbtuvės · arch.
              </figcaption>
            </figure>
            <figure className="reveal">
              <div className="aspect-[4/5] overflow-hidden bg-muted">
                <img
                  src={modern}
                  alt="Šiuolaikinis meistras dirba su poliruoto granito plokšte"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
              <figcaption className="mt-3 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                Studija · 2024
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
