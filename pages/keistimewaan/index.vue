<template>
  <div class="px-4 py-[60px] md:px-6 lg:py-20 xl:px-20 xl:py-[120px] flex flex-col gap-10 md:gap-[60px] lg:gap-[120px]">
    <BlogTitle
      :title="title"
      :subtitle="subtitle"
    />
    <BlogContent :data="data" />
  </div>
</template>

<script>
import { profile } from '~/static/data'

export default {
  name: 'FeaturesPage',
  data () {
    const { title, subtitle, data } = profile.features
    return {
      title,
      subtitle,
      data
    }
  }
}
</script>
