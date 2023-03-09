<template>
    <div class="flex flex-col gap-6 md:flex-row pt-7">
      <div v-for="(menu, index) in menus" :key="index" class="flex flex-col p-2 gap-2">
        <NuxtLink :to="menu.link">
          <div @click="$emit('click')">
            <h1 class="font-roboto text-[#212121] text-base font-medium">
              {{ menu.title }}
            </h1>
            <p class="text-[#616161] text-xs">
              {{ menu.description }}
            </p>
          </div>
        </NuxtLink>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    menus: {
      type: Array,
      default: () => ([])
    }
  }
}
</script>
