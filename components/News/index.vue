<template>
  <BaseContainer>
    <NewsHeader class="mb-8 md:mb-12" />
    <div class="grid grid-cols-1 lg:grid-cols-[393px,auto] xl:grid-cols-[515px,auto] lg:gap-[38px] xl:gap-[46px]">
      <NewsHeadline :news="firstNews" class="min-h-[447px] lg:min-h-full mb-[38px] lg:mb-0" />
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <NewsCard v-for="(news, index) in newsList" :key="index" :news="news" />
      </div>
    </div>
  </BaseContainer>
</template>

<script>
export default {
  async fetch() {
    const response = await this.$axios.$get('/v1/news?page=1&limit=7')
    this.firstNews = response.data[0]
    this.newsList = [...response.data]
    this.newsList.shift()
  },
  fetchOnServer: true,
  data() {
    return {
      firstNews: null,
      newsList: []
    }
  }
}
</script>
