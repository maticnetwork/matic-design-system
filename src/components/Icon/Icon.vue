<template>
  <!-- Adding html-loader with v-html to load svg inline -->
  <!-- Add error handling in future -->
  <i
    :class="classes"
    v-html="require(`!html-loader!./assets/${name}.svg`)"
    v-if="name"
  >
  </i>
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
        "profile-icon": this.name.split("/")[0] == "profile",
        "appmenu-icon": this.name.split("/")[0] == "appmenu",
      };
    },
  },
};
</script>
