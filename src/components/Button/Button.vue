<template>
  <button :class="classes" @click="onClick" :disabled="disabled">
    <Icon :class="iconClasses" :name="iconName" v-if="iconName" />
    {{ label }}
  </button>
</template>

<script>
import "./button.scss";
import Icon from "../Icon/Icon";

export default {
  name: "Button",

  components: { Icon },

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
    iconName: {
      type: String,
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
    iconClasses() {
      return {
        "only-icon": !this.label && this.iconName,
        "icon-with-text": this.label && this.iconName,
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
