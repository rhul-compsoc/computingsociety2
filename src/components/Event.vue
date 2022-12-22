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
            {{ datestart }} - {{ dateend }}
        </div>

        <div>
            <div v-for="obj in links" :key="obj.name">
                {{ obj.name }}
                {{ obj.link }}
            </div>
        </div> 
    </div>
</template>