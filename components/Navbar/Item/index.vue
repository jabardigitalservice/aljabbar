<template>
  <div class="px-2 py-[6px]">
    <!-- Parent Menu -->
    <div
      :class="{
        'flex px-3 py-[10px] transition-all hover:cursor-pointer hover:bg-[#FAFAFA] hover:rounded-lg hover:text-[#16A75C]': true,
        'bg-[#FAFAFA] rounded-lg text-[#16A75C]': showChildren
      }"
    >
      <button
        v-if="hasChildren"
        @click="$emit('click')"
      >
        {{ menu.title }}
      </button>
      <a v-else :href="menu.link">
        {{ menu.title }}
      </a>
      <img
        v-if="hasChildren"
        src="/icons/chevron-down.svg"
        aria-hidden="true"
        class="ml-4"
      >
    </div>
    <!-- Child Menu -->
    <transition name="fade" mode="out-in">
      <ul
        v-if="hasChildren"
        v-show="showChildren"
        class="absolute flex-col py-8 px-[80px] bg-white mt-6 left-0 right-0 border-t border-[#EEEEEE] border-solid"
      >
        <div class="flex justify-between mb-[38px]">
          <h1 class="font-medium text-[32px] leading-[38.4px] text-black">
            {{ menu.title }}
          </h1>
          <button
            class="hover:cursor-pointer"
            @click="$emit('click')"
          >
            <img
              src="/icons/close-circle.svg"
              aria-hidden="true"
            >
          </button>
        </div>
        <div class="flex justify-between w-full">
          <li
            v-for="(child, childIndex) in menu.items"
            :key="childIndex"
            class="grid grid-cols-[16px,auto] gap-[23px] px-3 py-[14px] hover:cursor-pointer max-w-[421px] hover:bg-[#FAFAFA] hover:rounded-lg"
          >
            <img
              src="/icons/dome.svg"
              class="pt-[5px]"
              aria-hidden="true"
            >
            <div>
              <a :href="child.link" class="text-black leading-[26px]">
                {{ child.title }}
              </a>
              <p class="text-xs leading-5 text-[#616161]">
                {{ child.description }}
              </p>
            </div>
          </li>
        </div>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    menu: {
      type: Object,
      default: () => ({})
    },
    showChildren: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    hasChildren() {
      return this.menu.items?.length > 0
    }
  },
  data() {
    return {
      currentIndex: null
    }
  }
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  @apply transition-opacity opacity-100;
}
.fade-enter,
.fade-leave-to {
  @apply opacity-0;
}
</style>
