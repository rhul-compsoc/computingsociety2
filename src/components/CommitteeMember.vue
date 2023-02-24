<script lang="ts">

    export default {
        props: {
            portrait: {
                type: String,
                required: false,
                default: undefined,
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
                required: false,
                default: undefined,
            },
            linkedin: {
                type: String,
                required: false,
                default: undefined,
            },
            year: {
                type: String,
                required: true
            },
            getImagePathMethod: {
                type: Function,
                default(filename: String): string {
                    return "img/committee-portraits/" + filename;
                }
            },
            altPortraitText: {
                type: Function,
                default(name: String) : string {
                    return name + "'s portrait";
                }
            }
        }
    }

</script>

<template>

    <div class="bg-white w-40 m-3 p-5 shadow-xl shadow-grey flex-col justify-center text-center ">
        <div class="flex flex-col justify-evenly h-full">
            <img class="w-32 h-32 mx-auto object-cover" :src="getImagePathMethod(portrait ?? 'placeholder.png')" :alt="altPortraitText(name)" />
            <div class="text-xl">{{ name }}</div>
            <div class="m-3">{{ role }}</div>
            <div class="flex flex-row space-x-4 justify-center">
                <div><a href={github}> <img src="@/assets/github.svg" class="w-5" alt="github" /> </a></div>
                <div><a href={linkedin}> <img src="@/assets/linkedin.svg" class="w-5" alt="linkedin" /> </a></div>
            </div>
        </div>
    </div>

</template>