<script setup lang="ts">
import { useShopStore } from '@@/stores/shop';
import { useCartStore } from '@@/stores/cart';

const shopStore = useShopStore();
const cartStore = useCartStore();

function handleClick() {
  cartStore.toggleCart();
  shopStore.toggleMenu(false);
}
</script>

<template>
  <button
    class="flex items-center justify-end"
    aria-label="Cart"
    @click="handleClick"
    @keyup.enter="handleClick"
  >
    <Icon
      class="w-6"
      name="bx:cart"
      aria-hidden
    />
  </button>
</template>
