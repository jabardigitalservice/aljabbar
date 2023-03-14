<template>
  <BaseContainer class="bg-white">
    <div class="flex flex-col gap-6 md:gap-11 py-[60px] lg:py-24 xl:py-[120px]">
      <BlogTitle
        :title="`Agenda ${title}`"
        :subtitle="subtitle"
        :show-back-button="false"
      >
        <BlogSwitchTime />
      </BlogTitle>
      <ActivitiesHomeContent />
    </div>
  </BaseContainer>
</template>

<script>
import { activities } from '~/static/data'

export default {
  name: 'ActivitiesHomeComponent',
  data () {
    const { title, subtitle } = activities
    return {
      title,
      subtitle
    }
  },
}
</script>
