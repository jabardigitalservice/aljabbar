<template>
  <div class="px-4 py-[60px] md:px-6 lg:py-20 xl:px-20 xl:py-[120px]">
    <ProfileTitle
      :title="title"
      :subtitle="subtitle"
    />
  </div>
</template>

<script>
import { profile } from '~/static/data'

export default {
  name: 'FacilitiesPage',
  data () {
    const { title, subtitle, data } = profile.facilities
    return {
      title,
      subtitle,
      data
    }
  }
}
</script>
