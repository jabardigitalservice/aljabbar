<template>
  <div>
    <button
      v-if="hasChildren(menu)"
      :class="{
        'flex px-3 py-[10px] transition-all hover:cursor-pointer items-center w-full justify-between': true,
        'text-[#16A75C] border-b border-[#16A75C]': showChildren
      }"
      @click="$emit('click')"
    >
      <div>
        {{ menu.title }}
      </div>
      <img
        src="/icons/chevron-down.svg"
        aria-hidden="true"
        :class="{
          'transition-all -rotate-90': true,
          'rotate-0': showChildren
        }"
      >
    </button>
    <a
      v-else
      :href="menu.link"
      target="_blank"
      class="flex px-3 py-[10px] transition-all hover:cursor-pointer"
    >
      {{ menu.title }}
    </a>
    <NavbarMobileListItemChildren
      v-if="hasChildren(menu)"
      v-show="showChildren"
      :menus="menu.items"
      @click="$emit('click')"
    />
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
  methods: {
    hasChildren(menu) {
      return menu.items?.length > 0
    }
  }
}
</script>
