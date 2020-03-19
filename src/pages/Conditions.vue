<template>
  <div id="conditions">
    <container max-width="600px" width="90%" center class="content">
      <package-icon size="1.5x"/>
      <vue-markdown class="description">{{ text }}</vue-markdown>
    </container>
  </div>
</template>

<script>
import Container from '../components/Container'
import VueMarkdown from 'vue-markdown'
import { PackageIcon } from 'vue-feather-icons'
import Conditions from 'raw-loader!../data/conditions.txt'

export default {
  name: 'conditions',
  components: { Container, PackageIcon, VueMarkdown },
  data: () => {
    return {
      text: Conditions
    }
  }
}
</script>

<style lang="scss" scoped>
#conditions {
  /* Position */
  position: absolute;
  top: 52px;
  padding: 48px 24px;

  /* Display */
  width: 100%;

  /* Style */
  background-color: #fff;
}

.content {
  /* Display */
  width: 100%;
  box-sizing: border-box;

  /* Text */
  font-family: 'Roboto', sans-serif;
  text-align: center;
}

h2 {
  /* Position */
  margin: 0;
  margin-top: 12px;

  /* Text */
  font-family: 'Lobster', sans-serif;
}

p {
  /* Text */
  font-family: 'Roboto', sans-serif;
}

.description {
  /* Position */
  margin-top: 24px;
}
</style>

