<script lang="ts">

    export default {
        props: {
            title: {
                type: String,
                required: true,
                default: "_ Event Title"
            },
            desc: {
                type: String,
                required: true,
                default: "_ Event Description"
            },
            datestart: {
                type: Date,
                required: true,
                default: new Date()
            },
            dateend: {
                type: Date,
                required: true,
                default: new Date()
            },
            links: {
                type: Array<{name: string, link: string}>,
                required: false
            },
            location: {
                type: String,
                required: true,
                default: "_ Event Location"
            },
            dateFormatMethod: {
                type: Function,
                default(start: Date, end: Date): string {
                    const timeOptions: object = { hour: "2-digit", minute: "2-digit" };
                    const dateOptions: object = { weekday: "long", year: "numeric", month: 'long', day: 'numeric' };
                    let str = "";
                    str += start.toLocaleDateString(undefined, dateOptions);
                    str = str + ", " + start.toLocaleTimeString([], timeOptions) + "-" + end.toLocaleTimeString([], timeOptions);
                    return str;
                }
            }
        }
    }

</script>

<template>
    <div class="bg-white m-3 p-3 shadow-xl shadow-grey">
        <div class="text-xl">
            {{ title }}
        </div>
        <div class="text-sm">
            {{ desc }}
        </div>
        <div class="text-sm">
            {{ dateFormatMethod(datestart, dateend) }} | {{ location }}
        </div>

        <div class="flex justify-end">
            <a v-for="obj in links" :key="obj.name" :href="obj.link" class="block shadow shadow-grey bg-red-700 text-white px-3 py-2 w-fit m-2">
                {{ obj.name }}
            </a>
        </div> 
    </div>
</template>