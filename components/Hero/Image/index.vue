<template>
  <div class="h-[740px]">
    <div
      class="w-full h-full absolute top-0"
    />
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
