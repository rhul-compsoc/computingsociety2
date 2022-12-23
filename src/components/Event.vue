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
    <div class="">
        <div>
            {{ title }}
        </div>
        <div>
            {{ desc }}
        </div>
        <div>
            {{ dateFormatMethod(datestart, dateend) }}
        </div>

        <div>
            <div v-for="obj in links" :key="obj.name">
                <a :href="obj.link"> {{ obj.name }} </a>
            </div>
        </div> 
    </div>
</template>