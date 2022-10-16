<template>
  <header
    class="sticky top-0
    bg-white
    flex items-center
    w-full h-12 md:h-16
    bg-white border-b-2 border-b-black"
  >
    <div class="container">
      <div class="flex items-center justify-between bg-white">
        <Hamburger class="md:hidden" />
        <Logo />
        <Navigation />
        <CartIcon />
      </div>
    </div>
  </header>
</template>
