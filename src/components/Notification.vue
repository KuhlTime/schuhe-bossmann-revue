<template>
  <div class="notification">
    <div
      class="icon"
      :style="{
          'mask-image': `url(${icon})`,
          'background-color': iconColor,
          'mask-position': 'center',
          'mask-repeat': 'no-repeat'
        }"
    ></div>
    <div class="box">
      <p class="title" :style="{ 'color': titleColor }">{{title}}</p>
      <p class="text" :style="{ 'color': textColor }">
        <slot/>
      </p>
    </div>
    <button
      v-if="closeable"
      class="cancle-btn"
      @click="close"
      :style="{ 'background-color': cancleColor, '-webkit-mask': `url(${cancleIcon}) no-repeat center`, 'mask': `url(${cancleIcon}) no-repeat center` }"
    ></button>
  </div>
</template>

<script>
export default {
  name: 'notification',
  props: {
    icon: String,
    title: String,
    duration: {
      type: Number,
      default: undefined
    },
    iconColor: {
      type: String,
      default: '#227de2'
    },
    titleColor: {
      type: String,
      default: '#000'
    },
    textColor: {
      type: String,
      default: '#000'
    },
    closeable: {
      type: Boolean,
      default: false
    },
    cancleColor: {
      type: String,
      default: '#227de2'
    }
  },
  created() {
    if (this.duration === undefined) {
      return
    }

    setTimeout(() => {
      console.log('close')
      this.close()
    }, this.duration)
  },
  data: () => {
    return {
      cancleIcon:
        'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGlkPSJvcmlnaW5hbC1pY29uIiBmaWxsPSIjMDAwMDAwIj48cGF0aCBkPSJNODYsMTcuMmMtMzcuOTk0OCwwIC02OC44LDMwLjgwNTIgLTY4LjgsNjguOGMwLDM3Ljk5NDggMzAuODA1Miw2OC44IDY4LjgsNjguOGMzNy45OTQ4LDAgNjguOCwtMzAuODA1MiA2OC44LC02OC44YzAsLTM3Ljk5NDggLTMwLjgwNTIsLTY4LjggLTY4LjgsLTY4Ljh6TTk0LjEwNjkzLDg2YzAsMCAxNy45OTY5MywxNy45OTY5MyAxOC44Nzk4NywxOC44Nzk4N2MyLjI0MTczLDIuMjQxNzMgMi4yNDE3Myw1Ljg3MDkzIDAsOC4xMDY5M2MtMi4yNDE3MywyLjI0MTczIC01Ljg3MDkzLDIuMjQxNzMgLTguMTA2OTMsMGMtMC44ODI5MywtMC44NzcyIC0xOC44Nzk4NywtMTguODc5ODcgLTE4Ljg3OTg3LC0xOC44Nzk4N2MwLDAgLTE3Ljk5NjkzLDE3Ljk5NjkzIC0xOC44Nzk4NywxOC44Nzk4N2MtMi4yNDE3MywyLjI0MTczIC01Ljg3MDkzLDIuMjQxNzMgLTguMTA2OTMsMGMtMi4yNDE3MywtMi4yNDE3MyAtMi4yNDE3MywtNS44NzA5MyAwLC04LjEwNjkzYzAuODc3MiwtMC44ODI5MyAxOC44Nzk4NywtMTguODc5ODcgMTguODc5ODcsLTE4Ljg3OTg3YzAsMCAtMTcuOTk2OTMsLTE3Ljk5NjkzIC0xOC44Nzk4NywtMTguODc5ODdjLTIuMjQxNzMsLTIuMjQxNzMgLTIuMjQxNzMsLTUuODcwOTMgMCwtOC4xMDY5M2MyLjI0MTczLC0yLjI0MTczIDUuODcwOTMsLTIuMjQxNzMgOC4xMDY5MywwYzAuODgyOTMsMC44NzcyIDE4Ljg3OTg3LDE4Ljg3OTg3IDE4Ljg3OTg3LDE4Ljg3OTg3YzAsMCAxNy45OTY5MywtMTcuOTk2OTMgMTguODc5ODcsLTE4Ljg3OTg3YzIuMjQxNzMsLTIuMjQxNzMgNS44NzA5MywtMi4yNDE3MyA4LjEwNjkzLDBjMi4yNDE3MywyLjI0MTczIDIuMjQxNzMsNS44NzA5MyAwLDguMTA2OTNjLTAuODc3MiwwLjg4MjkzIC0xOC44Nzk4NywxOC44Nzk4NyAtMTguODc5ODcsMTguODc5ODd6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4='
    }
  },
  methods: {
    close: function() {
      this.$emit('close')

      // destroy the vue listeners, etc
      // this.$destroy()

      // remove the element from the DOM
      // this.$el.parentNode.removeChild(this.$el)
    }
  }
}
</script>

<style lang="scss" scoped>
.notification {
  /* Position */
  padding: 12px 20px;

  /* Display */
  display: flex;
  box-sizing: border-box;

  /* Style */
  color: #000;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.2);
}

.icon {
  /* Display */
  min-width: 34px;
}

.box {
  /* Position */
  margin-left: 24px;

  /* Text */
  text-align: left;
}

p {
  margin: 0;
}

.title {
  font-size: 16px;
}

.text {
  line-break: normal;
  margin-top: 5px;
  font-size: 14px;
  font-family: 'Roboto';
}

.cancle-btn {
  /* Position */
  margin-left: 20px;
  margin-top: auto;
  margin-bottom: auto;

  /* Display */
  width: 32px;
  height: 32px;

  /* Style */
  border: none;

  /* Interaction */
  cursor: pointer;

  /* Animation */
  transition: all ease-in-out 80ms;

  &:hover {
    background-color: rgba(255, 255, 255, 1) !important;
  }
}
</style>
