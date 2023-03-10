<template>
  <BaseContainer>
    <div class="flex flex-col gap-6 md:gap-[60px] py-[60px] lg:py-24 xl:py-[120px]">
      <BlogTitle
        :title="title"
        :subtitle="subtitle"
      >
        <BlogSwitchTime />
      </BlogTitle>
    </div>
  </BaseContainer>
</template>

<script>
import { activities } from '~/static/data'
import { mapGetters } from 'vuex';

export default {
  name: 'ActivitiesPage',
  computed: {
    ...mapGetters('switchTime', ['getSelectedTime']),
  },
  data () {
    const { title, subtitle } = activities
    return {
      title,
      subtitle
    }
  },
}
</script>
