import { useEffect } from "react";

type Props = {
  title: string;
  description: string;
  canonical?: string;
};

function setMeta(name: string, content: string) {
  let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export default function SEO({ title, description, canonical }: Props) {
  useEffect(() => {
    document.title = title;
    setMeta("description", description);
    const url =
      canonical ??
      (typeof window !== "undefined" ? window.location.origin + window.location.pathname : "");
    if (url) setLink("canonical", url);
  }, [title, description, canonical]);

  return null;
}
