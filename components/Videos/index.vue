<template>
  <div class="bg-white py-12 md:py-[60px] xl:py-20">
    <BaseContainer>
      <VideosHeader class="mb-6 md:mb-12" />
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <VideosCard v-for="index in 4" :key="index" />
      </div>
      <BaseButton class="md:hidden max-h-[38px] w-full mt-12 text-[#16A75C] font-bold text-sm leading-[18px] rounded-lg border-[#16A75C]">
        <div class="flex justify-between w-full">
          <a href="https://www.youtube.com/@masjidaljabbar" target="_blank">
            Lihat Semua Video
          </a>
          <img
            src="/icons/open-tab.svg"
            alt="Ikon buka tab baru"
            aria-hidden="true"
            width="20"
            height="20"
          >
        </div>
      </BaseButton>
    </BaseContainer>
  </div>
</template>

<script>
export default {
// @todo: videos API data
}
</script>
