import { Link } from "react-router-dom";
import { services } from "@/lib/services";

export default function RelatedServices({ excludeSlug }: { excludeSlug?: string }) {
  const items = services.filter((s) => s.slug !== excludeSlug).slice(0, 3);
  return (
    <section className="py-20 md:py-28">
      <div className="container-editorial">
        <div className="flex items-end justify-between mb-10 md:mb-14">
          <div>
            <p className="eyebrow mb-4 reveal">Susijusios paslaugos</p>
            <div className="rule reveal" />
          </div>
          <Link to="/paslaugos" className="text-[12px] uppercase tracking-[0.22em] link-underline reveal">
            Visos paslaugos →
          </Link>
        </div>
        <div className="grid grid-cols-12 gap-6 md:gap-8">
          {items.map((s) => (
            <Link
              key={s.slug}
              to={`/${s.slug}`}
              className="col-span-12 md:col-span-4 group reveal"
            >
              <div className="aspect-[4/5] overflow-hidden bg-muted">
                <img
                  src={s.img}
                  alt={s.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                />
              </div>
              <div className="mt-4 flex items-baseline gap-3">
                <span className="text-[11px] tracking-[0.22em] text-muted-foreground">{s.num}</span>
                <h3 className="font-display text-xl md:text-2xl">{s.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
