<template>
  <a href="" target="_blank">
    <article class="flex flex-col group hover:cursor-pointer">
      <div class="relative overflow-hidden w-full min-h-[200px] rounded-lg mb-4">
        <div
          class="absolute w-full h-full bg-cover bg-no-repeat rounded-lg group-hover:scale-110 transition-all"
          :style="`background-image: url('${'/images/dummy-kajian.png'}')`"
        />
        <div class="absolute w-full h-full bg-[#000000]/10 flex justify-center items-center">
          <div class="transition-all bg-[#16A75C] md:bg-[#FFFFFF]/20 group-hover:bg-[#16A75C] rounded-full w-[50px] h-[50px] flex justify-center items-center">
            <img src="/icons/play.svg" alt="Ikon play" width="22" height="25">
          </div>
        </div>
        <p class="absolute right-0 bottom-0 bg-[#212121] rounded-full py-1 px-3 mr-3 mb-3 text-white">
          14:14
        </p>
      </div>
      <h2 class="font-medium leading-[26px] text-[#212121] mb-2 line-clamp-2">
        Ceramah Dzuhur Engkus Suhendar MUI Cicendo
      </h2>
      <p class="text-sm leading-[23px] text-[#757575]">
        7 jam yang lalu
      </p>
    </article>
  </a>
</template>

<script>
export default {

}
</script>
