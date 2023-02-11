<script lang="ts">

export default {
  data() {
    return {
      activeCat: 'events'
    }
  }
}

//const route = useRoute();

// useHead({
//   bodyAttrs: {
//     title: route.meta.title,
//   },
//   meta: [
//     {
//       property: "og:title",
//       content: route.meta.title,
//     },
//   ],
// });

</script>

<template>
  <div class="relative md:py-8 font-body">
    <div
      class="absolute inset-0 bg-[url(/img/grid.svg)] bg-top [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"
    ></div>
    <div
      class="p-2 container relative max-w-2xl mx-auto bg-gray-700/[.95] backdrop-blur-md bg-blend-normal shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5"
    >
      <header
        class="px-4 pt-6 prose-sm md:px-6 md:prose flex-col items-center text-center justify-center m-auto w-full flex"
      >
        <img src="@/assets/logo.svg" class="w-64" alt="compsoc" />
        <div class="text-white text-2xl font-bold">Royal Holloway Computing Society</div>
        <div class="text-white text-sm mt-5"> RHUL's student-led group supporting Computer Science students, and everyone who loves tech! </div>
      </header>
      <main>
        <div class="grid md:grid-cols-2 mt-5">
          <SectionButtons
            text="Membership"
            src="membership.svg"
            :active="false"
          />
          <SectionButtons
            text="Committee"
            src="committee.svg"
            @Click="() => {activeCat = 'committee'}"
            :active="activeCat == 'committee'"
          />
          <SectionButtons
            text="Contact us"
            src="su.svg"
            @Click="() => {activeCat = 'contact'}"
            :active="activeCat == 'contact'"
          />
          <SectionButtons
            text="Events"
            src="events.svg"
            @Click="() => {activeCat = 'events'}"
            :active="activeCat == 'events'"
          />
        </div>

        <!-- Tabs ../components/sections -->
        <Events 
          v-if="activeCat == 'events'"
        />
        <Committee 
          v-if="activeCat == 'committee'"
        />
        <ContactUs 
          v-if="activeCat == 'contact'"
        />

      </main>
      <footer class="py-6 text-xs text-center font-sm text-white">
        website by <a href="https://github.com/rhul-compsoc/" target="_"> compsoc </a>
      </footer>
    </div>
  </div>
  <!-- Here I'll put the canvas / whatever will take up the background -->
  <div
    class="w-full h-full fixed top-0 left-0 -z-10 bg-gradient-to-bl from-[#eb6420] to-[#ff7e42] overflow-hidden"
  ></div>
</template>
