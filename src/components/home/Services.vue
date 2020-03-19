<template>
  <div id="services">
    <container id="inner" max-width="700px" width="90%" center>
      <div class="header">
        <clipboard-icon size="1.8x"></clipboard-icon>
        <h2>Leistungen</h2>
        <divider class="divider" color="black"/>
      </div>
      <div class="flex">
        <div class="neumorphism service" v-for="service in services" :key="service.title">
          <div class="icon" :style="{'background-image': `url(${service.icon})`}"></div>
          <p class="title">{{ service.title }}</p>
          <divider color="black"/>
          <vue-markdown class="content">{{ service.content }}</vue-markdown>
        </div>
      </div>
    </container>
  </div>
</template>

<script>
import { ClipboardIcon } from 'vue-feather-icons'
import Divider from '../Divider'
import Container from '../Container'
import VueMarkdown from 'vue-markdown'

export default {
  name: 'services',
  components: { ClipboardIcon, Divider, Container, VueMarkdown },
  data() {
    return {
      services: [
        {
          icon:
            'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3MiIgaGVpZ2h0PSIzNiIgdmlld0JveD0iMCAwIDcyIDM2Ij48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMzRjNGM0YiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTQ5Ljc0MyA3Ljg5M2wtNC45NS00Ljk1cy0yLjA5NCAyLjc1Mi0xLjExIDUuNjk2Yy45ODMgMi45NDUgNi4wNi0uNzQ2IDYuMDYtLjc0NnoiLz48cGF0aCBmaWxsPSIjRkRCMjEyIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0yNy45OCAxOS40MzZzLTEuMjI2LTEuMDY2LS4wODMtNC45MWMxLjE0Ni0zLjg0MyAyLjIwNy02LjcwNCAyLjIwNy02LjcwNHMxLjUxNC0yLjEyNyAyLjc4NC0yLjEyN2MxLjk2MSAwIC45ODQgNC45MDUgNS44ODYgNC45MDggMCAwIDMuOTI1LS4wMDMgNS44OS0yLjk0NC43Ny0xLjE1OC45OC0xLjk2NCAyLjk0NC0xLjk2NyAxLjk2NC4wMDMgNi44NyA1Ljg5MiAxMi43NTggNy44NTMgMCAwIDMuOTI1Ljk4IDQuOTA4Ljk4Ljk4LjAwMyA0LjkwNiAwIDQuOTA2IDQuOTA2IDAgNC4wOTMtNy44NTMgNC45MDgtMTAuNzk3IDQuOTA4LTIuOTQyLjAwMy0yMC42MDkuMDAzLTIwLjYwOS4wMDNzLTguODMtLjk4LTEwLjc5NC00LjkwNnoiLz48cGF0aCBmaWxsPSIjMzMzIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0yOC40NSAyMC4xNmMuMDg4LjExLjE4Ny4yMS4yODQuMzEybDEyLjAwNy45MjYgOC44My0xMC43OTggNi44NyAzLjkyNSAxLjUxNC0yLjAxNmMtMy43MjQtMS45MTctNi44ODYtNC45NjQtOC45MDYtNi4yMzEtNi4wODQgNi42MzctMTguMTcyIDEyLjU3Ni0yMC42IDEzLjg4MnoiLz48cGF0aCBmaWxsPSIjM0YzRjNGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik03MS4xNjMgMjAuNDE0bC0uOTgzLjk4NHMtNS45MDYgNC45MDUtMTIuNzU2IDQuOTA1Yy04Ljk0Ni0uMDAzLTE5LjUgMC0yMC42MSAwLTMuOTI5IDAtOC44MzctLjk4LTguODM3LS45OGEuOTguOTggMCAwIDEtLjk4LS45ODFsLjk4My00LjkwNmMxLjk2NC45ODEgNC45MDguOTgxIDExLjc3OC45NzggMCAwIDE1LjcwMiAxLjk2NCAxOC42NDcgMS45NjQgMCAwIDguNzcyLjA2IDExLjc3OC0yLjk0NGwuOTguOTh6Ii8+PHBhdGggZmlsbD0iIzMzMyIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNNTMuNjYgMTUuODZjLS4zMzcuOTIyLjg3NSAxLjk2MyAxLjk2MyAxLjk2MyAwIDAgMTEuMTkzLjUyIDEyLjQ3NC0yLjY4NC0uMDA4LS4wMDMtLjAxNC0uMDAzLS4wMi0uMDA5YTQuNTg0IDQuNTg0IDAgMCAwLS44MDYtLjM0MmMtLjAxIDAtLjAyMi0uMDA2LS4wMy0uMDA5YTUuMjkgNS4yOSAwIDAgMC0uNzgyLS4xNzRjLS4wMDMtLjAwMi0uMDA4LS4wMDItLjAxLS4wMDVhOC4xMjkgOC4xMjkgMCAwIDAtMS4xNzUtLjA3NWMtLjk4MyAwLTQuOTA4LS45OC00LjkwOC0uOTgtMS4xNzctLjM5Mi0yLjMxMi0uOTQ4LTMuMzk3LTEuNTc1LTEuMzU3IDEuMzUxLTMuMDIyIDMuMTA1LTMuMzEgMy44OXoiLz48cGF0aCBmaWxsPSIjM0YzRjNGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0zNS41NDMgMTYuMzA0Yy0xLjc3Ni0xLjI5LTIuNzU0LTUuNzUzLTQuNjE5LTYuNjg0LS42MDUtLjMwMS0xLjMuMjczLTEuNjc5LjY2M2ExMzQuNjEgMTM0LjYxIDAgMCAwLTEuMzQ4IDQuMjQyYy0xLjE0MyAzLjg0NS4wODYgNC45MDkuMDg2IDQuOTA5LjMyMy4xNjMuNjguMjk4IDEuMDcxLjQwOCAxLjI5Ni0uNjc2IDMuNjkzLTEuOTE0IDYuNDg5LTMuNTM4eiIvPjxwYXRoIHN0cm9rZT0iI0ZEQjIxMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik01MS40MyA3LjYybC0uOTguOThtNC4yNDMgMS40MTVsLS45ODQuOTgzIi8+PHBhdGggZmlsbD0iIzMzMyIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNNDYuNjI3IDIzLjM2MWEuOTguOTggMCAwIDEtLjk4Ljk4MWwtMTAuNzk4LS4wMDNhLjk3NC45NzQgMCAwIDEtLjk4LS45OC45OC45OCAwIDAgMSAuOTgtLjk4aDEwLjc5NWMuNTQ3IDAgLjk4Ni40MzguOTgzLjk4MnoiLz48ZyBmaWxsLXJ1bGU9Im5vbnplcm8iPjxwYXRoIGZpbGw9IiNEMDAyMUIiIGQ9Ik0zNS45OTIgMzB2NGMtNC45OTYgMi0xMC45OTYgMi0xMi45OTYgMkMyMC41NCAzNiAyMCAzNCAyMCAzNCAxNSAxNyAzLjAwOCAxMyAuMDA4IDExYzAtOCA0Ljk5Ni0xMSA0Ljk5Ni0xMVMxOCAxOCAyMiAyMWM0IDMgNiAwIDYgMGw1Ljk5MiAzUzM2IDI1IDM2IDI4bC0uMDA4IDJ6Ii8+PHBhdGggZmlsbD0iIzNGM0YzRiIgZD0iTTM0LjM4NyAyOC41MTZDMzEuMzA1IDI5LjUgMjcuMjMgMzAgMjIuMjUgMzBjLTEuMzEzIDAtMi4wNjYtMS4zNzUtMi4wNzQtMS4zNzUtNC41LTExLjIzLTEzLjA2My0xNi4wMzUtMTcuNjY0LTE4LjUyMy0uODA5LS40MzQtMi4zNjQtMS4yOS0yLjM2NC0xLjI5Qy4wMjMgOS4xNzIuMDA4IDExIC4wMDggMTFzMy45OTYgOCAzLjk5NiAyNWgyVjE5czAtMyAzLTJjLjIzOC4wODIuNDQ1LjE3Ni42NTYuMjY2YTMxLjIxNSAzMS4yMTUgMCAwIDEgNi42NjggOC4wMzVjLS4wNTUtLjA3NC0uMTEtLjE1Ni0uMTY4LS4yM2EzNS45NjcgMzUuOTY3IDAgMCAxIDEuOCAzLjQ2OGMuMTMuMzA1LjI3LjU5OC4zOTUuOTFsLjA0LjA3QTQxLjI0OSA0MS4yNDkgMCAwIDEgMjAgMzRzLjU0MyAyIDMgMmMxLjk5NiAwIDcuOTk2IDAgMTIuOTkyLTJ2LTYuMjNzLjI3NC4xNDgtMS42MDUuNzQ2eiIvPjxwYXRoIGZpbGw9IiMzMzMiIGQ9Ik00LjAwNCAzNGgydjJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=',
          title: 'Wir reparieren:',
          content:
            '- Schuhe\n- Taschen\n- Koffer\n- Gürtel\n- Druckknöpfe\n- Nieten & Ösen\n- Klett & Reißverschlüsse'
        },
        {
          icon:
            'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNiIgaGVpZ2h0PSIzOCIgdmlld0JveD0iMCAwIDM2IDM4Ij48ZyBmaWxsPSJub25lIj48cGF0aCBmaWxsPSIjMzMzIiBkPSJNMjIgMjhhMiAyIDAgMCAwLTItMnYtMWEyIDIgMCAwIDAtMiAycy0zIDItMyA0IDIgMiAyIDJoM2EyIDIgMCAwIDAgMi0ydi0zeiIvPjxwYXRoIGZpbGw9IiMzRjNGM0YiIGQ9Ik0yMCAwaDl2MzhoLTl6Ii8+PHBhdGggZmlsbD0iIzMzMyIgZD0iTTMyIDZIMGMwLTIgMy0zIDMtM2wxNS0zaDEzdjJzMCAxIDEgMWg0cy0xIDMtNCAzeiIvPjxwYXRoIGZpbGw9IiNGREIyMTIiIGQ9Ik0yMiAwaDV2MzhoLTV6Ii8+PHBhdGggZmlsbD0iIzMzMyIgZD0iTTIyIDEzSDBjMCAyIDMgMyAzIDNsMTUgM2g0di02em01IDBoNHYyMGgtNHoiLz48cGF0aCBmaWxsPSIjMzMzIiBkPSJNMTggMTNoNHYyMGgtNHptMTQtNWgtM3Y1aC0ydjFoNHYtMS45OTZTMzEgMTEgMzIgMTFoNHMtMS0zLTQtM3oiLz48L2c+PC9zdmc+',
          title: 'Weiteres:',
          content: '- Weiten von Schuhen, Stiefeln und Stiefelschäften'
        },
        {
          icon:
            'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3MSIgaGVpZ2h0PSI0NiIgdmlld0JveD0iMCAwIDcxIDQ2Ij48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiNGREIyMTIiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTM3IDExdjEzLjVDMzcgMzAuODUyIDI4Ljk0MSAzNiAxOSAzNlMxIDMwLjg1MiAxIDI0LjVWMTEiLz48cGF0aCBmaWxsPSIjRjlERUE0IiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0zNyAxMS41QzM3IDUuMTQ4IDI4Ljk0MSAwIDE5IDBTMSA1LjE0OCAxIDExLjUgOS4wNTkgMjMgMTkgMjNzMTgtNS4xNDggMTgtMTEuNXpNMjYgMzJhMiAyIDAgMCAxLTIgMkgxNGEyIDIgMCAwIDEtMi0ydi0yYTIgMiAwIDAgMSAyLTJoMTBhMiAyIDAgMCAxIDIgMnYyeiIvPjxwYXRoIHN0cm9rZT0iI0Y5REVBNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0xMCAzMnMyLTEgOS0xIDkgMSA5IDEiLz48cGF0aCBmaWxsPSIjMjYzMjM4IiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0xOSA0YzcuNzMgMCAxNCAzLjM2MyAxNCA3LjQ5NkMzMyAxNS42MzYgMjYuNzMgMTkgMTkgMTlTNSAxNS42MzcgNSAxMS40OTZDNSA3LjM2MyAxMS4yNyA0IDE5IDR6Ii8+PHBhdGggZmlsbD0iIzMzMyIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMzggMTZsLTEtMS0uMzI4IDEuMzYzQzM0Ljk2IDIxLjY0OCAyNy42NzYgMjYgMTkgMjZTMy4wNCAyMS42NDggMS4zMjggMTYuMzYzTDEgMTVsLTEgMXMuNDA2IDMgMi42MSA1LjcwM2wtLjAyLS4wODJDNS40MDYgMjUuNDgxIDExLjY4OCAyOCAxOSAyOGM3LjMxMyAwIDEzLjU5NC0yLjUyIDE2LjQxLTYuMzc5bC0uMDIuMDgyQzM3LjU5NSAxOSAzOCAxNiAzOCAxNnoiLz48cGF0aCBmaWxsPSIjRkRCMjEyIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0yMCAzMWMwIC41NS0uNDUgMS0xIDFzLTEtLjQ1LTEtMSAuNDUtMSAxLTEgMSAuNDUgMSAxeiIvPjxwYXRoIGZpbGw9IiM1NDZFN0EiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTU3LjA3NCA2LjYxM2w2LjM2NCA2LjM2N0wzNy45OCAzOC40MzRsLTYuMzYzLTYuMzY0eiIvPjxwYXRoIGZpbGw9IiM1NDZFN0EiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSIjNTQ2RTdBIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTQxLjUxNiAyMi4xNzJsNy43NzcgNy43NzdNMzguNjg4IDI1bDcuNzc3IDcuNzc3bS0xMy40MzgtMi4xMmw3Ljc4MiA3Ljc4bTMuNTM1LTE5LjA5M2w3Ljc3NyA3Ljc3N20tNC45NS0xMC42MDVsNy43NzggNy43NzdNNTAgMTMuNjg4bDcuNzc3IDcuNzc3bS0yLjEyLTEzLjQzOGw3Ljc4IDcuNzgybS0xMC42MDktNC45NTRsNy43NzcgNy43ODJNMzUuODYgMjcuODI4bDcuNzc4IDcuNzc3Ii8+PHBhdGggc3Ryb2tlPSIjMzc0NzRGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTY0Ljg1MiAxNC4zOTVMNTcuMDcgNi42MTNtLTIuODI4IDIuODI4bDcuNzc4IDcuNzgybS0xNi4yNjIuNzA3bDcuNzc3IDcuNzc3bS00Ljk1LTEwLjYwNWw3Ljc3OCA3Ljc3N20tNC45NDktMTAuNjFsNy43NzcgNy43ODJtLTguNDg0IDguNDg0bC03Ljc3Ny03Ljc3N00zMS42MTMgMzIuMDdsNy43ODIgNy43ODJtLTQuOTUtMTAuNjFsNy43NzggNy43NzhtLTQuOTUtMTAuNjA2bDcuNzc4IDcuNzc3TTQwLjEgMjMuNTg2bDcuNzc4IDcuNzc3Ii8+PHBhdGggZmlsbD0iI0ZEQjIxMiIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMzUuODYgNDAuNTU5YTEgMSAwIDAgMCAwIDEuNDE0bDIuODI4IDIuODI4YTEgMSAwIDAgMCAxLjQxNCAwczcuNzc3LTQuOTUgMTYuMjYxLTEzLjQzOGM4LjQ4OS04LjQ4NCAxMy40MzgtMTYuMjYxIDEzLjQzOC0xNi4yNjFhMSAxIDAgMCAwIDAtMS40MTVsLTIuODI4LTIuODMyYTEgMSAwIDAgMC0xLjQxNCAwbC0yOS43IDI5LjcwNHoiLz48L2c+PC9zdmc+',
          title: 'Wir verkaufen:',
          content:
            '- Schuhpflegemittel\n- Schnürsenkel\n- Einlegesohlen\n- und vieles mehr ...'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
ul {
  list-style: none;
  padding-left: 12px;
  list-style: disc;
}
</style>


<style lang="scss" scoped>
#services {
  margin-top: -1px;
  padding: 8vh 0;
  color: #000;

  background: linear-gradient(
    86deg,
    #dddddd 0%,
    #eeeeee 20%,
    #eeeeee 80%,
    #dddddd 100%
  );

  /* Transform */
  transform: skewY(-4deg);
}

#inner {
  /* Transform */
  transform: skewY(4deg);
}

.header {
  color: black;
  margin-bottom: 12px;
}

h2 {
  font-size: 22px;
  color: black;
}

.divider {
  max-width: 200px;
  margin: 0 auto;
}

.neumorphism {
  box-sizing: border-box;
  padding: 6px 18px;
  margin: 24px 12px;
  width: calc(33% - 48px);
  min-width: 180px;

  /* https://neumorphism.io/#3F3F3F */
  border-radius: 4px;
  background: #eee;
  box-shadow: 5px 5px 10px #c0c0c0, -5px -5px 10px #fafafa;
}

.flex {
  position: relative;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;

  font-family: 'Roboto', 'Arial', sans-serif;
  text-align: left;
}

.icon {
  margin: calc((48px - 28px) / 2) auto;
  width: 48px;
  height: 28px;
  margin-bottom: 8px;

  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

.title {
  text-align: center;
  font-family: 'Lobster', sans-serif;
  font-weight: 500;

  margin-top: 0;
}

.content {
  font-size: 14px;
}
</style>

