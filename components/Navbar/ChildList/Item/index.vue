<template>
  <li class="grid grid-cols-[16px,auto] gap-[23px] px-3 py-[14px] transition-all hover:cursor-pointer max-w-[421px] hover:bg-[#FAFAFA] hover:rounded-lg">
    <img
      src="/icons/dome.svg"
      class="pt-[5px]"
      aria-hidden="true"
    >
    <div>
      <a :href="item.link" class="text-black leading-[26px]">
        {{ item.title }}
      </a>
      <p class="text-xs leading-5 text-[#616161]">
        {{ item.description }}
      </p>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
