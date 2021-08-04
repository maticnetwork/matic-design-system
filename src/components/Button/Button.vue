<template>
  <button :class="classes" :disabled="disabled" @click="onClick">
    <slot />
  </button>
</template>

<script>
import "./button.scss";
export default {
  name: "PButton",

  props: {
    variant: {
      type: String,
    },
    size: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    block: {
      type: Boolean,
      default: false,
    },
    classNames: {
      type: String,
    },
  },

  methods: {
    onClick() {
      this.$emit("onClick");
    },
  },

  computed: {
    classes() {
      return {
        btn: true,
        block: this.block,
        [this.classNames]: this.classNames,
        [`${this.variant}`]: this.variant,
        sm: this.size === "sm",
        lg: this.size === "lg",
      };
    },
  },
};
</script>
