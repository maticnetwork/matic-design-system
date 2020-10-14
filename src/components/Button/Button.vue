<template>
  <button type="button" :class="classes" @click="onClick" :style="style">
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
    backgroundColor: {
      type: String,
    },
  },

  computed: {
    classes() {
      return {
        button: true,
        "nature--primary": this.nature == "primary",
        "nature--secondary": this.nature == "secondary",
        "nature--link": this.type == "link",
        [`button--${this.size}`]: true,
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
