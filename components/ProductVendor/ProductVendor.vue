<template>
  <div>
    <component
      :is="element"
      v-if="vendor"
    >
      {{ vendor }}
    </component>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  tag?: string;
  vendor: string;
}>();

const { tag, vendor } = toRefs(props);
const element = tag.value || 'div';
</script>
