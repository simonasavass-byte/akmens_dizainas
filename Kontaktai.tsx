import { useState } from "react";
import SEO from "@/components/SEO";
import PageHero from "@/components/site/PageHero";
import { services } from "@/lib/services";

export default function Kontaktai() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <SEO
        title="Kontaktai: studija Vilniuje ir Elektrėnuose | Akmens Darbai"
        description="Susisiekite dėl konsultacijos ar sąmatos. Studijos Vilniuje (Kalvarijų g. 125) ir Elektrėnuose (Rungos g. 18). Atsakome per vieną darbo dieną."
      />
      <PageHero
        eyebrow="Kontaktai"
        h1="Susisiekime."
        intro="Parašykite trumpą žinutę arba paskambinkite. Atsakome per vieną darbo dieną. Konsultacija ir preliminari sąmata — be mokesčio."
        crumbs={[{ label: "Pradžia", to: "/" }, { label: "Kontaktai" }]}
      />

      <section className="pb-24 md:pb-32">
        <div className="container-editorial">
          <div className="grid grid-cols-12 gap-6 md:gap-10">
            <div className="col-span-12 md:col-span-5">
              <dl className="space-y-8 text-[14px]">
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Vilnius</dt>
                  <dd className="mt-2 font-display text-xl">Studija ir ekspozicija</dd>
                  <dd className="text-muted-foreground mt-1">Kalvarijų g. 125, Vilnius</dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Elektrėnai</dt>
                  <dd className="mt-2 font-display text-xl">Dirbtuvės</dd>
                  <dd className="text-muted-foreground mt-1">Rungos g. 18, Elektrėnai</dd>
                </div>
                <div className="pt-4 border-t border-border space-y-1">
                  <a href="tel:+37060000000" className="block link-underline">+370 600 00 000</a>
                  <a href="mailto:info@akmensdarbai.lt" className="block link-underline">info@akmensdarbai.lt</a>
                  <p className="text-muted-foreground text-[13px] mt-2">I–V 9:00–18:00 · VI 10:00–14:00</p>
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-2">Aptarnavimo zona</p>
                  <p className="text-muted-foreground">
                    Vilnius, Elektrėnai ir aplinkiniai rajonai. Kitus Lietuvos miestus aptariame individualiai.
                  </p>
                </div>
              </dl>
            </div>

            <div className="col-span-12 md:col-span-6 md:col-start-7">
              {sent ? (
                <div className="border border-border p-10">
                  <p className="eyebrow mb-4">Ačiū</p>
                  <p className="font-display text-3xl">Žinutė gauta.</p>
                  <p className="mt-3 text-muted-foreground">
                    Susisieksime per vieną darbo dieną.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-8" noValidate>
                  <Field label="Vardas" name="name" required />
                  <Field label="Telefonas arba el. paštas" name="contact" required />
                  <Field
                    label="Paslauga"
                    name="service"
                    as="select"
                    options={[...services.map((s) => s.nav), "Kita"]}
                  />
                  <Field label="Žinutė" name="message" as="textarea" />

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
                    <p className="text-[12px] text-muted-foreground max-w-xs">
                      Pateikdami formą sutinkate, kad susisieksime dėl jūsų užklausos.
                    </p>
                    <button
                      type="submit"
                      className="text-[12px] uppercase tracking-[0.22em] px-7 py-4 bg-foreground text-background hover:bg-accent transition-colors"
                    >
                      Prašyti sąmatos
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

type FieldProps = {
  label: string;
  name: string;
  required?: boolean;
  as?: "input" | "textarea" | "select";
  options?: string[];
};

function Field({ label, name, required, as = "input", options = [] }: FieldProps) {
  const baseCls =
    "w-full bg-transparent border-0 border-b border-border focus:border-foreground focus:ring-0 outline-none py-3 text-[15px] text-foreground placeholder:text-muted-foreground/60 transition-colors";

  return (
    <label className="block group">
      <span className="block text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-2">
        {label}
        {required && <span className="text-accent"> ·</span>}
      </span>
      {as === "textarea" ? (
        <textarea name={name} rows={4} required={required} className={baseCls} />
      ) : as === "select" ? (
        <select name={name} className={baseCls} defaultValue="">
          <option value="" disabled>Pasirinkite…</option>
          {options.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      ) : (
        <input name={name} type="text" required={required} className={baseCls} />
      )}
    </label>
  );
}
