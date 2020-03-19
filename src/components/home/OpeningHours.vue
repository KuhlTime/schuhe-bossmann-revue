<template>
  <div id="openingHours">
    <div class="content">
      <clock-icon size="1.8x"></clock-icon>
      <div class="header">
        <h2>Öffnungszeiten</h2>
        <divider/>
      </div>
      <container class="time-table" max-width="500px" center>
        <time-from-to
          v-for="time in openingHours"
          :key="time.name"
          :sub-title="time.name"
          :from="time.from"
          :to="time.to"
        />
      </container>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import { ClockIcon } from 'vue-feather-icons'
import Divider from '../Divider'
import Container from '../Container'
import TimeFromToView from './TimeFromToView'

export default {
  name: 'opening-hours',
  components: { ClockIcon, Divider, Container, 'time-from-to': TimeFromToView },
  data: () => {
    return {
      openingHours: [
        {
          name: 'Montag - Freitag',
          from: dayjs()
            .set('hour', 9)
            .set('minute', 0),
          to: dayjs()
            .set('hour', 13)
            .set('minute', 0)
        },
        {
          name: 'Samstag',
          from: dayjs()
            .set('hour', 10)
            .set('minute', 0),
          to: dayjs()
            .set('hour', 13)
            .set('minute', 0)
        }
      ]
    }
  }
}
</script>

<style lang="postcss" scoped>
#openingHours {
  /* Positon */
  padding-bottom: 60px;

  /* Style */
  color: #fff;
  background: #fdb212;
  background: linear-gradient(
    86deg,
    #ff8b00 0%,
    #fdb212 20%,
    #fdb212 80%,
    #ff8b00 100%
  );

  /* Text */
  font-family: 'Lobster', 'Avenir', sans-serif;

  /* Transform */
  transform: skewY(-4deg);
}

.content {
  /* Position */
  /* TODO: Viewport for Desktop */
  padding-top: 10vw;

  /* Reverse Transform */
  transform: skewY(4deg);

  /* Animation */
  transition: all ease-in-out 160ms;
}

@media only screen and (min-width: 1100px) {
  .content {
    padding-top: 6vw;
  }
}

.header {
  /* Position */
  margin: 0 auto;

  /* Display */
  width: 200px;
}

h2 {
  /* Text */
  font-size: 22px;
}

.time-table {
  /* Position */
  margin-top: 12px;

  /* Display */
  display: flex;
  justify-content: space-evenly;
}
</style>
