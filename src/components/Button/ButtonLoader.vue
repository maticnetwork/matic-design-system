<template>
  <Button v-bind="$attrs" :disabled="loading" @onClick="onClick">
    <div v-if="loading" :class="classes"></div>
  </Button>
</template>

<script>
import "./buttonLoader.scss";
import Button from "./Button";

export default {
  name: "ButtonLoader",

  components: { Button },

  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    classes() {
      return {
        "m-spinner": true,
        "with-text": this.$attrs.label,
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
