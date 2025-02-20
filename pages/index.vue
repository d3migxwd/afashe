<template>
  <div>
    <main
      class="h-auto md:h-svh flex flex-col items-center justify-center p-4 md:p-8 relative bg-red-100 min-h-[600px] overflow-hidden"
    >
      <div
        class="flex flex-col md:-mt-70 items-center text-center max-w-800 relative"
      >
        <h2 class="text-4xl md:text-6xl font-extrabold">Enjoy the Show</h2>
        <h2 class="text-4xl md:text-6xl font-extrabold">
          We go sort the Chow<i>!</i>
        </h2>
        <div class="my-4">
          <p class="text-xl md:text-2xl text-center">
            "Getting food at any <span>event</span> can be a hassle. <br />Let
            us handle it for you"
          </p>
        </div>
        <div class="z-1 my-4 px-8 py-4 bg-red-500 text-white rounded-lg">
          <h3 class="text-2xl text-nowrap font-bold">Dail *1509#</h3>
        </div>

        <img
          class="top-20 -left-90 hidden lg:block absolute z-0"
          src="/images/burger.png"
          width="350"
          alt=""
        />
        <img
          class="absolute hidden lg:block -top-70 -right-90 z-0"
          src="/images/noodles.png"
          width="400"
          alt=""
        />
      </div>
      <div class="flex items-center justify-center gap-4 mt-8">
        <h4 class="text-lg md:text-xl font-semibold">
          Partners (<span class="italic">We wish</span>)
        </h4>
      </div>
      <div class="overflow-hidden max-w-[350px] mt-4">
        <div class="flex items-center gap-4 py-1 inf-scroll">
          <img
            class="h-[60px]"
            src="/images/detty-logo.png"
            alt="partner"
            style="filter: grayscale(1)"
          />
          <img
            class="h-[60px]"
            src="/images/charterhouse.png"
            alt="partner"
            style="filter: grayscale(1)"
          />
          <img
            class="h-[60px]"
            src="/images/echohouse-logo.png"
            alt="partner"
            style="filter: grayscale(1)"
          />
          <img
            class="h-[60px]"
            src="/images/outmosphere.png"
            alt="partner"
            style="filter: grayscale(1)"
          /><img
            class="h-[60px]"
            src="/images/zaamadisco.webp"
            alt="partner"
            style="filter: grayscale(1)"
          />
        </div>
      </div>
    </main>
    <div class="justify-center flex mt-8 md:-mt-[32vh] relative z-2 p-4 md:p-8">
      <img
        src="/images/app-preview.png"
        class="max-h-[400px] md:max-h-[800px]"
        alt=""
      />
    </div>
    <div class="mx-auto max-w-[900px] my-12 p-4 md:p-8">
      <h3 class="md:text-4xl text-3xl font-bold text-center mb-8">
        How it works
      </h3>
      <p class="text-xl">
        The idea is simple: no one should have to miss out on the fun just to
        stand in line for food at a concert, festival, or any crowded event.
        That's where we come in! At your next rave, when hunger strikes, just
        grab your phone and dial our short code. It's that easy!
      </p>
      <ol class="list-decimal list-inside mt-8 text-xl">
        <li>Select a Vendor: Browse through a list of awesome food vendors.</li>
        <li>
          Choose Your Food: Pick your favorite dishes, and don't forget to add a
          drink!
        </li>
        <li>
          Keep Having Fun: Go back to enjoying the event while we take care of
          the rest. We'll send you a message in about 30 minutes when your food
          is ready.
        </li>
      </ol>
      <br />
      <p class="text-xl">
        No more missing out on the action – just great food delivered right to
        you!
      </p>
    </div>
    <div class="bg-black">
      <div
        class="flex flex-col lg:flex-row items-center justify-center gap-8 h-full p-8"
      >
        <div class="h-full flex items-center justify-center">
          <h3
            class="text-4xl md:text-5xl font-bold text-white text-center lg:text-left"
          >
            Happy <br class="hidden lg:block" />People
          </h3>
        </div>
        <div class="grow overflow-hidden">
          <div class="inf-scroll flex gap-4">
            <img
              v-for="i in 10"
              :src="`/images/rave${3}.jpg`"
              class="h-[260px] object-cover rounded-xl border-6 border-white"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <footer class=""></footer>
  </div>
</template>

<script setup>
import { useInfiniteScroll } from "/composables/useInfiniteScroll";
useInfiniteScroll();
</script>
