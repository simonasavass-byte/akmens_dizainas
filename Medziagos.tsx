import SEO from "@/components/SEO";
import PageHero from "@/components/site/PageHero";
import CtaBlock from "@/components/site/CtaBlock";
import materialsImg from "@/assets/materials.jpg";

const stones = [
  { name: "Juodas granitas", origin: "Absolute Black · IND", note: "Gilus, vientisas tonas. Geriausiai tinka klasikiniams paminklams." },
  { name: "Šiltas pilkas", origin: "Bohus · SWE", note: "Subtili tekstūra, šiltas atspalvis. Tinka šviesesnėms kompozicijoms." },
  { name: "Tamsiai raudonas", origin: "Vanga · UKR", note: "Sodri kristalinė struktūra, ramus blizgesys." },
  { name: "Šviesus pilkas", origin: "Kashmir White · IND", note: "Lengvas, šviesus paviršius. Tinka dangoms ir minimalistiniams sprendimams." },
];

export default function Medziagos() {
  return (
    <>
      <SEO
        title="Granitas paminklams: medžiagų biblioteka | Akmens Darbai"
        description="Dirbame su patikrinto granito atmainomis. Juodas, pilkas, raudonas — kiekvieną akmenį matome prieš pradėdami darbą."
      />
      <PageHero
        eyebrow="Medžiagos"
        h1="Granitas paminklams ir dangoms."
        intro="Dirbame su patikrintų tiekėjų granitu iš Indijos, Švedijos ir Ukrainos. Žemiau — pagrindinės atmainos, kurias dažniausiai siūlome."
        crumbs={[{ label: "Pradžia", to: "/" }, { label: "Medžiagos" }]}
      />

      <section className="pb-20 md:pb-28">
        <div className="container-editorial">
          <figure className="reveal mb-16 md:mb-20">
            <div className="aspect-[16/8] overflow-hidden bg-muted">
              <img
                src={materialsImg}
                alt="Granito pavyzdžiai: juodas, pilkas, tamsiai raudonas"
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
          </figure>

          <ul className="divide-y divide-border border-y border-border">
            {stones.map((s, i) => (
              <li
                key={s.name}
                className="py-8 grid grid-cols-12 gap-6 items-baseline reveal"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="col-span-12 md:col-span-5">
                  <p className="font-display text-2xl md:text-3xl">{s.name}</p>
                </div>
                <div className="col-span-6 md:col-span-3">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                    {s.origin}
                  </p>
                </div>
                <p className="col-span-12 md:col-span-4 text-[14px] text-muted-foreground leading-relaxed">
                  {s.note}
                </p>
              </li>
            ))}
          </ul>

          <p className="mt-10 max-w-2xl text-[14px] text-muted-foreground reveal">
            Asortimentas platesnis nei sąrašas. Į studiją Vilniuje arba Elektrėnuose galite
            užsukti pamatyti pavyzdžių gyvai — paskambinkite ir suderinkime laiką.
          </p>
        </div>
      </section>

      <CtaBlock title="Norite pamatyti pavyzdžius gyvai?" text="Atvykite į studiją arba paprašykite, kad atsiųstume nuotraukas pagal jūsų idėją." />
    </>
  );
}
