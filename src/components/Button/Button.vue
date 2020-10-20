<template>
  <button :class="classes" @click="onClick" :disabled="disabled" :style="style">
    <Icon :class="iconLeftClasses" :name="iconName" v-if="iconName" />
    {{ label }}
    <Icon class="icon-right" :name="iconNameRight" v-if="iconNameRight" />
  </button>
</template>

<script>
import "./button.scss";
import Icon from "../Icon/Icon";

export default {
  name: "Button",

  components: { Icon },

  props: {
    backgroundColor: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    iconName: {
      type: String,
    },
    iconNameRight: {
      type: String,
    },
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
    iconLeftClasses() {
      return {
        "only-icon": !this.label && this.iconName,
        "icon-with-text": this.label && this.iconName,
      };
    },
    iconRightClasses() {
      return {
        "icon-right": this.iconNameRight,
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
