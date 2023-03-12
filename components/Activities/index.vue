<template>
  <main class="flex lg:gap-[108px]">
    <ActivitiesFilter />
    <div class="flex flex-col gap-8">
      <ActivitiesList v-if="getSelectedTime === 'today'" />
      <!-- TODO: Update list eachDayOfWeek to check if activities is exist in that day -->
      <ActivitiesList
        v-else
        v-for="(item, index) in eachDayOfWeek"
        :key="index"
        :date="item"
      />
    </div>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
import {
  formatISODate,
  getEachDay,
  getFirstDayOfMonth,
  getFirstDayOfWeek,
  getLastDayOfMonth,
  getLastDayOfWeek,
  monthsDifference
} from '~/utils/date'

export default {
  name: 'ActivitiesComponent',
  computed: {
    ...mapGetters(
      'switchTime', ['getSelectedTime']
    ),
    startDate () {
      let firstDayOfWeek = getFirstDayOfWeek()

      if (monthsDifference(firstDayOfWeek)) {
        firstDayOfWeek = getFirstDayOfMonth()
      }

      return formatISODate(firstDayOfWeek)
    },
    endDate () {
      let lastDayOfWeek = getLastDayOfWeek()

      if (monthsDifference(lastDayOfWeek)) {
        lastDayOfWeek = getLastDayOfMonth()
      }

      return formatISODate(lastDayOfWeek)
    },
    eachDayOfWeek () {
      return getEachDay({ start: this.startDate, end: this.endDate })
    },
  }
}
</script>
