<template>
  <section>
    <div v-if="collection">
      <Html>
        <Head>
          <Title>{{ collection?.title ?? "" }}</Title>
          <Meta
            name="description"
            :content="collection?.description ?? ''"
          />
        </Head>
      </Html>
      <CollectionHeader
        :title="collection?.title ?? ''"
        :description="collection?.descriptionHtml ?? ''"
      />
      <div v-if="collection?.products?.edges">
        <ProductGrid>
          <ProductCard
            v-for="(product, index) in collection?.products?.edges"
            :key="product.node.id"
            :index="index"
            :product="product.node"
          />
        </ProductGrid>
      </div>
      <div v-else />
    </div>
    <div v-else />
    <div v-if="error">
      Error
    </div>
  </section>
</template>

<script setup lang="ts">
import { useQuery, useResult } from '@vue/apollo-composable';
import { collectionByHandle } from '~~/apollo/queries/collectionByHandle';

const route = useRoute();
const handle = route.params.collection;

const { result, error } = useQuery(collectionByHandle, {
  handle,
  numProducts: 48,
});
const collection = computed(() => result?.value?.collectionByHandle);
</script>
