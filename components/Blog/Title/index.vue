<template>
  <div>
    <NuxtLink to="/">
      <BaseButton class="bg-gray-100 text-green-600 text-sm my-[22px]">
        <template #icon-left>
          <img width="19.5" height="16" src="/icons/arrow-left.svg" alt="Icon Arrow Left">
        </template>
        Kembali
      </BaseButton>
    </NuxtLink>
    <div class="flex flex-col lg:items-center pt-6 md:pt-[60px] gap-[26px] mb-10">
      <h1 class="text-[32px] md:text-4xl font-medium leading-relaxed text-gray-900">
        {{ title }}
      </h1>
      <div class="w-32 border-2 border-green-600" />
      <p class="text-gray-700 text-xs font-light lg:text-center">
        {{ subtitle }}
      </p>
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'BlogHeading',
  props: {
    title: {
      type: String,
      required: true,
      default: ''
    },
    subtitle: {
      type: String,
      required: true,
      default: ''
    },
  },
}
</script>
