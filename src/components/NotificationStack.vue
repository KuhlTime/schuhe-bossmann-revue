<template>
  <div class="notification-stack">
    <container max-width="600px" width="90%" class="bottom">
      <notification
        v-for="item in items"
        class="notification show"
        :key="item.title"
        :icon="cookieIcon"
        :title="item.title"
        :duration="item.duration"
        titleColor="#fff"
        textColor="#fff"
        closeable
      >{{ item.text }}</notification>
    </container>
  </div>
</template>

<script>
import Container from './Container'
import Notification from './Notification'

export default {
  name: 'notification-stack',
  components: { Container, Notification },
  props: {
    items: {
      type: Array,
      default: () => {
        return [
          {
            title: '😋 Lecker Kekse ...',
            text:
              'Da wir gerne einige Statistiken unserere Webseite sammeln würden wären wir Ihnen sehr dankbar wenn Sie das speichern von Cookies erlauben würden.',
            duration: undefined
          }
        ]
      }
    }
  },
  data: () => {
    return {
      cookieIcon:
        'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiMwMDAwMDAiPjxwYXRoIGQ9Ik04NiwxNy4yYy0zNy45OTQ4LDAgLTY4LjgsMzAuODA1MiAtNjguOCw2OC44YzAsMzcuOTk0OCAzMC44MDUyLDY4LjggNjguOCw2OC44YzM3Ljk5NDgsMCA2OC44LC0zMC44MDUyIDY4LjgsLTY4LjhjMCwtMS45NDM2IC0wLjEzMDYxLC0zLjg2MzQ2IC0wLjI5MTE0LC01Ljc2NjkyYy03LjgwODgsLTAuMTMxODcgLTE0LjI5ODg1LC01LjQ3NDQ0IC0xNi4yNDgxOCwtMTIuNjk4NDRjLTEuOTgzNzMsMC43OTY5MyAtNC4xMjkzNCwxLjI2NTM2IC02LjM5NDAxLDEuMjY1MzZjLTkuNTAwMTMsMCAtMTcuMiwtNy42OTk4NyAtMTcuMiwtMTcuMmMtOS41MDAxMywwIC0xNy4yLC03LjY5OTg3IC0xNy4yLC0xNy4yYzAsLTEuMzkzMiAwLjIxMDk3LC0yLjczNTUyIDAuNTI2MywtNC4wMzEyNWMtMy43MjA5MywtMy4wOTYgLTYuMTQwMDQsLTcuNjgzMiAtNi4yMjYwNCwtMTIuODc3NmMtMS45MDkyLC0wLjE2MDUzIC0zLjgyMzMyLC0wLjI5MTE1IC01Ljc2NjkyLC0wLjI5MTE1ek0xNDMuMzMzMzMsMjIuOTMzMzNjLTMuMTY2NDMsMCAtNS43MzMzMywyLjU2NjkgLTUuNzMzMzMsNS43MzMzM2MwLDMuMTY2NDMgMi41NjY5LDUuNzMzMzMgNS43MzMzMyw1LjczMzMzYzMuMTY2NDMsMCA1LjczMzMzLC0yLjU2NjkgNS43MzMzMywtNS43MzMzM2MwLC0zLjE2NjQzIC0yLjU2NjksLTUuNzMzMzMgLTUuNzMzMzMsLTUuNzMzMzN6TTExNC42NjY2NywyOC42NjY2N2MtMy4xNjY0MywwIC01LjczMzMzLDIuNTY2OSAtNS43MzMzMyw1LjczMzMzYzAsMy4xNjY0MyAyLjU2NjksNS43MzMzMyA1LjczMzMzLDUuNzMzMzNjMy4xNjY0MywwIDUuNzMzMzMsLTIuNTY2OSA1LjczMzMzLC01LjczMzMzYzAsLTMuMTY2NDMgLTIuNTY2OSwtNS43MzMzMyAtNS43MzMzMywtNS43MzMzM3pNNjMuMDY2NjcsNDAuMTMzMzNjMy4xNjQ4LDAgNS43MzMzMywyLjU2ODUzIDUuNzMzMzMsNS43MzMzM2MwLDMuMTY0OCAtMi41Njg1Myw1LjczMzMzIC01LjczMzMzLDUuNzMzMzNjLTMuMTY0OCwwIC01LjczMzMzLC0yLjU2ODUzIC01LjczMzMzLC01LjczMzMzYzAsLTMuMTY0OCAyLjU2ODUzLC01LjczMzMzIDUuNzMzMzMsLTUuNzMzMzN6TTE1NC44LDUxLjZjLTMuMTY2NDMsMCAtNS43MzMzMywyLjU2NjkgLTUuNzMzMzMsNS43MzMzM2MwLDMuMTY2NDMgMi41NjY5LDUuNzMzMzMgNS43MzMzMyw1LjczMzMzYzMuMTY2NDMsMCA1LjczMzMzLC0yLjU2NjkgNS43MzMzMywtNS43MzMzM2MwLC0zLjE2NjQzIC0yLjU2NjksLTUuNzMzMzMgLTUuNzMzMzMsLTUuNzMzMzN6TTEwMy4yLDYzLjA2NjY3YzMuMTY0OCwwIDUuNzMzMzMsMi41Njg1MyA1LjczMzMzLDUuNzMzMzNjMCwzLjE2NDggLTIuNTY4NTMsNS43MzMzMyAtNS43MzMzMyw1LjczMzMzYy0zLjE2NDgsMCAtNS43MzMzMywtMi41Njg1MyAtNS43MzMzMywtNS43MzMzM2MwLC0zLjE2NDggMi41Njg1MywtNS43MzMzMyA1LjczMzMzLC01LjczMzMzek04MC4yNjY2Nyw3NC41MzMzM2MzLjE2NDgsMCA1LjczMzMzLDIuNTY4NTMgNS43MzMzMyw1LjczMzMzYzAsMy4xNjQ4IC0yLjU2ODUzLDUuNzMzMzMgLTUuNzMzMzMsNS43MzMzM2MtMy4xNjQ4LDAgLTUuNzMzMzMsLTIuNTY4NTMgLTUuNzMzMzMsLTUuNzMzMzNjMCwtMy4xNjQ4IDIuNTY4NTMsLTUuNzMzMzMgNS43MzMzMywtNS43MzMzM3pNNTEuNiw4NmM2LjMzNTMzLDAgMTEuNDY2NjcsNS4xMzEzMyAxMS40NjY2NywxMS40NjY2N2MwLDYuMzM1MzMgLTUuMTMxMzMsMTEuNDY2NjcgLTExLjQ2NjY3LDExLjQ2NjY3Yy02LjMzNTMzLDAgLTExLjQ2NjY3LC01LjEzMTMzIC0xMS40NjY2NywtMTEuNDY2NjdjMCwtNi4zMzUzMyA1LjEzMTMzLC0xMS40NjY2NyAxMS40NjY2NywtMTEuNDY2Njd6TTEyNi4xMzMzMyw4NmMzLjE2NDgsMCA1LjczMzMzLDIuNTY4NTMgNS43MzMzMyw1LjczMzMzYzAsMy4xNjQ4IC0yLjU2ODUzLDUuNzMzMzMgLTUuNzMzMzMsNS43MzMzM2MtMy4xNjQ4LDAgLTUuNzMzMzMsLTIuNTY4NTMgLTUuNzMzMzMsLTUuNzMzMzNjMCwtMy4xNjQ4IDIuNTY4NTMsLTUuNzMzMzMgNS43MzMzMywtNS43MzMzM3pNOTcuNDY2NjcsMTA4LjkzMzMzYzMuMTY0OCwwIDUuNzMzMzMsMi41Njg1MyA1LjczMzMzLDUuNzMzMzNjMCwzLjE2NDggLTIuNTY4NTMsNS43MzMzMyAtNS43MzMzMyw1LjczMzMzYy0zLjE2NDgsMCAtNS43MzMzMywtMi41Njg1MyAtNS43MzMzMywtNS43MzMzM2MwLC0zLjE2NDggMi41Njg1MywtNS43MzMzMyA1LjczMzMzLC01LjczMzMzek03NC41MzMzMywxMjYuMTMzMzNjMy4xNjQ4LDAgNS43MzMzMywyLjU2ODUzIDUuNzMzMzMsNS43MzMzM2MwLDMuMTY0OCAtMi41Njg1Myw1LjczMzMzIC01LjczMzMzLDUuNzMzMzNjLTMuMTY0OCwwIC01LjczMzMzLC0yLjU2ODUzIC01LjczMzMzLC01LjczMzMzYzAsLTMuMTY0OCAyLjU2ODUzLC01LjczMzMzIDUuNzMzMzMsLTUuNzMzMzN6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4='
    }
  }
}
</script>

<style lang="postcss" scoped>
.notification-stack {
  /* Position */
  position: fixed;
  z-index: 50;
  bottom: 0;

  /* Display */
  /* Hides all elements outside this notification-stack */
  overflow: hidden;

  /* Calculates the height without the navbar */
  height: calc(100% - 52px);

  width: 100%;
  box-sizing: border-box;
}

.bottom {
  /* Position */
  position: absolute;
  bottom: 24px;
  left: 50%;

  /* Transform */
  transform: translateX(-50%);
}

.notification {
  /* Position */
  bottom: -120px;

  /* Style */
  background-color: rgba(0, 0, 0, 0.4) !important;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4px);
}

.notification {
  /* Animation */
  animation-delay: 500ms;
  animation: toast 300ms forwards;
}

/* ANIMATIONS */
@keyframes toast {
  0% {
    bottom: -120px;
  }
  100% {
    bottom: 0;
    opacity: 1;
  }
}
</style>
