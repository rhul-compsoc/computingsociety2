<script setup lang="ts">
import events from "@/content/events.json";
import { dateFromStr } from '@/util/utils';

const route = useRoute();

useHead({
  bodyAttrs: {
    title: route.meta.title,
  },
  meta: [
    {
      property: "og:title",
      content: route.meta.title,
    },
  ],
});

let activeEvents = events.events;

// TODO: Replace this!
function placeholder() {
  console.log("Hello!");
}

const state = {
  fps: 60,
  color: "#0f0",
  charset: "Compsoc"
};

// from https://codepen.io/pavi2410/pen/oNjGVgM
const runBackground = () => {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  if(!canvas) throw new Error("No canvas");

  const ctx = canvas.getContext("2d");
  if(!ctx) throw new Error("No canvas context");


  let width: number, height: number, letters: number[];
  const resize = () => {
    width = canvas.width = innerWidth;
    height = canvas.height = innerHeight;

    letters = Array(Math.ceil(width / 10)).fill(0);
  };
  window.addEventListener("resize", resize);
  resize();

  const random = (items: string) => items[Math.floor(Math.random() * items.length)];

  const draw = () => {
    ctx.fillStyle = "rgba(0,0,0,.05)";
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = state.color;

    for (let i = 0; i < letters.length; i++) {
      let currLetter = letters[i];
      ctx.fillText(random(state.charset), i * 10, currLetter);
      letters[i] = currLetter >= height || currLetter >= 10000 * Math.random() ? 0 : currLetter + 10;
    }
  };

  setInterval(draw, 1000 / state.fps);
};

</script>

<template :onload="runBackground()">
  <div class="relative md:py-8 font-body">
    <div
      class="absolute inset-0 bg-[url(/img/grid.svg)] bg-top [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"
    ></div>
    <div
      class="p-2 container relative max-w-2xl mx-auto bg-gray-700 backdrop-blur-md bg-blend-normal shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5"
    >
      <header
        class="px-4 pt-6 prose-sm md:px-6 md:prose flex-col items-center text-center justify-center m-auto w-full flex"
      >
        <img src="@/assets/logo.svg" class="w-96" alt="compsoc" />
        <div class="text-white text-xl">Royal Holloway Computing Society</div>
      </header>
      <main>
        <div class="grid md:grid-cols-2">
          <SectionButtons
            text="Membership"
            src="membership.svg"
            @whenClick="placeholder"
          />
          <SectionButtons
            text="Committee"
            src="committee.svg"
            @whenClick="placeholder"
          />
          <SectionButtons
            text="Student Union"
            src="su.svg"
            @whenClick="placeholder"
          />
          <SectionButtons
            text="Events"
            src="events.svg"
            @whenClick="placeholder"
          />
        </div>

        <div class="font-semibold text-2xl text-white px-5">
          Upcoming Events
        </div>

        <div class="flex-col">
          <Event
            v-for="item in activeEvents"
            :key="item.event_title"
            :title="item.event_title"
            :desc="item.desc"
            :datestart="dateFromStr(item.date_start)"
            :dateend="dateFromStr(item.date_end)"
            :links="item.links"
          />
        </div>
      </main>
      <footer class="py-6 text-xs text-center font-sm text-gray-700">
        website by compsoc
      </footer>
    </div>
  </div>
  <!-- Here I'll put the canvas / whatever will take up the background -->
  <canvas
    class="w-full h-full fixed top-0 left-0 z-10 overflow-hidden"
    id="canvas"
  >
  </canvas>
</template>
