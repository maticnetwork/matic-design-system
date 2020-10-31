<template>
  <div class="textfield">
    <Icon :class="iconLeftClasses" :name="iconLeft" />
    <input
      :class="inputFieldClasses"
      :placeholder="placeholder"
      :type="type"
      v-bind:value="value"
      v-on:input="handleInput($event.target.value)"
      step="0.000000000000000001"
    />
    <Icon
      :class="iconRightClasses"
      :name="iconRight"
      @onClick="handleRightIconClick"
    />
    <div class="hint-text-container">
      <span :class="hintTextClasses">{{ hintText }}</span>
      <span :class="hintTextRightClasses">{{ hintTextRight }}</span>
    </div>
  </div>
</template>

<script>
import "./textfield.scss";
import Icon from "../Icon/Icon";

export default {
  name: "Textfield",

  components: {
    Icon,
  },
  props: {
    hasError: {
      type: Boolean,
      default: false,
    },
    hintText: {
      type: String,
    },
    hintTextRight: {
      type: String,
    },
    iconLeft: {
      type: String,
    },
    iconRight: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    size: {
      type: String,
      default: "medium",
      validator: function (value) {
        return ["medium", "large"].indexOf(value) !== -1;
      },
    },
    type: {
      type: String,
      default: "text",
      validator: function (value) {
        return ["text", "number"].indexOf(value) !== -1;
      },
    },
    value: {
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
        "text-field--icon": this.iconLeft,
      };
    },
    hintTextClasses() {
      return {
        "hint-text": this.hintText,
        // "hint-text--left": this.hintText,
        "has-error": this.hasError,
      };
    },
    hintTextRightClasses() {
      return {
        "hint-text": this.hintTextRight,
        // "hint-text--right": this.hintTextRight,
        "has-error": this.hasError,
      };
    },
    iconLeftClasses() {
      return {
        [`icon-left--${this.size}`]: true,
      };
    },
    iconRightClasses() {
      return {
        [`icon-right--${this.size}`]: true,
      };
    },
  },

  methods: {
    handleInput(val) {
      this.$parent.$emit("input", val);
    },
    handleRightIconClick() {
      this.$emit("handleRightIconClick");
    },
  },
};
</script>
