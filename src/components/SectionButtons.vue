<script setup lang="ts">
import { getImageUrl } from "@/util/utils.ts";

const props = defineProps<{
	src: string
	text: string,
	onclick: () => void
}>()

</script>

<template>
	<div class="block shadow shadow-grey bg-red-700 text-white px-3 py-2 m-2">
	<img :alt="props.text" :src="getImageUrl(props.src)" /> <div> {{props.text}} </div>
	</div>
</template>
