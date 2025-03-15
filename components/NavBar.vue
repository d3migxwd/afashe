<template>
  <div>
    <div
      class="flex gap-2 px-6 py-3 fixed top-0 left-0 right-0 z-50 items-center"
    >
      <NuxtLink to="#home "
        ><img src="/images/afashe-logo.png" alt="logo" class="h-14"
      /></NuxtLink>

      <nav
        class="py-1 px-1 bg-white shadow-sm flex gap-2 items-center rounded-3xl h-auto"
      >
        <NuxtLink
          to="#how"
          class="p-2 text-black hover:font-bold rounded-4xl navy hidden md:block"
          >How It Works</NuxtLink
        >
        <NuxtLink
          to="#collaborate"
          class="p-2 text-black hover:font-bold rounded-4xl navy hidden md:block"
          >Collaborate</NuxtLink
        >
        <!-- humburger -->
        <div class="relative md:hidden">
          <button
            id="hamburger"
            @click="toggleDropDown"
            class="border-[0px] cursor-pointer p-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </button>
        </div>
        <div
          class="navDown rounded-sm top-18 left-[20px] flex flex-col bg-white absolute overflow-hidden gap-2 w-[160px] hidden"
        >
          <NuxtLink to="#how" class="p-2 text-black hover:font-bold navy"
            >How It Works</NuxtLink
          >
          <NuxtLink
            to="#collaborate"
            class="p-2 text-black hover:font-bold navy"
            >Collaborate</NuxtLink
          >
        </div>
      </nav>
    </div>
  </div>
</template>
<script setup>
const dropDown = ref(null);

const toggleDropDown = () => {
  dropDown.value.classList.toggle("hidden");
};

const handleClickOutside = (e) => {
  if (!e.target.closest(".navDown") && !e.target.closest("#hamburger")) {
    dropDown.value.classList.add("hidden");
  }
};

onMounted(() => {
  dropDown.value = document.querySelector(".navDown");
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>
