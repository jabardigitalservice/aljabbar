<template>
  <div class="text-white">
    <section class="bg-[#16A75C]">
      <BaseContainer class="md:leading-[57px] pb-[200px] md:pb-[150px] xl:pb-[130px] pt-12 md:pt-[60px] md:px-0 xl:px-28 xl:pt-[80px] lg:bg-[url('/rules-background.svg')] lg:bg-right-bottom lg:bg-no-repeat lg:bg-[length:425px_255px]">
        <h1 class="font-medium text-[32px] md:text-4xl leading-[51px] mb-[26px]">
          Aturan Kunjungan Ke Masjid Raya Al Jabbar
        </h1>
        <p class="leading-7">
          Berikut adalah beberapa aturan bagi pengunjung dalam mengunjungi Masjid Raya Al Jabbar.
        </p>
      </BaseContainer>
    </section>

    <section class="flex flex-col md:flex-row px-6 gap-6 xl:justify-center -mt-40 md:-mt-28 lg:-mt-24">
      <VisitRulesCard class="xl:max-w-[515px]" />
      <VisitRulesCard prohibition class="xl:max-w-[515px]" />
    </section>
  </div>
</template>
