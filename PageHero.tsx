import { Link } from "react-router-dom";

type Crumb = { label: string; to?: string };

type Props = {
  eyebrow: string;
  h1: string;
  intro?: string;
  crumbs?: Crumb[];
};

export default function PageHero({ eyebrow, h1, intro, crumbs }: Props) {
  return (
    <section className="pt-32 md:pt-40 pb-12 md:pb-20">
      <div className="container-editorial">
        {crumbs && crumbs.length > 0 && (
          <nav aria-label="Naršymo kelias" className="mb-8 reveal">
            <ol className="flex flex-wrap items-center gap-2 text-[12px] text-muted-foreground">
              {crumbs.map((c, i) => (
                <li key={i} className="flex items-center gap-2">
                  {c.to ? (
                    <Link to={c.to} className="link-underline">{c.label}</Link>
                  ) : (
                    <span className="text-foreground/70">{c.label}</span>
                  )}
                  {i < crumbs.length - 1 && <span className="text-muted-foreground/60">/</span>}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <p className="eyebrow mb-4 reveal">{eyebrow}</p>
        <div className="rule mb-8 reveal" />
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-end">
          <h1 className="col-span-12 md:col-span-8 font-display text-[40px] md:text-[68px] leading-[1.04] tracking-[-0.018em] reveal">
            {h1}
          </h1>
          {intro && (
            <p className="col-span-12 md:col-span-4 text-[15px] leading-relaxed text-muted-foreground reveal">
              {intro}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
