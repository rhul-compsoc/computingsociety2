<script setup lang="ts">
import { getImageUrl } from "@/util/utils.js";

const props = defineProps<{
	src: string
	text: string,
	onclick: () => void
}>()

</script>

<template>
	<div class="shadow shadow-grey bg-red-700 text-white p-2 m-2">
		<div class="flex align-middle items-center gap-5">
			<img :alt="props.text" :src="getImageUrl(props.src)" /> 
			<div> 
				{{props.text}} 
			</div>
		</div>
	</div>
</template>
