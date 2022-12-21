<script setup lang="ts">
import DiscordEvents from '@/components/DiscordEvents.vue';

// useRoute, useHead, and HelloWorld are automatically imported. See vite.config.ts for details.
const route = useRoute()

useHead({
  bodyAttrs: {
    title: route.meta.title,
  },
  meta: [
    {
      property: 'og:title',
      content: route.meta.title,
    },
    {
      name: 'twitter:title',
      content: route.meta.title,
    },
  ],
})

const BUILD_DATE = import.meta.env.VITE_APP_BUILD_EPOCH
  ? new Date(Number(import.meta.env.VITE_APP_BUILD_EPOCH))
  : undefined
const thisYear = new Date().getFullYear()
</script>

<template>
  <div class="relative py-8">
    <div
      class="absolute inset-0 bg-[url(/img/grid.svg)] bg-top [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"
    ></div>
    <div
      class="container relative max-w-2xl mx-auto bg-white shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5"
    >
      <header class="px-4 pt-6 prose-sm md:px-6 md:prose flex items-center justify-center m-auto">
        <h1 class="m-auto">**Insert Compsoc Logo**</h1>
      </header>
      <main>
        <div class="p-4 mx-auto prose md:px-6 prose-indigo sm:rounded-md">
          <DiscordEvents />

          <h2>Template Project Features</h2>

          <p>
            The idea of this template is to bundle as many often used and useful features
            pre-configured as possible. If you don't need something, just remove it!
          </p>

          <ul>
            <li>Pinia store (fully typed Vuex store available in version 1.13)</li>
            <li>Routing using vue-router</li>
            <li>
              TailwindCSS w/ JIT-mode, purge, plugins, and production minimization pre-configured
            </li>
            <li>
              Vue-friendly Eslint and Prettier configuration - use as is or tweak to your liking
            </li>
            <li>Alias <code>@</code> to <code>project_root/src</code></li>
            <li>Predefined and typed global variables</li>
            <li>Playwright e2e and component tests preconfigured</li>
            <li>
              Github Workflows preconfigured to run e2e and component tests automatically on every
              push
            </li>
          </ul>

          <h2>Project setup and usage</h2>

          <p>
            Using
            <a href="https://github.com/johnsoncodehk/volar">Volar extension for VSCode</a>
            is recommended to take full advance of the new script setup sugar and full TypeScript
            support in Vue SFC templates. (This is totally optional but recommended as it results
            much better DX!) See
            <a href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
              >official IDE Support documentation</a
            >
            for more details.
          </p>
        </div>
      </main>
      <footer class="py-6 text-sm text-center text-gray-700">
        <p>
          Vite-ts-tailwind-starter by
          <a class="underline" href="https://twitter.com/uninen">@Uninen</a> &copy; 2020-{{
            thisYear
          }}.
          <template v-if="BUILD_DATE"> Site built {{ BUILD_DATE.toLocaleDateString() }}. </template>
          <template v-else> Development mode. </template>
        </p>
      </footer>
    </div>
  </div>
</template>
