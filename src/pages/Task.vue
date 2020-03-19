<template>
  <div id="taskview">
    <div class="block-1">
      <div class="number-block">
        <number-field
          v-for="i in elements"
          :key="i"
          v-model="values[i-1]"
          ref="number-input"
          @next="focus(i+1)"
          @previous="focus(i-1)"
        />
      </div>
    </div>
    <button id="searchButton" type="submit">Suchen</button>
    <div class="block-2"></div>
  </div>
</template>

<script>
import NumberField from '../components/task/NumberField'

export default {
  name: 'task-view',
  components: {
    NumberField
  },
  data() {
    return {
      task: Number,
      elements: 6,
      values: []
    }
  },
  methods: {
    focus: function(element) {
      // Number to index
      element = element - 1

      if (0 <= element && element < this.elements) {
        this.$refs[`number-input`][element].focus()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#taskview {
  /* Position */
  position: relative;

  /* Display */
  height: calc(100% - 52px);

  /* Style */
  color: #fff;
  background-color: #a3a3a3;
}

.block-1 {
  /* Positioning */
  position: relative;

  /* Display */
  height: 30%;
  width: 100%;

  /* Styling */
  background: linear-gradient(180deg, #737373 0%, #3F3F3F 100%);

  /* Animation */
  transition: ease-in-out all 160ms;
}

#searchButton {
  /* Positioning */
  position: absolute;
  padding: 12px 32px;

  /* Style */
  color: #fff;
  background-color: #fdb212;
  border-radius: 3px;
  border: none;
  outline: none;
  box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.2);

  /* Text */
  font-size: 16px;
  font-weight: 400;
  font-family: 'Roboto', 'Arial', sans-serif;

  /* Interaction */
  cursor: pointer;

  /* Animation */
  transition: ease-in-out all 160ms;

  /* Transform */
  transform: translate(-50%, -50%);
}

#searchButton:hover {
  /* Style */
  box-shadow: 0px 3px 16px rgba(0, 0, 0, 0.3);
}

#searchButton:focus {
}

.number-block {
  /* Positioning */
  position: absolute;
  left: 50%;
  top: 50%;

  /* Display */
  display: flex;

  /* Transformation */
  transform: translate(-50%, -50%);
}
</style>
