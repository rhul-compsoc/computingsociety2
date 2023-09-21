<script lang="ts">

    export default {
        props: {
            icon: {
                type: String,
                required: false,
                default: undefined,
            },
            title: {
                type: String,
                required: true,
                default: "_ Title",
            },
            link: {
                type: String,
                required: true,
                default: "/",
            },
            getImagePathMethod: {
                type: Function,
                default(filename: String): string {
                    return "img/contact-icons/" + filename;
                }
            },
        }
    }

</script>

<template>

    <div>
        <a :href="link">
            <img :src="getImagePathMethod(icon)" :alt="title" />
            <div> {{ title }} </div>
        </a>
    </div>

</template>