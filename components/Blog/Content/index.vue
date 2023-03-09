<template>
  <div>
    <div
      class="flex flex-col lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-32"
      v-for="item in data"
      :key="item.id"
    >
      <div v-if="item.isImageFirst" class="bg-gray-100 w-[328px] h-[200px] md:w-[700px] md:h-[400px] lg:w-[476px] lg:h-[300px] xl:w-[624px] xl:h-[400px]" />
      <div class="flex flex-col justify-center gap-6 md:gap-8">
        <h2 class="text-gray-900 text-[32px] md:text-4xl font-medium leading-relaxed">
          {{ item.title }}
        </h2>
        <p class="text-gray-800 text-sm font-normal w-full">
          {{ item.content }}
        </p>
      </div>
      <!-- TODO: replace div below with image when available -->
      <div v-if="!item.isImageFirst" class="bg-gray-100 w-[328px] h-[200px] md:w-[700px] md:h-[400px] lg:w-[476px] lg:h-[300px] xl:w-[624px] xl:h-[400px]" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogContent',
  props: {
    data: {
      type: Array,
      required: true,
      default: () => []
    },
  },
}
</script>
