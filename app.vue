<script lang="ts" setup>
import { useShopStore } from '@@/stores/shop';

useMeta({
  htmlAttrs: {
    lang: 'en',
  },
});

// Global Store Actions
const { pending, error } = await useAsyncData('shop', () => {
  const shopStore = useShopStore();
  return shopStore.getShopGlobals();
});

const config = useRuntimeConfig();
</script>

<template>
  <div class="site">
    <Header />
    <Cart />
    <main class="site-content">
      <div class="container">
        <NuxtPage />
      </div>
    </main>
    <Footer />
  </div>
</template>
