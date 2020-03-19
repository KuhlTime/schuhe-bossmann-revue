<template>
  <div id="welcome">
    <div class="middle-box">
      <h1>{{title}}</h1>
      <divider/>
      <h2>{{subtitle}}</h2>
    </div>
    <img src="../../assets/store.jpg" class="welcome-image">
  </div>
</template>

<script>
// TODO: use srcset to load image
import Divider from '../Divider'

export default {
  name: 'welcome',
  components: { Divider },
  props: {
    title: {
      type: String,
      default: 'Schuh- & Taschenwerkstatt'
    },
    subtitle: {
      type: String,
      default: '"seit 1972 in Düsseldorf"'
    }
  }
}
</script>

<style lang="postcss" scoped>
#welcome {
  /* Position */
  position: relative;

  /* Style */
  color: #fff;

  /* Text */
  font-family: 'Dancing Script', 'Lobster', sans-serif;
  line-height: 0; /* Gets rid of an invisible padding https://stackoverflow.com/questions/12498757/is-there-an-invisible-padding-margin-for-font-size */
}

.middle-box {
  /* Position */
  position: absolute;
  left: 50%;
  top: 50%;

  /* Transform */
  transform: translate(-50%, -50%);
}

.middle-box h1 {
  /* Position */
  margin: 0;
  margin-bottom: 8px;

  /* Text */
  line-height: 1.15;
  font-size: 2.2em;
}

.middle-box h2 {
  /* Position */
  margin: 0;
  margin-top: 16px;

  /* Text */
  line-height: 1.15;
  font-size: 1.4em;
}

.welcome-image {
  /* Display */
  width: 100%;
  height: 60vh;

  /* Display */
  align-content: center;
  object-fit: cover;
}
</style>
