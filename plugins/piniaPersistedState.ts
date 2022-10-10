// import { createPersistedStatePlugin } from 'pinia-plugin-persistedstate-2';
//
// export default function ({ $pinia }) {
//   if (process.client) {
//     $pinia.use(createPersistedStatePlugin());
//   }
// }

// import { createNuxtPersistedState } from 'pinia-plugin-persistedstate/nuxt'
// import { useCookie } from '#app' // optional import as Nuxt will auto-import it
//
// export default defineNuxtPlugin(nuxtApp => {
//   nuxtApp.$pinia.use(createNuxtPersistedState(useCookie))
// })


import { createPersistedStatePlugin } from 'pinia-plugin-persistedstate-2'

export default defineNuxtPlugin(nuxtApp => {
  if (process.client) {
    nuxtApp.$pinia.use(
      createPersistedStatePlugin({
        // plugin options goes here
      }),
    )
  }
})
