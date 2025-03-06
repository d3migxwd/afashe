<script setup>
const activeNav = (el) => {
  const navLinks = document.querySelectorAll(".navy");
  navLinks.forEach((link) => {
    link.classList.remove("font-bold", "text-white", "bg-red-500");
  });
  el.classList.add("font-bold", "text-white", "bg-red-500");
};
</script>
<template>
  <div>
    <div
      class="flex gap-2 px-6 py-3 fixed top-0 left-0 right-0 z-50 items-center"
    >
      <img src="/images/afashe-logo.png" alt="logo" class="h-14" />
      <nav
        class="py-1 px-2 backdrop-blur-xl flex gap-2 items-center rounded-3xl h-auto border-gray-100"
      >
        <NuxtLink
          to="#how"
          @click="activeNav($event.target)"
          class="p-2 text-black hover:font-bold rounded-4xl navy"
          >How It Works</NuxtLink
        >
        <NuxtLink
          to="#contribute"
          @click="activeNav($event.target)"
          class="p-2 text-black hover:font-bold rounded-4xl navy"
          >Contribute</NuxtLink
        >
      </nav>
    </div>
  </div>
</template>
