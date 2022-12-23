<script lang="ts">
import { format } from 'path';

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
                    let timeOptions: object = { hour: "2-digit", minute: "2-digit" };
                    let dateOptions: object = {weekday: "long", year: "numeric", month: 'long', day: 'numeric'}
                    let str: string = "";
                    str += start.toLocaleDateString(undefined, dateOptions);
                    str = str + ", " + start.toLocaleTimeString([], timeOptions) + "-" + end.toLocaleTimeString([], timeOptions);
                    return str;
                }
            }
        }
    }

</script>

<template>
    <div class="bg-white m-3 p-3">
        <div class="">
            {{ title }}
        </div>
        <div>
            {{ desc }}
        </div>
        <div>
            {{ dateFormatMethod(datestart, dateend) }}
        </div>
        <div>
            {{ location }}
        </div>

        <div class="flex-row">
            <a v-for="obj in links" :key="obj.name" :href="obj.link" class="w-fit">
                <div class="bg-red text-white p-2 w-fit"> {{ obj.name }} </div>
            </a>
        </div> 
    </div>
</template>