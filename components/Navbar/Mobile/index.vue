<template>
  <nav class="flex bg-white justify-between fixed top-0 left-0 right-0 px-[24px] py-3 z-10">
    <NuxtLink to="/" class="hover:cursor-pointer">
      <img
        src="@/assets/logo.svg"
        alt="Logo Al Jabbar"
        width="175"
        height="36"
      >
    </NuxtLink>
    <button @click="showList = !showList">
      <img
        :src="`/icons/${menuIcon}.svg`"
        alt="Navbar Menu Button"
        class="hover:cursor-pointer transition-all"
        height="24"
        width="24"
      >
    </button>
    <NavbarMobileList
      v-show="showList"
      :menus="navigationMenus"
    />
  </nav>
</template>

<script>
import { navigationMenus } from '@/static/data'

export default {
  data() {
    return {
      navigationMenus,
      showList: false
    }
  },
  computed: {
    menuIcon() {
      return this.showList ? 'close': 'menu'
    }
  }
}
</script>
