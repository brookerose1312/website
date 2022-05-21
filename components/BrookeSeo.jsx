import React from "react";
import { DefaultSeo } from "next-seo";

export default function BrookeSeo() {
  return (
    <DefaultSeo
      titleTemplate="%s | Brooke Rose Baer -- Web Developer"
      additionalMetaTags={[
        {
          property: "og:url",
          content: "http://brookero.se/",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:title",
          content: "Home | Brooke Rose Baer -- Web Developer",
        },
        {
          property: "og:description",
          content:
          "Brooke Rose Baer's Personal Website. Brooke is a web developer, trans woman, and humanist who graduated from RPI with a B.S. in ITWS. Learn more about zir here!",
        },
        {
          property: "og:image",
          content: "http://brookero.se/brooke-logo.png",
        },
        {
          property: "twitter:card",
          content: "summary_large_image",
        },
        {
          property: "twitter:domain",
          content: "brookero.se",
        },
        {
          property: "twitter:url",
          content: "http://brookero.se/",
        },
        {
          property: "twitter:title",
          content: "Home | Brooke Rose Baer -- Web Developer",
        },
        {
          property: "twitter:description",
          content:
          "Brooke Rose Baer's Personal Website. Brooke is a web developer, trans woman, and humanist who graduated from RPI with a B.S. in ITWS. Learn more about zir here!",
        },
        {
          property: "twitter:image",
          content: "http://brookero.se/brooke-logo.png",
        },
      ]}
    />
  );
}
