<script setup>
useHead({
  title: (titleChunk) => (titleChunk ? `${titleChunk} - Afashe` : "Afashe"),
  link: [
    { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap",
    },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: true },
  ],
  meta: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    {
      name: "description",
      content:
        "Afashe is a food delivery service that allows you to pre-order food from your favorite vendors at events without missing out on the action.",
    },
    {
      name: "og:title",
      content: "Afashe",
    },
    {
      name: "og:description",
      content:
        "Afashe is a food delivery service that allows you to pre-order food from your favorite vendors at events without missing out on the action.",
    },
    {
      name: "og:image",
      content: "/images/afashe-logo.png",
    },
    {
      name: "og:url",
      content: "https://afashe.com",
    },
    {
      name: "og:type",
      content: "website",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:site",
      content: "@afashe",
    },
    {
      name: "twitter:creator",
      content: "@afashe",
    },
    {
      name: "twitter:title",
      content: "Afashe",
    },
    {
      name: "twitter:description",
      content:
        "Afashe is a food delivery service that allows you to pre-order food from your favorite vendors at events without missing out on the action.",
    },
    {
      name: "twitter:image",
      content: "/images/afashe-logo.png",
    },
  ],
});
</script>
<template>
  <div>
    <div><slot /></div>
  </div>
</template>
