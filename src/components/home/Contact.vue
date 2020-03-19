<template>
  <container id="contact" max-width="700px" width="90%" center>
    <div class="header">
      <h2>Kontakt</h2>
      <div class="neumorphism text-box">
        <span class="label">Telefon:</span>
        <span class="text">0211 / 465 175</span>
      </div>
      <br>
      <div class="neumorphism text-box">
        <span class="label">Addresse:</span>
        <span class="text">Sommersstraße 23, 40476 Düsseldorf Derendorf</span>
        <span class="label">(Eingang auf der Münsterstraße)</span>
      </div>
      <div class="flex text-box">
        <div
          class="neumorphism connection-box"
          v-for="connection in connections"
          :key="connection.name"
        >
          <div class="icon" :style="{'background-image': `url(${icon[connection.type]})`}"></div>
          {{ connection.name }}
        </div>
      </div>
    </div>
    <div id="map" class="neumorphism"></div>
  </container>
</template>

<script>
import Container from '../Container'
import Divider from '../Divider'
import mapboxgl from 'mapbox-gl'

export default {
  name: 'contact',
  components: {
    Divider,
    Container
  },
  data() {
    return {
      type: ['tram', 'train', 'bus'],
      accessToken:
        'pk.eyJ1Ijoia3VobHRpbWUiLCJhIjoiY2s3MGMzbmpsMDdiaDNrbXplcGJ1amZhZyJ9.Pq2ayC6kl3Khe6v3SnPvtQ',
      mapStyle: 'mapbox://styles/kuhltime/ck73iszfy2bb51hmsdjq53sml',
      icon: {
        tram:
          'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik04NiwwYy0yNS44NDQ0OSwwIC00Mi40Mjg5MSw3LjE2NjY3IC00Mi40Mjg5MSw3LjE2NjY3Yy0xLjg3ODYyLDAuODE5OTIgLTMuMTc3MDQsMi41Nzk4OCAtMy40MDYwNyw0LjYxNjhjLTAuMjI5MDMsMi4wMzY5MiAwLjY0NjE0LDQuMDQxMjcgMi4yOTU3OCw1LjI1NzljMS42NDk2NCwxLjIxNjYzIDMuODIzMDcsMS40NjA2NiA1LjcwMTQzLDAuNjQwMTVjMCwwIDUuMzM1MjgsLTIuMzI0MzUgMTQuOTA0NDMsLTQuMTMyMDN2My42NTA1MmMtMC4wMjkyNCwyLjA2NzY1IDEuMDU3MDksMy45OTA4NyAyLjg0Myw1LjAzMzIyYzEuNzg1OTIsMS4wNDIzNiAzLjk5NDc0LDEuMDQyMzYgNS43ODA2NiwwYzEuNzg1OTIsLTEuMDQyMzYgMi44NzIyNSwtMi45NjU1OCAyLjg0MywtNS4wMzMyMnYtNS4xODQ2NGMzLjU0NzI0LC0wLjMxNDg2IDcuMjk4NTIsLTAuNTQ4NyAxMS40NjY2NywtMC41NDg3YzQuMTY4MTUsMCA3LjkxOTQzLDAuMjMzODMgMTEuNDY2NjcsMC41NDg3djUuMTg0NjRjLTAuMDI5MjQsMi4wNjc2NSAxLjA1NzA5LDMuOTkwODcgMi44NDMsNS4wMzMyMmMxLjc4NTkyLDEuMDQyMzYgMy45OTQ3NCwxLjA0MjM2IDUuNzgwNjYsMGMxLjc4NTkyLC0xLjA0MjM2IDIuODcyMjUsLTIuOTY1NTggMi44NDMsLTUuMDMzMjJ2LTMuNjUwNTJjOS41NjkxNSwxLjgwNzY5IDE0LjkwNDQyLDQuMTMyMDMgMTQuOTA0NDIsNC4xMzIwM2MyLjkwMzU5LDEuMjY3ODEgNi4yODUxOSwtMC4wNTgyNSA3LjU1MywtMi45NjE4NWMxLjI2NzgxLC0yLjkwMzU5IC0wLjA1ODI1LC02LjI4NTE5IC0yLjk2MTg1LC03LjU1M2MwLDAgLTE2LjU4NDQyLC03LjE2NjY3IC00Mi40Mjg5MSwtNy4xNjY2N3pNODYsMjguNjY2NjdjLTQ1Ljg2NjY3LDAgLTU3LjMzMzMzLDEzLjQzMzIgLTU3LjMzMzMzLDIyLjkzMzMzdjc0LjUzMzMzYzAsMTAuNTU4NjUgNy4xNzM4OCwxOS4zNjAzOSAxNi44ODY0NiwyMi4wMjYzbC03LjI0NTA1LDE4LjEwNzAzaDEzLjI5MTkzbDYuODc1NTIsLTE3LjJoNTUuMDQ4OTZsNi44NzU1MiwxNy4yaDEzLjI5MTkybC03LjI0NTA1LC0xOC4xMDcwM2M5LjcxMjU4LC0yLjY2NTkxIDE2Ljg4NjQ2LC0xMS40Njc2NSAxNi44ODY0NiwtMjIuMDI2M3YtNzQuNTMzMzNjMCwtOS41MDAxMyAtMTEuNDY2NjcsLTIyLjkzMzMzIC01Ny4zMzMzMywtMjIuOTMzMzN6TTYzLjA2NjY3LDQwLjEzMzMzaDQ1Ljg2NjY3YzMuMTY0OCwwIDUuNzMzMzMsMi41Njg1MyA1LjczMzMzLDUuNzMzMzNjMCwzLjE2NDggLTIuNTY4NTMsNS43MzMzMyAtNS43MzMzMyw1LjczMzMzaC00NS44NjY2N2MtMy4xNjQ4LDAgLTUuNzMzMzMsLTIuNTY4NTMgLTUuNzMzMzMsLTUuNzMzMzNjMCwtMy4xNjQ4IDIuNTY4NTMsLTUuNzMzMzMgNS43MzMzMywtNS43MzMzM3pNNDUuODY2NjcsNjMuMDY2NjdoODAuMjY2NjdjMy4xNjQ4LDAgNS43MzMzMywyLjU2ODUzIDUuNzMzMzMsNS43MzMzM3YyOC42NjY2N2MwLDMuMTY0OCAtMi41Njg1Myw1LjczMzMzIC01LjczMzMzLDUuNzMzMzNoLTgwLjI2NjY3Yy0zLjE2NDgsMCAtNS43MzMzMywtMi41Njg1MyAtNS43MzMzMywtNS43MzMzM3YtMjguNjY2NjdjMCwtMy4xNjQ4IDIuNTY4NTMsLTUuNzMzMzMgNS43MzMzMywtNS43MzMzM3pNODYsMTE0LjY2NjY3YzYuMzM1MzMsMCAxMS40NjY2Nyw1LjEzMTMzIDExLjQ2NjY3LDExLjQ2NjY3YzAsNi4zMzUzMyAtNS4xMzEzMywxMS40NjY2NyAtMTEuNDY2NjcsMTEuNDY2NjdjLTYuMzM1MzMsMCAtMTEuNDY2NjcsLTUuMTMxMzMgLTExLjQ2NjY3LC0xMS40NjY2N2MwLC02LjMzNTMzIDUuMTMxMzMsLTExLjQ2NjY3IDExLjQ2NjY3LC0xMS40NjY2N3oiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg==',
        train:
          'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjUwMCIgaGVpZ2h0PSI1MDAiPg0KPHRpdGxlPlMtQmFobiBMb2dvPC90aXRsZT4NCjxjaXJjbGUgZmlsbD0iIzAwNkYzNSIgY3g9IjI1MCIgY3k9IjI1MCIgcj0iMjUwIi8+DQo8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTIzMSA2MUMyMjAgNjEgMjA4IDYyIDE5NyA2NiAxNzggNzAgMTYyIDc3IDE0NyA4OSAxMTkgMTA4IDEwMiAxNDAgMTAxIDE3MyA5OSAxOTQgMTAzIDIxNiAxMTUgMjMzIDEyOCAyNTEgMTQ2IDI2NCAxNjYgMjcyIDE3OSAyNzggMTk0IDI4MyAyMDkgMjg3IDIzNCAyOTYgMjYwIDMwMCAyODQgMzEwIDMwMSAzMTUgMzE3IDMyOSAzMTcgMzQ4IDMxOSAzNzEgMjk2IDM4NyAyNzYgMzkxIDI1MiAzOTQgMjI1IDM5NSAyMDIgMzg2IDE4NiAzODEgMTcwIDM3MSAxNTUgMzYyIDE1NSAzNjIgMTU0IDM2MiAxNTQgMzYyIDE1MyAzNjEgMTM4IDM1MSAxMzYgMzUwIDEyOSAzNDUgMTA1IDMyOCAxMDMgMzI4TDEwMyAzODhDMTAzIDM4OCAxMTUgMzk2IDExOCAzOTcgMTE4IDM5OCAxNDkgNDE3IDE2NSA0MjQgMTc3IDQzMCAxODkgNDM1IDIwMSA0MzkgMjIxIDQ0NSAyNDEgNDQ3IDI2MSA0NDcgMjY5IDQ0NiAyNzcgNDQ2IDI4NSA0NDQgMzEwIDQ0MSAzMzIgNDMwIDM1MiA0MTYgMzgxIDM5NCA0MDYgMzYyIDQwOSAzMjUgNDExIDI5NiA0MDAgMjY4IDM4MSAyNDcgMzYzIDIyNyAzMzcgMjE5IDMxMiAyMTIgMjgwIDIwMyAyNDYgMTk3IDIxNSAxODQgMTk3IDE3OCAxODMgMTU5IDE4NyAxNDAgMTg5IDEyNCAyMDIgMTEzIDIxNiAxMDkgMjM1IDEwNiAyNTUgMTA2IDI3NCAxMTAgMjg5IDExMiAzMDMgMTE4IDMxNiAxMjQgMzM5IDEzNSAzNjAgMTUyIDM4MiAxNjYgMzgyIDE0NyAzODIgMTI4IDM4MiAxMDkgMzY4IDk5IDM1MyA4OSAzMzcgODIgMzIzIDc1IDMwNiA2OSAyOTAgNjYgMjcxIDYzIDI1MSA2MCAyMzEgNjF6Ii8+DQoNCjwvc3ZnPg==',
        bus:
          'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik00NS44NjY2NywxNy4yYy0xMi42NjQ5MywwIC0yMi45MzMzMywxMC4yNjg0IC0yMi45MzMzMywyMi45MzMzM3Y5Ny40NjY2N3Y1LjczMzMzdjUuNzMzMzNjMCw2LjMzNTMzIDUuMTMxMzMsMTEuNDY2NjcgMTEuNDY2NjcsMTEuNDY2NjdjNi4zMzUzMywwIDExLjQ2NjY3LC01LjEzMTMzIDExLjQ2NjY3LC0xMS40NjY2N3YtMi4xMTY0MWMxMC4yNzk5OCwxLjEzODUgMjMuNjY0ODcsMi4xMTY0MSA0MC4xMzMzMywyLjExNjQxYzE2LjQ2ODQ3LDAgMjkuODUzMzUsLTAuOTc3OTEgNDAuMTMzMzMsLTIuMTE2NDF2Mi4xMTY0MWMwLDYuMzM1MzMgNS4xMzEzMywxMS40NjY2NyAxMS40NjY2NywxMS40NjY2N2M2LjMzNTMzLDAgMTEuNDY2NjcsLTUuMTMxMzMgMTEuNDY2NjcsLTExLjQ2NjY3di01LjczMzMzdi01LjczMzMzdi05Ny40NjY2N2MwLC0xMi42NjQ5MyAtMTAuMjY4NCwtMjIuOTMzMzMgLTIyLjkzMzMzLC0yMi45MzMzM3pNNjMuMDY2NjcsMjguNjY2NjdoNDUuODY2NjdjMy4xNjQ4LDAgNS43MzMzMywyLjU2ODUzIDUuNzMzMzMsNS43MzMzM2MwLDMuMTY0OCAtMi41Njg1Myw1LjczMzMzIC01LjczMzMzLDUuNzMzMzNoLTQ1Ljg2NjY3Yy0zLjE2NDgsMCAtNS43MzMzMywtMi41Njg1MyAtNS43MzMzMywtNS43MzMzM2MwLC0zLjE2NDggMi41Njg1MywtNS43MzMzMyA1LjczMzMzLC01LjczMzMzek0zNC40LDUxLjZoMTAzLjJ2MzEuMTMwMjFjMCwyLjc3NDkzIC0xLjk1NzEyLDUuMTYyMTUgLTQuNjkxOTIsNS42NDM3NGMtNy4yNDY5MywxLjI2MTM0IC0yMi44Nzk2OCwzLjM1OTM4IC00Ni45MDgwOCwzLjM1OTM4Yy0yNC4wMjg0LDAgLTM5LjY2MTE0LC0yLjEwMzUxIC00Ni45MDgwNywtMy4zNzA1OGMtMi43MzQ4LC0wLjQ3NTg3IC00LjY5MTkzLC0yLjg1NzYxIC00LjY5MTkzLC01LjYzMjU1ek00NS44NjY2NywxMDguOTMzMzNjNi4zMzUzMywwIDExLjQ2NjY3LDUuMTMxMzMgMTEuNDY2NjcsMTEuNDY2NjdjMCw2LjMzNTMzIC01LjEzMTMzLDExLjQ2NjY3IC0xMS40NjY2NywxMS40NjY2N2MtNi4zMzUzMywwIC0xMS40NjY2NywtNS4xMzEzMyAtMTEuNDY2NjcsLTExLjQ2NjY3YzAsLTYuMzM1MzMgNS4xMzEzMywtMTEuNDY2NjcgMTEuNDY2NjcsLTExLjQ2NjY3ek0xMjYuMTMzMzMsMTA4LjkzMzMzYzYuMzM1MzMsMCAxMS40NjY2Nyw1LjEzMTMzIDExLjQ2NjY3LDExLjQ2NjY3YzAsNi4zMzUzMyAtNS4xMzEzMywxMS40NjY2NyAtMTEuNDY2NjcsMTEuNDY2NjdjLTYuMzM1MzMsMCAtMTEuNDY2NjcsLTUuMTMxMzMgLTExLjQ2NjY3LC0xMS40NjY2N2MwLC02LjMzNTMzIDUuMTMxMzMsLTExLjQ2NjY3IDExLjQ2NjY3LC0xMS40NjY2N3oiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=='
      },
      connections: [
        {
          type: 'tram',
          name: '701'
        },
        {
          type: 'tram',
          name: '704'
        },
        {
          type: 'bus',
          name: '807'
        },
        {
          type: 'bus',
          name: '834'
        },
        {
          type: 'train',
          name: 'S1'
        },
        {
          type: 'train',
          name: 'S6'
        },
        {
          type: 'train',
          name: 'S11'
        }
      ]
    }
  },
  mounted() {
    this.createMap()
  },
  methods: {
    createMap: function() {
      mapboxgl.accessToken = this.accessToken

      this.map = new mapboxgl.Map({
        container: 'map',
        style: this.mapStyle,
        minzoom: 1.3,
        center: [6.7902, 51.24558],
        zoom: 14
      })

      // Add Marker
      var popup = new mapboxgl.Popup({
        offset: 25
      }).setHTML(
        '<h3 style="font-family: \'Lobster\', sans-serif; color: #fdb212; margin: 0; font-size: 18px;">Schuhe Bossmann</h3><p style="margin: 0; margin-top: 4px; line-height: 14px;">Sommersstraße 23, Düsseldorf Derendorf</p><p style="margin: 0;">Eingang auf der Münsterstraße</p>'
      )

      new mapboxgl.Marker({
        color: '#fdb212'
      })
        .setLngLat([6.7902, 51.24558])
        .setPopup(popup)
        .addTo(this.map)

      // Add Controls
      this.map.addControl(new mapboxgl.NavigationControl())

      this.map.addControl(
        new mapboxgl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true
          },
          trackUserLocation: true
        })
      )
    }
  }
}
</script>

