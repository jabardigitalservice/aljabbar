<template>
  <div class="h-[740px]">
    <!-- @todo: discuss with IPJ team about this div
    <div
      class="w-full h-full absolute top-0"
    /> -->
    <Carousel :items="images">
      <template #filter>
        <div
          class="w-full h-full absolute top-0"
        />
      </template>
    </Carousel>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      default: () => ([])
    }
  }
}
</script>
