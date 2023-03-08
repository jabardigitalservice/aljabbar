<template>
  <div class="px-2 py-[6px]">
    <!-- Parent Menu -->
    <!-- @todo: change hasChildren condition into external or internal link -->
    <button
      v-if="hasChildren"
      :class="{
        'flex px-3 py-[10px] transition-all hover:cursor-pointer hover:bg-[#FAFAFA] hover:rounded-lg hover:text-[#16A75C] items-center': true,
        'bg-[#FAFAFA] rounded-lg text-[#16A75C]': showChildren
      }"
      @click="onClick"
    >
      <div>
        {{ menu.title }}
      </div>
      <img
        v-if="hasChildren"
        src="/icons/chevron-down.svg"
        aria-hidden="true"
        class="ml-4"
      >
    </button>
    <a
      v-else
      :href="menu.link"
      target="_blank"
      class="flex px-3 py-[10px] transition-all hover:cursor-pointer hover:bg-[#FAFAFA] hover:rounded-lg hover:text-[#16A75C]"
    >
      {{ menu.title }}
    </a>
    <!-- Child Menu -->
    <NavbarChildList
      v-if="hasChildren"
      v-show="showChildren"
      :menu="menu"
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
  computed: {
    hasChildren() {
      return this.menu.items?.length > 0
    }
  },
  data() {
    return {
      currentIndex: null
    }
  },
  methods: {
    onClick() {
      this.hasChildren
        ? this.$emit('click')
        : this.$router.push('www.youtube.com')
    }
  }
}
</script>
