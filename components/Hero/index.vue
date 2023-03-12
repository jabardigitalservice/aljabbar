<template>
  <div>
    <HeroImage
      :images="listImage"
      class="max-h-[480px] md:max-h-[540px] lg:max-h-[580px] xl:max-h-[720px]"
    />
  </div>
</template>

<script>
export default {
  async fetch() {
    // @todo: change this API to BE API
    this.listBanner = await this.$axios.$get('https://api.coredatajds.id/al-jabar-front-office/banner')
    this.listBanner.forEach((image, index) => {
      this.listImage.push({
        id: index + 1,
        image: image.link_banner,
        title: `Gambar Banner Ke-${index + 1}`
      })
    });
  },
  fetchOnServer: true,
  data() {
    return {
      listBanner: [],
      listImage: []
    }
  }
}
</script>
