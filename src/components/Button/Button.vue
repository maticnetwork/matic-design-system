<template>
  <button :class="classes" @click="onClick" :style="style" :disabled="disabled">
    {{ label }}
  </button>
</template>

<script>
import "./button.scss";

export default {
  name: "Button",

  props: {
    label: {
      type: String,
      required: true,
    },
    nature: {
      type: String,
      validator: function (value) {
        return ["primary", "secondary", "link"].indexOf(value) !== -1;
      },
    },
    size: {
      type: String,
      default: "medium",
      validator: function (value) {
        return ["small", "medium", "large"].indexOf(value) !== -1;
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    variant: {
      type: String,
      validator: function (value) {
        return ["pill"].indexOf(value) !== -1;
      },
    },
  },

  computed: {
    classes() {
      return {
        button: true,
        "nature--primary": this.nature == "primary",
        "nature--secondary": this.nature == "secondary",
        "nature--link": this.nature == "link",
        [`size--${this.size}`]: true,
        "variant--pill": this.variant == "pill",
      };
    },
    style() {
      return {
        backgroundColor: this.backgroundColor,
      };
    },
  },

  methods: {
    onClick() {
      this.$emit("onClick");
    },
  },
};
</script>
