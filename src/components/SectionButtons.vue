<script setup lang="ts">
import { getImageUrl } from "@/util/utils.js";

const props = defineProps<{
  src: string;
  text: string;
}>();

</script>

<template>
  <div
    class="shadow shadow-grey text-white p-2 m-2 select-none cursor-pointer hover:bg-red-800"
  >
    <button class="flex align-middle items-center gap-5">
      <img :alt="props.text" :src="getImageUrl(props.src)" />
      <div>
        {{ props.text }}
      </div>
    </button>
  </div>
</template>
