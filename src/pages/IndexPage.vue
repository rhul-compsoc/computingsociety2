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
</script>

<template>
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
      <footer class="py-6 text-xs text-center font-sm text-white">
        website by <a href="https://github.com/rhul-compsoc/" target="_"> compsoc </a>
      </footer>
    </div>
  </div>
  <!-- Here I'll put the canvas / whatever will take up the background -->
  <div
    class="w-full h-full fixed top-0 left-0 -z-10 bg-gradient-to-bl from-[#eb6420] to-[#ff7e42] overflow-hidden"
  ></div>
</template>
