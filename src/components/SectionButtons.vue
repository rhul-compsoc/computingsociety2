<script setup lang="ts">
import { getImageUrl } from "@/util/utils.js";

const props = defineProps<{
  src: string;
  text: string;
  active: boolean;
}>();

const style = "shadow shadow-grey text-white p-2 m-2 select-none cursor-pointer hover:bg-red-800 ";
const getStyle = () => { // if anyone else knows how to do dynamic styling in tailwind better than this please fix
  if (props.active) {
    return style + "bg-gray-600";
  } else {
    return style + "bg-red-700";
  }
}

const emit = defineEmits<{
  (e: "whenClick"): void;
}>();

function test() {
  emit("whenClick");
}

</script>

<template>
  <div
    :class="getStyle()"
  >
    <button class="flex align-middle items-center gap-5" @click="test()">
      <img :alt="props.text" :src="getImageUrl(props.src)" />
      <div>
        {{ props.text }}
      </div>
    </button>
  </div>
</template>
