<template>
  <BaseContainer>
    <div class="flex flex-col gap-10 md:gap-[60px] lg:gap-[120px] py-[60px] lg:py-20 xl:py-[120px]">
      <BlogTitle
        :title="title"
        :subtitle="subtitle"
      />
      <BlogContent
        v-for="item in data.slice(0,2)"
        :key="item.id"
        :data="item"
      />
      <div class="w-full flex justify-center">
        <p class="text-gray-800 text-sm font-normal w-full break-words lg:text-center max-w-[1061.5px]">
          {{ footnote }}
        </p>
      </div>
      <BlogContent
        v-for="item in data.slice(-3)"
        :key="item.id"
        :data="item"
      />
    </div>
  </BaseContainer>
</template>

<script>
import { profile } from '~/static/data'

export default {
  name: 'HistoriesPage',
  data () {
    const { title, subtitle, data, footnote } = profile.histories
    return {
      title,
      subtitle,
      data,
      footnote
    }
  }
}
</script>
