<template>
  <a
    v-if="checkoutUrl"
    :href="checkoutUrl"
    class="btn btn__default btn__full"
  >Checkout</a>
</template>

<script setup lang="ts">
import { useCartStore } from '~~/stores/cart';
const cartStore = useCartStore();

const checkoutUrl = cartStore?.cart?.checkoutUrl;
</script>
