<script setup lang="ts">
import { useCartStore } from '~~/stores/cart';

const cartStore = useCartStore();
const lineItems = computed(() => cartStore.lineItems);
const cart = ref(null);
</script>

<template>
  <div>
    <Html>
      <Head>
        <Title>Cart</Title>
        <Meta
          name="description"
          content="Cart page"
        />
      </Head>
    </Html>
    <div class="container my-8 text-center">
      <section ref="cart">
        <div>
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
    </div>
  </div>
</template>

