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
});
</script>
<template>
  <div>
    <div><slot /></div>
  </div>
</template>
