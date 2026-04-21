import { Link } from "react-router-dom";
import materialsImg from "@/assets/materials.jpg";

const stones = [
  { name: "Juodas granitas", origin: "Absolute Black · IND" },
  { name: "Šiltas pilkas", origin: "Bohus · SWE" },
  { name: "Tamsiai raudonas", origin: "Vanga · UKR" },
  { name: "Šviesus pilkas", origin: "Kashmir White · IND" },
];

export default function Materials() {
  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="container-editorial">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-end mb-14 md:mb-16">
          <div className="col-span-12 md:col-span-5">
            <p className="eyebrow mb-4 reveal">Medžiagos</p>
            <div className="rule reveal" />
            <h2 className="mt-8 font-display text-[34px] md:text-[52px] leading-[1.05] tracking-[-0.015em] reveal">
              Akmuo, su kuriuo dirbame.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <p className="text-[15px] leading-relaxed text-muted-foreground reveal">
              Naudojame patikrintų tiekėjų granitą iš Indijos, Švedijos ir
              Ukrainos. Pavyzdžius pamatysite gyvai studijoje prieš darbų pradžią.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <figure className="col-span-12 md:col-span-7 reveal">
            <div className="aspect-[16/9] overflow-hidden bg-muted">
              <img
                src={materialsImg}
                alt="Trys granito pavyzdžiai: juodas, pilkas ir tamsiai raudonas"
                loading="lazy"
                decoding="async"
                width={1920}
                height={1080}
                className="w-full h-full object-cover"
              />
            </div>
          </figure>

          <div className="col-span-12 md:col-span-5">
            <ul className="divide-y divide-border border-y border-border">
              {stones.map((s, i) => (
                <li
                  key={s.name}
                  className="py-5 flex items-baseline justify-between gap-6 reveal"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <p className="font-display text-xl md:text-2xl">{s.name}</p>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    {s.origin}
                  </p>
                </li>
              ))}
            </ul>
            <Link
              to="/medziagos"
              className="mt-8 inline-block text-[12px] uppercase tracking-[0.22em] link-underline reveal"
            >
              Visos medžiagos →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
