<template>
  <container width="90%" max-width="700px" center>
    <div class="flex">
      <router-link
        v-for="link in links"
        v-if="!link.external"
        :to="link.href"
        :key="link.title"
      >{{ link.title }}</router-link>

      <a
        v-for="link in links"
        v-if="link.external"
        :key="link.href"
        :href="link.title"
        target="_blank"
        rel="noopener noreferrer"
      >{{ link.title }}</a>
    </div>
    <div class="development-info">
      <p class="caption">Designed and Developed by:</p>
      <a href="https://kuhlti.me">© André Kuhlmann 2020</a>
    </div>
  </container>
</template>

<script>
import Container from '../Container'

export default {
  name: 'MyFooter',
  components: { Container },
  data: () => {
    return {
      links: [
        {
          title: 'Impressum',
          href: 'impressum'
        },
        /*{
          title: 'Auftragsstatus',
          href: 'auftrag'
        },*/
        {
          title: 'Google Maps',
          href: 'https://g.page/schuhe-bossmann',
          external: true
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.flex {
  width: 100%;
  justify-content: space-evenly;
}

a {
  text-decoration: none;
  transition: all ease-in-out 120ms;
  padding: 4px 8px;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
}

a:hover {
  color: #fdb212;
}

.development-info {
  font-family: 'Roboto', Helvetica, sans-serif;
  color: #888;
  margin: 20px 0;
  padding: 6px 8px;

  display: inline-block;
}

p.caption {
  margin: 0;
  font-size: 12px;
}
</style>