<style lang="scss" scoped>
#contact {
  font-family: 'Roboto', sans-serif;
  padding-top: 6vh;
  padding-bottom: 4vh;
  text-align: left;
  color: white;

  position: relative;
}

h2 {
  /* Position */
  margin-left: 12px;

  /* Text */
  font-family: 'Lobster', sans-serif;
  font-size: 22px;
  color: #fff;
  text-align: left;
}

.label {
  font-weight: 100;
  font-size: 12px;
}

.text {
  margin-left: 6px;
  font-size: 16px;
}

.neumorphism {
  display: inline-block;
  box-sizing: border-box;
  padding: 6px 12px;

  /* https://neumorphism.io/#3F3F3F */
  border-radius: 4px;
  background: #3F3F3F;
  box-shadow: 5px 5px 10px #363636, -5px -5px 10px #484848;
}

.text-box:not(:first-of-type) {
  margin-top: 12px;
}

.connection-box {
  font-size: 12px;
  text-align: center;
}

.connection-box:not(:first-of-type) {
  margin-left: 10px;
}

.icon {
  width: 18px;
  height: 18px;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  margin: 0 auto;
  margin-bottom: 6px;
}

.flex {
  display: flex;
  align-content: flex-start;
  width: 100%;
  flex-wrap: wrap;
}

#map {
  margin-top: 42px;
  width: 100%;
  height: 400px;
  padding: 0;
  color: black;
  font-family: 'Roboto', sans-serif;

  h3 {
    margin: 0;
  }
}
</style>

