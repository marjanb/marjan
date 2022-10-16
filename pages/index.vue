<script setup>
import { storeToRefs } from 'pinia';
import { useShopStore } from '@@/stores/shop';

const shopStore = useShopStore();
const { description } = storeToRefs(shopStore);

useHead({
  title: 'NuxtShop',
  meta: [
    { name: 'description', content: description }
  ],
});
</script>

<template>
  <FeaturedProducts
    collection-handle="frontpage-1"
    :number-products="4"
    title="Featured Products"
  />
</template>
