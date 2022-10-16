<script setup lang="ts">
import { onClickOutside } from '@vueuse/core';
import { useCartStore } from '@@/stores/cart';

const cart = ref(null);
const route = useRoute();

const cartStore = useCartStore();
const cartOpen = computed(() => cartStore.cartOpen);
const closeCart = () => cartStore.toggleCart(false);
const lineItems = computed(() => cartStore.lineItems);

onClickOutside(cart, () => closeCart);
</script>

<template>
  <aside>
    <transition name="cart">
      <section
        v-if="cartOpen"
        ref="cart"
        class="fixed top-0 bottom-0 right-0 z-10 px-4 pb-4 bg-white border-l-2 border-black w-[90vw] md:w-[400px]"
      >
        <div>
          <CartHeader />
          <div v-if="lineItems.length">
            <CartItem
              v-for="item in lineItems"
              :key="item?.node?.id"
              class="pb-4 mb-4 border-b-2 border-black"
              :item="item?.node ?? {}"
            />
            <CartSummary />
            <CartCheckout />
          </div>
          <div v-else>
            <CartEmpty />
          </div>
        </div>
      </section>
    </transition>
    <transition name="fade">
      <div
        v-if="cartOpen"
        class="fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-20 transition-all"
        @click="closeCart"
        @keyup.enter="closeCart"
      />
    </transition>
  </aside>
</template>
