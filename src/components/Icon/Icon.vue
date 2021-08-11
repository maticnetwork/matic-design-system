<template>
  <!-- Adding html-loader with v-html to load svg inline -->
  <i
    :class="classes"
    v-html="svg"
    v-if="name && svg"
    :style="{ fill: fillColor }"
  >
  </i>
</template>

<script>
import "./icon.scss";

export default {
  name: "PIcon",

  props: {
    name: {
      type: String,
      required: true,
    },
    left: {
      type: Boolean,
    },
    right: {
      type: Boolean,
    },
    fillColor: {
      type: String,
      required: false,
    },
  },

  computed: {
    classes() {
      return {
        "p-icon": true,
        left: this.left,
        right: this.right,
        "p-fillColor": !!this.fillColor,
      };
    },
    svg() {
      try {
        return require(`!html-loader!./assets/${this.name.trim()}.svg`);
      } catch {
        return null;
      }
    },
  },
};
</script>
