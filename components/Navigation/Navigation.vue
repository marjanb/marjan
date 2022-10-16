<script setup>
import { navLinks } from '@@/constants';
import { useShopStore } from '@@/stores/shop';
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';

const shopStore = useShopStore();
const menuOpen = computed(() => isMobileUI ? shopStore.menuOpen : shopStore.toggleMenu(true));

const route = useRoute();
const breakpoints = useBreakpoints(breakpointsTailwind);
const isMobileUI = breakpoints.smaller('md');
const menu = ref(null);

watch(route, () => (isMobileUI ? shopStore.toggleMenu(false) : null));
</script>

<template>
  <transition name="menu">
    <nav
      v-show="menuOpen"
      ref="menu"
      class="absolute left-0 right-0 bg-white border-b-2 border-black
      md:static md:flex md:items-center md:justify-center md:border-b-0 top-12"
    >
      <NuxtLink
        v-for="link in navLinks"
        :key="link.label"
        :to="link.path"
        class="block py-4 px-4 text-sm font-medium tracking-wide border-b-[1px] md:flex md:py-2 md:px-2 md:border-b-0"
      >
        {{ link.label }}
      </NuxtLink>
    </nav>
  </transition>
</template>

