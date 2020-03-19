<template>
  <div
    class="divider"
    :style="{'background-color': color, 'background': `linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, ${color} 10%, ${color} 90%, rgba(255, 255, 255, 0) 100%)`}"
  ></div>
</template>

<script>
export default {
  name: 'divider',
  props: {
    color: {
      type: String,
      default: '#fff'
    }
  }
}
</script>

<style lang="postcss" scoped>
.divider {
  /* Position */
  margin-top: 8px;
  margin-bottom: 16px;

  /* Display */
  width: 100%;
  height: 1px;
}
</style>
