<script setup lang="ts">
import { useProductStore } from '@@/stores/product';
import { useCartStore } from '@@/stores/cart';

const productStore = useProductStore();
const cartStore = useCartStore();

const labelActive = 'Add to Cart';
const labelDisabled = 'Select Variant';
const selectedVariantId = computed(() => productStore.selectedVariantId);
const currentLabel = computed(() =>
  selectedVariantId ? labelActive : labelDisabled
);

const addToCart = () => {
  if (!selectedVariantId.value) {
    return;
  }
  cartStore.cartLinesAdd(selectedVariantId.value);
  productStore.setSelectedVariantId('');
};
</script>

<template>
  <button
    :disabled="!selectedVariantId"
    class="btn btn__default btn__full"
    @click="addToCart"
    @keyup.enter="addToCart"
  >
    <span>{{ currentLabel }}</span>
  </button>
</template>
