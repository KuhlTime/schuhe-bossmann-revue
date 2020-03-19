<template>
  <input
    id="numberField"
    type="number"
    ref="input"
    v-model="number"
    @keydown="replaceValue"
    @keydown.delete="deleteValue"
    :style="{ 'text-shadow': `0 0 0 ${color}`, 'outline-color': glowColor }"
  >
</template>

<script>
export default {
  name: 'number-field',
  params: ['value'],
  props: {
    color: {
      type: String,
      default: '#000'
    },
    glowColor: {
      type: String,
      default: 'white'
    }
  },
  data() {
    return {
      number: this.value,
      allowedInputs: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
      passthroughKeys: ['Tab']
    }
  },
  methods: {
    focus: function() {
      this.$refs['input'].focus()
    },
    replaceValue: function(event) {
      if (this.allowedInputs.includes(event.key)) {
        this.number = parseInt(event.key)
        this.$emit('input', this.number)

        // jump to next field
        this.next()
      } else if (event.key === 'ArrowLeft') {
        this.previous()
      } else if (event.key === 'ArrowRight') {
        this.next()
      }

      // console.dir(event)

      if (!this.passthroughKeys.includes(event.key)) {
        // setting the value gets handled by setting the value property
        // so prevent the default handling of the input
        event.preventDefault()
      }
    },
    deleteValue: function(event) {
      this.number = undefined
      this.previous()
    },
    previous: function() {
      this.$emit('previous')
    },
    next: function() {
      this.$emit('next')
    },
    deselect: function() {
      if (window.getSelection) {
        if (window.getSelection().empty) {
          // Chrome
          window.getSelection().empty()
        } else if (window.getSelection().removeAllRanges) {
          // Firefox
          window.getSelection().removeAllRanges()
        }
      } else if (document.selection) {
        // IE?
        document.selection.empty()
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
input {
  /* Position */
  margin: 0 5px;
  padding: 9px 8px;

  /* Display */
  display: inline-block;
  width: 18px;

  /* Text */
  text-align: center;
  font-size: 20px;
  font-family: 'Nunito', 'Avenir', sans-serif;

  /* Style */
  border-radius: 3px;
  border: none;

  /* Shadow */
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);

  /* Animation */
  transition: transform ease-in-out 160ms;

  /* Interaction */
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
}

input:active,
input:focus {
  /* Style */
  color: transparent;
  outline: none;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23),
    inset 0 0 6px rgba(0, 0, 0, 0.2);

  /* Transform */
  transform: scale(1.18);

  /* Interaction */
  text-decoration: none;
  user-select: none;
}

/* Remove Stepper Control */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  /* display: none; <- Crashes Chrome on hover */
  -webkit-appearance: none;
  margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}

input[type='number'] {
  -moz-appearance: textfield; /* Firefox */
}
</style>