<script lang="ts">

    export default {
        props: {
            portrait: {
                type: String,
                required: false
            },
            name: {
                type: String,
                required: true,
                default: "_ Name"
            },
            role: {
                type: String,
                required: true,
                default: "_ Role"
            },
            github: {
                type: String,
                required: false
            },
            linkedin: {
                type: String,
                required: false
            },
            getImagePathMethod: {
                type: Function,
                default(filename: String): string {
                    return "img/committee-portraits/" + filename;
                }
            }
        }
    }

</script>

<template>

    <div class="bg-white w-40 m-3 p-5 shadow-xl shadow-grey flex-col justify-center text-center">
        <img :src="getImagePathMethod(portrait ?? 'placeholder.png')" alt="{{name}}'s portrait" />
        <div class="text-xl">{{ name }}</div>
        <div class="m-3">{{ role }}</div>
        <div class="flex flex-row space-x-4 justify-center">
            <div><a href={github}> <img src="@/assets/github.svg" class="w-5" alt="github" /> </a></div>
            <div><a href={linkedin}> <img src="@/assets/linkedin.svg" class="w-5" alt="linkedin" /> </a></div>
        </div>
    </div>

</template>