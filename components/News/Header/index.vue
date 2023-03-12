<template>
  <div class="flex flex-col">
    <div class="flex justify-between items-center">
      <div class="flex flex-col">
        <h1 class="font-medium text-[#212121] text-[32px] md:text-4xl leading-[38px]">
          Berita Terkait
        </h1>
        <div class="border-t-[3px] border-[#16A75C] max-w-[128px] mt-[26px]" />
      </div>
      <BaseButton class="hidden md:block max-h-[38px] text-[#16A75C] font-bold text-sm leading-[18px] rounded-lg border-[#16A75C]">
        Lihat Semua Berita
        <template #icon-right>
          <img
            src="/icons/open-tab.svg"
            alt="Ikon buka tab baru"
            aria-hidden="true"
            width="20"
            height="20"
          >
        </template>
      </BaseButton>
    </div>
  </div>
</template>
