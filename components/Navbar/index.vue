<template>
  <nav class="bg-white fixed top-0 left-0 right-0 py-5 z-10">
    <BaseContainer class="flex justify-between">
      <NuxtLink to="/" class="hover:cursor-pointer">
        <img
          src="@/assets/logo.svg"
          alt="Logo Al Jabbar"
          width="234"
          height="48"
        >
      </NuxtLink>
      <ul class="flex items-center gap-6 text-[#757575] text-base">
        <li
          v-for="(menu, index) in navigationMenus"
          :key="index"
        >
          <NavbarItem
            :menu="menu"
            :show-children="index === currentIndex"
            @click="toggle(menu, index)"
          />
        </li>
      </ul>
    </BaseContainer>
  </nav>
</template>

<script>
import { navigationMenus } from '@/static/data'

export default {
  data() {
    return {
      navigationMenus,
      currentIndex: null
    }
  },
  methods: {
    toggle(menu, index) {
      this.currentIndex = this.currentIndex === index && menu.items?.length
        ? null
        : index
    }
  }
}
</script>
