<script setup lang="ts">
import { formatLocalePrice } from '~~/utils/money';
import { useCartStore } from '~~/stores/cart';

const props = defineProps<{
  item: any;
}>();

const cartStore = useCartStore();

const image = props.item?.merchandise?.product?.featuredImage?.thumbnail ?? '';
const imageWidth = props.item?.merchandise?.product?.featuredImage?.width ?? '';
const imageHeight =
  props.item?.merchandise?.product?.featuredImage?.height ?? '';

const id = props.item?.id;
const variantOptions = props.item?.merchandise?.selectedOptions ?? null;
const productPath = `/products/${props.item?.merchandise.product.handle}`;

const removeItem = () => cartStore.cartLinesRemove(id);

const price = props.item?.estimatedCost?.totalAmount?.amount ?? '';
const currencyCode = props.item?.estimatedCost?.totalAmount?.currencyCode ?? '';
const formattedPrice = computed(() =>
  formatLocalePrice(price, 'en-US', currencyCode)
);
const closeCart = () => cartStore.toggleCart(false);
</script>

<template>
  <div class="flex w-full pb-4 mb-4 border-b-2 border-black">
    <div class="aspect-miniCart max-w-miniCart mr-4">
      <NuxtLink
        :to="productPath"
        class="mb-4"
        @click="closeCart"
      >
        <img
          :src="image"
          :alt="item.merchandise.product.title"
          :width="imageWidth"
          :height="imageHeight"
          class="block"
        >
      </NuxtLink>
    </div>
    <div class="flex items-start justify-between w-full text-sm">
      <div>
        <div class="text-base">
          {{ item.merchandise.product.title }}
        </div>
        <div
          v-for="option in variantOptions"
          :key="option.value"
          class="flex"
        >
          <template v-if="option.value !== 'Default Title'">
            <div class="mr-2">
              {{ option.name }}:
            </div>
            <div>{{ option.value }}</div>
          </template>
        </div>
        <div>QTY: {{ item.quantity }}</div>
        <div>{{ formattedPrice }}</div>
      </div>
      <button class="ml-4">
        <Icon
          name="bx:x"
          class="inline w-4"
          @click="removeItem"
          @keyup.enter="removeItem"
        />
      </button>
    </div>
  </div>
</template>
