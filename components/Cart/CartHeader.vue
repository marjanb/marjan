<script setup lang="ts">
import { useCartStore } from '~~/stores/cart';

const cartStore = useCartStore();
const closeCart = () => cartStore.toggleCart(false);
</script>

<template>
  <div class="flex items-center h-12 mb-4 border-b-2 border-black md:h-16">
    <button
      closeCart
      class="mr-6"
      @click="closeCart"
      @keyup.enter="closeCart"
    >
      <Icon name="bx:x" />
    </button>
    <div>Cart</div>
  </div>
</template>
