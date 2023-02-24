<script setup lang="ts">
import committee from "@/content/committee.json";

let committeeData = committee.actualCommittee;
const currentYear = Object.keys(committeeData)[0] as keyof typeof committeeData;
</script>

<template>

    <div id="committee" class="">

        <div class="font-semibold text-2xl text-white px-5">
            Committee 2022-23
        </div>

        <div class="flex justify-center flex-row flex-wrap w-full">

            <CommitteeMember
                v-for='item in committeeData[currentYear]'
                :key="item.name"
                :portrait="item.portrait"
                :name="item.name"
                :role="item.role"
                :github="item.github"
                :linkedin="item.linkedin"
                :year="item.year"
            />
        </div>

        <a href="" class="text-white"> 
            See previous committees 
        </a>

    </div>

</template>