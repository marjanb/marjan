<script setup lang="ts">
import { useShopStore } from '@@/stores/shop';

const shopStore = useShopStore();
const menuOpen = computed(() => shopStore.menuOpen);

function handleClick() {
  shopStore.toggleMenu();
}
</script>

<template>
  <button
    class="w-5 h-5 relative focus:outline-none bg-white"
    aria-label="Menu"
    @click="handleClick"
    @keyup.enter="handleClick"
  >
    <div class="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <span
        aria-hidden="true"
        class="block absolute h-0.5 w-5 bg-current transform transition duration-200 ease-in-out"
        :class="{'rotate-45': menuOpen,' -translate-y-1.5': !menuOpen }"
      />
      <span
        aria-hidden="true"
        class="block absolute h-0.5 w-5 bg-current transform transition duration-200 ease-in-out"
        :class="{'opacity-0': menuOpen } "
      />
      <span
        aria-hidden="true"
        class="block absolute h-0.5 w-5 bg-current transform transition duration-200 ease-in-out"
        :class="{'-rotate-45': menuOpen, ' translate-y-1.5': !menuOpen}"
      />
    </div>
  </button>
</template>


