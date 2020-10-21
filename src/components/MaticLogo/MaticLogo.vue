<template>
  <!-- Adding html-loader with v-html to load svg inline -->
  <i
    :class="classes"
    v-html="
      require(`!html-loader!./assets/matic-${variant}${monochromeString}.svg`)
    "
  >
  </i>
</template>

<script>
import "./maticLogo.scss";

export default {
  name: "MaticLogo",

  props: {
    variant: {
      type: String,
      default: "symbol",
      validator: function (value) {
        return ["symbol", "horizontal"].indexOf(value) !== -1;
      },
    },
    monochrome: {
      type: String,
      validator: function (value) {
        return ["dark", "white"].indexOf(value) !== -1;
      },
    },
    size: {
      type: String,
      validator: function (value) {
        return ["header"].indexOf(value) !== -1;
      },
    },
  },

  computed: {
    classes() {
      return {
        logo: true,
        "logo--symbol": this.variant == "symbol",
        "logo--horizontal": this.variant == "horizontal",
        [`logo-size--${this.size}`]: this.size,
      };
    },
    monochromeString() {
      return this.monochrome
        ? this.monochrome == "dark"
          ? "-dark"
          : "-white"
        : "";
    },
  },
};
</script>
