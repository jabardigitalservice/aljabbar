<template>
  <section class="text-white bg-[#16A75C]">
    <BaseContainer class="flex flex-col justify-center lg:justify-start lg:flex-row lg:items-center md:leading-[57px] h-[471px] md:h-[473px] lg:h-[288px] xl:h-[328px] md:px-0 xl:px-28 md:bg-[url('/rules-background.svg')] md:bg-right-bottom md:bg-no-repeat md:bg-[length:425px_255px]">
      <!-- Next Prayer Time -->
      <div class="flex flex-col gap-2 text-[#E6F6EC] leading-[17px] md:leading-[21px] border-b lg:border-b-0 lg:border-r border-[#4DC27E] pb-4 lg:pb-[31px] lg:pr-[67px]">
        <h1 class="text-[14px] md:text-[18px]">
          Jadwal Shalat Selanjutnya
        </h1>
        <h2 class="font-bold text-[40px] md:text-[56px] leading-[48px] md:leading-[67px] text-white">
          Shalat Dzuhur
        </h2>
        <p>
          akan dimulai dalam
          <span class="font-bold text-base md:text-[20px] text-white leading-[19px] md:leading-[24px]">
            03 jam : 34 menit
          </span>
          lagi
        </p>
      </div>

      <!-- Today's Prayer Time -->
      <div class="grid grid-cols-2 md:grid-rows-2 md:grid-flow-col md:max-w-[650px] lg:max-w-none gap-7 pt-[30px] lg:pl-6 lg:pt-0">
        <div v-for="(time, index) in prayerTimes" :key="index" class="flex flex-col">
          <p class="font-roboto font-medium leading-[26px] text-white">
            {{ time.prayer }}
          </p>
          <p class="text-sm text-[#C3E9D0] leading-[23px]">
            {{ time.time }}
          </p>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>

<script>
export default {
  data() {
    return {
      // @todo: replace this dummy data
      prayerTimes: [
        {
          prayer: 'Shalat Shubuh',
          time: '04.36 WIB'
        },
        {
          prayer: 'Syuruk/Terbit',
          time: '04.36 WIB'
        },
        {
          prayer: 'Shalat Dzuhur',
          time: '04.36 WIB'
        },
        {
          prayer: 'Shalat Ashar',
          time: '04.36 WIB'
        },
        {
          prayer: 'Shalat Maghrib',
          time: '04.36 WIB'
        },
        {
          prayer: 'Shalat Isya',
          time: '04.36 WIB'
        }
      ]
    }
  }
}
</script>
