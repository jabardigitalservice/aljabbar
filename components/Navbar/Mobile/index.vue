<template>
  <nav class="bg-white fixed top-0 left-0 right-0 px-[24px] py-3 z-10">
    <BaseContainer class="flex justify-between">
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
        >
      </button>
      <NavbarMobileList
        v-show="showList"
        :menus="navigationMenus"
        @closeList="showList = false"
      />
    </BaseContainer>
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
