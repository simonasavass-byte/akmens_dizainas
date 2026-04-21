import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { services } from "@/lib/services";

const links = [
  { to: "/paslaugos", label: "Paslaugos", hasMenu: true },
  { to: "/medziagos", label: "Medžiagos" },
  { to: "/galerija", label: "Darbai" },
  { to: "/kontaktai", label: "Kontaktai" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || pathname !== "/"
          ? "bg-background/85 backdrop-blur-md border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="container-editorial flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-baseline gap-2 group" aria-label="Akmens Darbai — pradžia">
          <span className="font-display text-2xl md:text-[28px] leading-none tracking-tight">
            Akmens<span className="text-accent">·</span>Darbai
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Pagrindinė navigacija">
          {links.map((l) =>
            l.hasMenu ? (
              <div
                key={l.to}
                className="relative"
                onMouseEnter={() => setMenuOpen(true)}
                onMouseLeave={() => setMenuOpen(false)}
              >
                <NavLink
                  to={l.to}
                  className={({ isActive }) =>
                    `text-[13px] tracking-wide hover:text-foreground link-underline inline-flex items-center gap-1.5 ${
                      isActive ? "text-foreground" : "text-foreground/80"
                    }`
                  }
                  aria-haspopup="true"
                  aria-expanded={menuOpen}
                >
                  {l.label}
                  <span aria-hidden className={`text-[9px] transition-transform duration-200 ${menuOpen ? "rotate-180" : ""}`}>▾</span>
                </NavLink>
                <div
                  className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 transition-all duration-200 ${
                    menuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-1"
                  }`}
                >
                  <div className="w-[420px] bg-background/95 backdrop-blur-md border border-border/70 shadow-[0_8px_30px_-12px_hsl(var(--foreground)/0.12)] py-2">
                    <ul className="grid grid-cols-1">
                      {services.map((s) => (
                        <li key={s.slug}>
                          <Link
                            to={`/${s.slug}`}
                            className="flex items-baseline justify-between gap-4 px-5 py-2.5 hover:bg-muted/50 transition-colors group"
                          >
                            <span className="text-[13.5px] text-foreground/90 group-hover:text-foreground">
                              {s.nav}
                            </span>
                            <span className="text-[10px] tracking-[0.18em] text-muted-foreground/70">
                              {s.num}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <div className="border-t border-border/60 mt-1">
                      <Link
                        to="/paslaugos"
                        className="block px-5 py-2.5 text-[11px] uppercase tracking-[0.22em] text-foreground/80 hover:text-foreground hover:bg-muted/50 transition-colors"
                      >
                        Visos paslaugos →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `text-[13px] tracking-wide hover:text-foreground link-underline ${
                    isActive ? "text-foreground" : "text-foreground/80"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-6">
          <a href="tel:+37060000000" className="text-[13px] text-muted-foreground hover:text-foreground transition-colors">
            +370 600 00 000
          </a>
          <Link
            to="/kontaktai"
            className="text-[12px] uppercase tracking-[0.2em] px-5 py-3 border border-foreground/80 hover:bg-foreground hover:text-background transition-colors"
          >
            Gauti konsultaciją
          </Link>
        </div>

        <button
          className="lg:hidden p-2 -mr-2"
          aria-label="Atidaryti meniu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span className="sr-only">Meniu</span>
          <div className="w-6 h-px bg-foreground mb-1.5" />
          <div className={`w-6 h-px bg-foreground transition-all ${open ? "opacity-0" : ""}`} />
          <div className="w-6 h-px bg-foreground mt-1.5" />
        </button>
      </div>

      {/* Mobile panel */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height] duration-500 bg-background border-b border-border ${
          open ? "max-h-[90vh]" : "max-h-0"
        }`}
      >
        <nav className="container-editorial py-6 flex flex-col gap-3" aria-label="Mobili navigacija">
          <Link to="/paslaugos" className="font-display text-2xl text-foreground">Paslaugos</Link>
          <ul className="pl-4 border-l border-border space-y-2 mb-2">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to={`/${s.slug}`} className="text-[14px] text-muted-foreground">
                  {s.nav}
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/medziagos" className="font-display text-2xl text-foreground">Medžiagos</Link>
          <Link to="/galerija" className="font-display text-2xl text-foreground">Darbai</Link>
          <Link to="/kontaktai" className="font-display text-2xl text-foreground">Kontaktai</Link>
          <Link
            to="/kontaktai"
            className="mt-4 text-[12px] uppercase tracking-[0.2em] px-5 py-3 border border-foreground text-center"
          >
            Gauti konsultaciją
          </Link>
        </nav>
      </div>
    </header>
  );
}
