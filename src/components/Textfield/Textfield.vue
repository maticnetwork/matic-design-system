<template>
  <div class="textfield">
    <input
      :class="inputFieldClasses"
      type="text"
      :placeholder="placeholder"
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    />
    <span :class="helpTextClasses">Hint label</span>
  </div>
</template>

<script>
import "./textfield.scss";

export default {
  name: "Textfield",

  props: {
    size: {
      type: String,
      default: "medium",
      validator: function (value) {
        return ["medium", "large"].indexOf(value) !== -1;
      },
    },
    hasError: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
    },
  },

  computed: {
    inputFieldClasses() {
      return {
        "input-field": true,
        "size--large": this.size == "large",
        "size--medium": this.size == "medium",
        "has-error": this.hasError,
      };
    },
    helpTextClasses() {
      return {
        "help-text": true,
        "has-error": this.hasError,
      };
    },
  },
};
</script>
