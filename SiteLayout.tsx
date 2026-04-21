import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

export default function SiteLayout() {
  const ref = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  // Re-run reveal observer on every route change so newly mounted
  // .reveal elements become visible without requiring a refresh.
  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    // Reset previously revealed elements so the observer can re-evaluate.
    const els = root.querySelectorAll<HTMLElement>(".reveal");
    if (els.length === 0) return;

    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 }
    );

    // Observe on next frame so layout is settled after route swap.
    const raf = requestAnimationFrame(() => {
      els.forEach((el) => {
        if (!el.classList.contains("in")) io.observe(el);
      });
      // Safety net: anything already in viewport gets revealed immediately.
      els.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add("in");
          io.unobserve(el);
        }
      });
    });

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [pathname]);

  return (
    <div ref={ref} className="min-h-screen bg-background text-foreground flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
