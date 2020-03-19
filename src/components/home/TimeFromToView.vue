<template>
  <div class="time-from-to">
    <p class="sub">{{ subTitle }}</p>
    <div class="times">
      <time-view :time="from" class="time"/>
      <span>-</span>
      <time-view :time="to" class="time"/>
    </div>
  </div>
</template>

<script>
import TimeView from './TimeView'

export default {
  name: 'timeFromTo',
  components: { TimeView },
  props: {
    from: Object,
    to: Object,
    subTitle: String
  }
}
</script>

<style lang="postcss" scoped>
.time {
  /* Display */
  width: 60px;
}

.times {
  /* Display */
  display: flex;
  justify-content: space-evenly;
}

span {
  /* Text */
  font-size: 26px;
  font-family: 'Roboto', 'Avenir', sans-serif;
}

.sub {
  /* Display */
  width: 100%;

  /* Style */
  color: rgba(0, 0, 0, 0.2);

  /* Text */
  text-align: center;
  font-weight: 500;
  font-family: 'Roboto', 'Avenir', sans-serif;
}
</style>

