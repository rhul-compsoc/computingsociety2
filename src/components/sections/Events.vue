<script setup lang="ts">
import events from "@/content/events.json";
import { dateFromStr } from '@/util/utils';

let activeEvents = events.events;

</script>

<template>

    <div class="" id="events">
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
    </div>

</template>