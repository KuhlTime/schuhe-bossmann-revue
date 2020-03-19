<template>
  <!-- Based on: https://dribbble.com/shots/2891453-Irish-Bar-Restaurant-landing-design -->
  <div class="time-view">
    <span class="base">{{ hour }}</span>
    <span class="index">{{ minute }}</span>
  </div>
</template>

<script>
import dayjs from 'dayjs'

export default {
  name: 'time-view',
  props: {
    time: {
      type: Object,
      default: () => {
        return dayjs()
          .set('hour', 9)
          .set('minute', 0)
      }
    }
  },
  computed: {
    hour: function() {
      return this.time.format('H')
    },
    minute: function() {
      return this.time.format('mm')
    }
  }
}
</script>

<style lang="postcss" scoped>
.time-view {
  /* Position */
  position: relative;

  /* Display */
  display: inline-block;

  /* Text */
  font-family: 'Roboto', 'Avenir', sans-serif;
}

.base {
  /* Text */
  font-size: 26px;
}

.index {
  /* Display */
  vertical-align: top;

  /* Text */
  font-size: 14px;
}
</style>
