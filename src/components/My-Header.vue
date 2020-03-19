<template>
  <div id="myHeader" :class="{'shadow': shadowed}">
    <div class="header">
      <h1>{{ title }}</h1>
      <ul class="navigation-list" role="navigation">
        <li
          class="desktop-link"
          v-for="item in navItems"
          :key="item.name"
          :style="{'background-color': getBackgroundColor(item)}"
        >
          <router-link :to="item.link">
            <p>{{ item.name }}</p>
          </router-link>
        </li>
      </ul>
      <menu-icon class="hamburger" v-if="!extended" @click="toggleExtended()"/>
      <x-icon class="hamburger" v-if="extended" @click="toggleExtended()"/>
    </div>
    <ul class="mobile-navigation-list" v-if="extended">
      <li
        class="mobile-link"
        v-for="item in navItems"
        :key="item.name"
        :style="{'background-color': getBackgroundColor(item)}"
        @click="extended = false"
      >
        <router-link :to="item.link">
          <p>{{ item.name }}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { MenuIcon, XIcon } from 'vue-feather-icons'

export default {
  name: 'my-header',
  components: { MenuIcon, XIcon },
  data: function() {
    return {
      extended: false
    }
  },
  props: {
    title: {
      type: String,
      default: 'SCHUHE-BOSSMANN.DE'
    },
    shadowed: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: 'rgb(44,44,44)'
    },
    defaultColor: {
      type: String,
      default: '#333'
    },
    navItems: {
      type: Array,
      default: () => {
        return [
          { name: 'Start', link: '/' },
          { name: 'Öffnungszeiten', link: '/#oeffnungszeiten' },
          { name: 'Leistungen', link: '/#leistungen' },
          { name: 'Kontakt', link: '/#kontakt' }
          // { name: 'Auftrag', link: '/auftrag' /*backgroundColor: '#fdb212'*/ } // Blue Color #45aaf2
        ]
      }
    }
  },
  methods: {
    isItemActive: function(item) {
      console.log(this.$route.path)
      return this.$route.path === item.link
    },
    getBackgroundColor: function(item) {
      if (this.isItemActive(item)) {
        return this.activeColor
      }

      return item.backgroundColor || this.defaultColor
    },
    toggleExtended() {
      this.extended = !this.extended
    }
  }
}
</script>


<style lang="postcss" scoped>
@import url('https://use.typekit.net/dlp8fll.css');

#myHeader {
  /* Position */
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;

  /* Display */
  box-sizing: border-box;

  /* Styling */
  color: #FFF;
  background-color: #3F3F3F;
  /* border-bottom: 2px solid #fdb212; */

  /* Animation */
  transition: all ease-in-out 160ms;

  /* Interaction */
  user-select: none;
}

#myHeader.shadow {
  /* Shadow */
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.header {
  /* Position */
  position: relative;
  padding: 0 12px;

  /* Display */
  height: 52px;

  /* Flexbox */
  display: flex;
}

h1 {
  /* Positioning */
  margin: 0;

  /* Display */
  height: 52px;

  /* Text */
  font-size: 24px;
  font-family: 'bebas-neue', sans-serif;
  font-weight: 400;
  font-style: normal;
  line-height: 52px;
}

.navigation-list {
  /* Positioning */
  margin: 0;
  padding: 0;
  margin-left: auto;

  /* Display */
  height: 52px;

  /* Flex */
  display: flex;

  /* List */
  list-style: none;
}

.mobile-navigation-list {
  /* Position */
  padding: 0;
  margin: 0;

  /* Display */
  display: none;
}

.desktop-link {
  /* Positioning */
  position: relative;
  margin: 0 5px;

  /* Display */
  height: 52px !important;

  /* Styling */
  /* background-color gets set programatically */

  /* Transformation */
  transform: skewX(-12deg);

  /* Text */
  font-size: 16px;
  text-align: center;
  line-height: 52px;

  /* Animation */
  transition: ease-in-out all 160ms;
}

.desktop-link:hover {
  /* Positioning */
  padding-bottom: 1px;

  /* Display */
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;

  /* Styling */
  color: rgb(85, 61, 8);
  background-color: #FDB212 !important;
}

.desktop-link a,
.mobile-link a {
  /* Positiong */
  padding: 0 24px;

  /* Display */
  display: inline-block;
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  /* Styling */
  color: inherit;

  /* Text */
  text-decoration: none;
}

.desktop-link a p,
.mobile-link a p {
  /* Positioning */
  margin: 0;

  /* Transformation */
  transform: skewX(12deg);
}

.mobile-link a {
  /* Display */
  padding: 8px 0;
}

.hamburger {
  /* Positioning */
  position: absolute;
  right: 12px;

  /* Display */
  display: none;
  height: 100%;
  box-sizing: border-box;

  /* Interactive */
  cursor: pointer;
}

/* Mobile */
@media only screen and (max-width: 790px) {
  .header {
    /* Display */
    display: block;
  }

  h1 {
    /* Position */
    float: left;
  }

  .navigation-list {
    /* Display */
    display: none;
  }

  .mobile-navigation-list {
    /* Display */
    display: block;
  }

  .hamburger {
    /* Display */
    display: block;
  }
}
</style>
