<script setup lang="ts">
import DiscordEvents from '@/components/DiscordEvents.vue';
import events from '../content/events.json';

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
      class="container relative max-w-2xl mx-auto bg-bgGrey/[.79] backdrop-blur-md bg-blend-normal shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5"
    >
      <header class="px-4 pt-6 prose-sm md:px-6 md:prose flex items-center justify-center m-auto">
        header
      </header>
      <main>

        Upcoming Events

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
      <footer class="py-6 text-sm text-center text-gray-700">
        footer
      </footer>
    </div>
  </div>
</template>
