<template>
  <div>
    <component
      :is="tag || 'div'"
      v-if="title"
    >
      {{ title }}
    </component>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  tag?: string;
  title: string;
}>();

const { tag, title } = toRefs(props);
</script>
