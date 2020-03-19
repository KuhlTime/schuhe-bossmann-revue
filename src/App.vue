<template>
  <div id="app">
    <!--<notifications></notifications>-->
    <my-header title="SCHUHE-BOSSMANN.DE" :active="$router.currentRoute" :shadowed="scrollPosition > 0"/>
    <transition name="page" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
// TODO: https://blog.kulturbanause.de/2014/09/responsive-images-srcset-sizes-adaptive/
// TODO: https://css-tricks.com/responsive-images-css/
// TODO: https://css-tricks.com/using-webp-images/

import MyHeader from './components/My-Header.vue'
import NotificationStack from './components/NotificationStack'

export default {
  name: 'App',
  components: {
    MyHeader,
    notifications: NotificationStack
  },
  computed: {
    scrollPosition: function() {
      return 5
    }
  }
}
</script>

<style>
html,
body {
  /* Positioning */
  padding: 0;

  /* Display */
  height: 100%;
  box-sizing: border-box;

  /* Styling */
  background-color: #3f3f3f;
}

#app {
  /* Display */
  position: relative;
  height: 100%;

  /* Text */
  font-family: 'Lobster', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

/* Page Fading Animation */

.page-enter-active,
.page-leave-active {
  transition: opacity 250ms, transform 250ms;
}

.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
