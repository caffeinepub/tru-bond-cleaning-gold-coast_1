import { useEffect } from "react";

interface MetaTags {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  ogUrl?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonical?: string;
}

function setOrCreateMeta(selector: string, attribute: string, value: string) {
  let el = document.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    const [attr, attrVal] = attribute.split("=");
    el.setAttribute(attr, attrVal);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
}

function setOrCreateLink(rel: string, href: string) {
  let el = document.querySelector(
    `link[rel="${rel}"]`,
  ) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function useMetaTags(tags: MetaTags) {
  useEffect(() => {
    const prev = document.title;

    if (tags.title) document.title = tags.title;
    if (tags.description)
      setOrCreateMeta(
        'meta[name="description"]',
        "name=description",
        tags.description,
      );
    if (tags.keywords)
      setOrCreateMeta('meta[name="keywords"]', "name=keywords", tags.keywords);

    if (tags.ogTitle)
      setOrCreateMeta(
        'meta[property="og:title"]',
        "property=og:title",
        tags.ogTitle,
      );
    if (tags.ogDescription)
      setOrCreateMeta(
        'meta[property="og:description"]',
        "property=og:description",
        tags.ogDescription,
      );
    if (tags.ogImage)
      setOrCreateMeta(
        'meta[property="og:image"]',
        "property=og:image",
        tags.ogImage,
      );
    if (tags.ogType)
      setOrCreateMeta(
        'meta[property="og:type"]',
        "property=og:type",
        tags.ogType,
      );
    if (tags.ogUrl)
      setOrCreateMeta('meta[property="og:url"]', "property=og:url", tags.ogUrl);

    if (tags.twitterCard)
      setOrCreateMeta(
        'meta[name="twitter:card"]',
        "name=twitter:card",
        tags.twitterCard,
      );
    if (tags.twitterTitle)
      setOrCreateMeta(
        'meta[name="twitter:title"]',
        "name=twitter:title",
        tags.twitterTitle,
      );
    if (tags.twitterDescription)
      setOrCreateMeta(
        'meta[name="twitter:description"]',
        "name=twitter:description",
        tags.twitterDescription,
      );
    if (tags.twitterImage)
      setOrCreateMeta(
        'meta[name="twitter:image"]',
        "name=twitter:image",
        tags.twitterImage,
      );

    if (tags.canonical) setOrCreateLink("canonical", tags.canonical);

    return () => {
      if (tags.title) document.title = prev;
    };
  }, [
    tags.title,
    tags.description,
    tags.keywords,
    tags.ogTitle,
    tags.ogDescription,
    tags.ogImage,
    tags.ogType,
    tags.ogUrl,
    tags.twitterCard,
    tags.twitterTitle,
    tags.twitterDescription,
    tags.twitterImage,
    tags.canonical,
  ]);
}
