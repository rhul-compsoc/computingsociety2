<script setup lang="ts">
import DiscordEvents from '@/components/DiscordEvents.vue';
import events from '@/content/events.json';

import Event from '@/components/Event.vue';

const route = useRoute()

useHead({
  bodyAttrs: {
    title: route.meta.title,
  },
  meta: [
    {
      property: 'og:title',
      content: route.meta.title,
    }
  ],
})

const BUILD_DATE = import.meta.env.VITE_APP_BUILD_EPOCH
  ? new Date(Number(import.meta.env.VITE_APP_BUILD_EPOCH))
  : undefined

let activeEvents = events.events;

function dateFromStr(str: string | undefined): Date {
  if (str != null) {
    return new Date(str);
  } else {
    return new Date();
  }
}

</script>

<template>
  <div class="relative py-8 font-body">
    <div
      class="absolute inset-0 bg-[url(/img/grid.svg)] bg-top [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"
    ></div>
    <div
      class="p-2 container relative max-w-2xl mx-auto bg-bgGrey/[.79] backdrop-blur-md bg-blend-normal shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5"
    >
      <header class="px-4 pt-6 prose-sm md:px-6 md:prose flex-col items-center text-center justify-center m-auto w-full">
        <img src="@/assets/logo.svg" class="w-60" alt="compsoc" />
        <div class="text-black text-xl"> Royal Holloway Computing Society </div>
      </header>
      <main>

        <div class="grid-rows-2">
          <div class="flex-row block shadow shadow-grey bg-red text-white px-3 py-2 m-2">
            <img src="@/assets/membership.svg" alt="Membership"/> <div> Membership </div>
          </div>
          <div class="block shadow shadow-grey bg-red text-white px-3 py-2 m-2">
            <img src="@/assets/committee.svg" alt="Committee" class="fill-white"/> Committee
          </div>
          <div class="block shadow shadow-grey bg-red text-white px-3 py-2 m-2">
            <img src="@/assets/su.svg" alt="Student Union"/> Student Union
          </div>
          <div class="block shadow shadow-grey bg-red text-white px-3 py-2 m-2">
            <img src="@/assets/events.svg" alt="Events"/> Events
          </div>
        </div>

        <div class="font-semibold text-2xl text-white px-5"> Upcoming Events </div>

        <div class="flex-col">
          <Event v-for="item in activeEvents" :key="item.event_title"
            :title=item.event_title
            :desc=item.desc
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
</template>