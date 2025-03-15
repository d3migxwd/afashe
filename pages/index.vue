<template>
  <div>
    <NavBar />
    <div class="bg-white">
      <section
        id="home"
        class="section home h-auto md:h-svh flex flex-col items-center justify-center p-4 md:p-8 relative bg-red-100 min-h-[600px] overflow-hidden"
      >
        <div
          class="flex flex-col md:-mt-70 items-center text-center mt-[100px] max-w-800 relative"
        >
          <h2 class="text-2xl md:text-6xl font-extrabold">Enjoy the Show</h2>
          <h2 class="text-2xl md:text-6xl font-extrabold">
            We go sort the Chow<i>!</i>
          </h2>
          <div class="my-4">
            <p class="text-xl md:text-2xl text-center">
              "Getting food at any <span>event</span> can be a hassle. <br />Let
              us handle it for you"
            </p>
          </div>
          <div class="z-1 my-4 px-8 py-4 bg-red-500 text-white rounded-lg">
            <h3 class="text-xl md:text-2xl text-nowrap font-bold">
              Dail *1509#
            </h3>
          </div>

          <img
            class="top-20 -left-90 hidden lg:block absolute z-0"
            src="/images/burger.png"
            width="350"
            alt=""
          />
          <img
            class="top-30 -right-50 hidden -rotate-25 lg:block absolute z-0"
            src="/images/frenchChips.png"
            width="300"
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
        <div class="overflow-hidden max-w-[350px] mt-4 mb-12 md:mb-0">
          <div class="flex items-center gap-4 py-1 inf-scroll">
            <img class="h-[40px]" src="/images/detty-logo.png" alt="partner" />
            <img
              class="h-[40px]"
              src="/images/charterhouse.png"
              alt="partner"
            />
            <img
              class="h-[60px]"
              src="/images/echohouse-logo.png"
              alt="partner"
            />
            <img
              class="h-[60px]"
              src="/images/outmosphere.png"
              alt="partner"
            /><img
              class="h-[60px]"
              src="/images/zaamadisco.webp"
              alt="partner"
            />
          </div>
        </div>
      </section>
      <!-- app preview -->
      <div
        class="justify-center flex mt-8 md:-mt-[32vh] relative z-2 p-4 md:p-8 home"
      >
        <img
          src="/images/app-preview.png"
          class="max-h-[400px] md:max-h-[800px]"
          alt=""
        />
      </div>
    </div>
    <div class="bg-white">
      <section id="how" class="section blurry">
        <div
          class="mx-auto max-w-[900px] pt-8 pb-[100px] md:pb-[280px] px-3 md:px-8"
        >
          <h3 class="md:text-4xl text-2xl font-bold text-center mb-8">
            How it works
          </h3>
          <p class="text-xl">
            The idea is simple: no one should have to miss out on the fun just
            to stand in line for food at a concert, festival, or any crowded
            event. That's where we come in! At your next rave, when hunger
            strikes, just grab your phone and dial our short code. It's that
            easy!
          </p>
          <ol class="list-decimal list-inside mt-8 text-xl">
            <li>
              Select a Vendor: Browse through a list of awesome food vendors.
            </li>
            <li>
              Choose Your Food: Pick your favorite dishes, and don't forget to
              add a drink!
            </li>
            <li>
              Keep Having Fun: Go back to enjoying the event while we take care
              of the rest. We'll send you a message in about 30 minutes when
              your food is ready.
            </li>
          </ol>
          <br />
          <p class="text-xl">
            No more missing out on the action – just great food delivered right
            to you!
          </p>
        </div>
        <div
          class="flex flex-col items-center justify-center bg-black gap-8 p-4 md:p-8"
        >
          <div class="grow overflow-x-hidden">
            <div class="inf-scroll flex gap-4">
              <img
                v-for="i in 6"
                :src="`/images/rave${i}.jpg`"
                class="h-[260px] object-cover rounded-xl border-6 border-white"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>

    <div class="bg-black">
      <section
        id="collaborate"
        class="section blurry h-auto md:h-svh flex flex-col items-center p-2 md:p-8 relative bg-black text-white min-h-[600px]"
      >
        <div class="mx-auto max-w-[900px] my-12 text-center">
          <h2 class="text-2xl md:text-6xl font-extrabold">
            Wanna Collaborate?
          </h2>
          <h2 class="text-2xl md:text-6xl font-extrabold">
            Let's make it happen<i>!</i>
          </h2>

          <div class="my-[40px]">
            <p class="text-xl md :text-2xl text-center">
              "We're always looking for new partners to join us in making events
              even more awesome. If you're a food vendor or event organizer,
              we'd love to hear from you!"
            </p>
          </div>
          <div class="flex justify-center">
            <a
              href="mailto:eben@afashe.com"
              class="text-xl md:text-4xl gap-4 flex-wrap justify-center font-extrabold flex"
              >eben@afashe.com

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="bi bi-box-arrow-up-right md:h-[32px] h-[24px] md:w-[32px] w-[24px]"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"
                />
                <path
                  fill-rule="evenodd"
                  d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
    <footer class=""></footer>
  </div>
</template>

<script setup>
import { useInfiniteScroll } from "/composables/useInfiniteScroll";
useInfiniteScroll();
useScrollSpy();
useAnimateSection();
</script>
