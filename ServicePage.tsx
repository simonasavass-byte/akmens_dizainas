import { useParams, Navigate, Link } from "react-router-dom";
import SEO from "@/components/SEO";
import PageHero from "@/components/site/PageHero";
import CtaBlock from "@/components/site/CtaBlock";
import RelatedServices from "@/components/site/RelatedServices";
import { getService } from "@/lib/services";

export default function ServicePage() {
  const { slug } = useParams();
  const service = slug ? getService(slug) : undefined;

  if (!service) return <Navigate to="/paslaugos" replace />;

  return (
    <>
      <SEO title={service.metaTitle} description={service.metaDescription} />

      <PageHero
        eyebrow={`Paslauga · ${service.num}`}
        h1={service.h1}
        intro={service.intro}
        crumbs={[
          { label: "Pradžia", to: "/" },
          { label: "Paslaugos", to: "/paslaugos" },
          { label: service.nav },
        ]}
      />

      {/* Lead image */}
      <section className="pb-10 md:pb-14">
        <div className="container-editorial">
          <figure className="reveal">
            <div className="aspect-[16/9] md:aspect-[16/8] overflow-hidden bg-muted">
              <img
                src={service.img}
                alt={service.alt}
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
          </figure>

          {/* Per-service distinguishing line */}
          <p className="mt-8 md:mt-10 max-w-3xl font-display text-[22px] md:text-[30px] leading-[1.2] tracking-[-0.01em] text-foreground/85 reveal">
            <span className="text-accent mr-2">—</span>
            {service.accent}
          </p>
        </div>
      </section>

      {/* Scope strip — per-service distinguishing facts */}
      <section className="pb-16 md:pb-24">
        <div className="container-editorial">
          <dl className="grid grid-cols-1 md:grid-cols-3 border-y border-border divide-y md:divide-y-0 md:divide-x divide-border">
            {service.scope.map((s) => (
              <div key={s.label} className="py-5 md:py-6 md:px-8 first:md:pl-0 reveal">
                <dt className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                  {s.label}
                </dt>
                <dd className="mt-2 font-display text-xl md:text-2xl tracking-[-0.01em]">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Includes + when relevant */}
      <section className="pb-20 md:pb-28">
        <div className="container-editorial">
          <div className="grid grid-cols-12 gap-8 md:gap-16">
            <div className="col-span-12 md:col-span-6">
              <p className="eyebrow mb-4 reveal">Ką apima</p>
              <div className="rule mb-8 reveal" />
              <ul className="divide-y divide-border border-y border-border">
                {service.includes.map((item, i) => (
                  <li
                    key={i}
                    className="py-4 flex items-baseline gap-4 reveal"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    <span className="text-[11px] tracking-[0.22em] text-muted-foreground w-8">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[15px] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-12 md:col-span-6">
              <p className="eyebrow mb-4 reveal">Kada aktualu</p>
              <div className="rule mb-8 reveal" />
              <ul className="space-y-5">
                {service.whenRelevant.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-baseline gap-4 reveal"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    <span className="text-accent text-lg leading-none">·</span>
                    <span className="text-[15px] leading-relaxed text-muted-foreground">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 p-6 border border-border bg-surface reveal">
                <p className="text-[13px] text-muted-foreground">
                  Dirbame Vilniuje, Elektrėnuose ir aplinkiniuose rajonuose. Kitus
                  miestus aptariame individualiai.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28 bg-foreground text-background">
        <div className="container-editorial">
          <div className="grid grid-cols-12 gap-6 md:gap-10">
            <div className="col-span-12 md:col-span-4">
              <p className="eyebrow mb-4 reveal !text-background/60">Kaip dirbame</p>
              <div className="rule mb-6 reveal !bg-background/40" />
              <h2 className="font-display text-[30px] md:text-[44px] leading-[1.05] tracking-[-0.015em] reveal">
                Aiškūs žingsniai, be paskubos.
              </h2>
            </div>
            <ol className="col-span-12 md:col-span-7 md:col-start-6">
              {service.process.map((p, i) => (
                <li
                  key={i}
                  className={`grid grid-cols-12 gap-4 py-7 md:py-8 reveal ${
                    i !== service.process.length - 1 ? "border-b border-background/20" : ""
                  }`}
                >
                  <span className="col-span-2 font-display text-2xl md:text-3xl text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="col-span-10">
                    <h3 className="font-display text-xl md:text-2xl">{p.step}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-background/75 max-w-lg">
                      {p.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="mt-12 reveal">
            <Link
              to="/kontaktai"
              className="text-[12px] uppercase tracking-[0.22em] px-6 py-4 bg-background text-foreground hover:bg-accent hover:text-background transition-colors"
            >
              Aptarti darbą
            </Link>
          </div>
        </div>
      </section>

      <RelatedServices excludeSlug={service.slug} />
      <CtaBlock />
    </>
  );
}
