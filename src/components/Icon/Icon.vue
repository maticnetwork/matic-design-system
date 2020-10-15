<template>
  <!-- <div class="icon-square"> -->
  <i :class="classes"></i>
  <!-- </div> -->
</template>

<script>
import "./icon.scss";

export default {
  name: "Icon",

  props: {
    name: {
      type: String,
      required: true,
    },
  },

  computed: {
    classes() {
      return {
        icon: true,
        "nature--primary": this.nature == "primary",
        [`icon-${this.name}`]: true,
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
