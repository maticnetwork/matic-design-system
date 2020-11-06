<template>
  <!-- Adding html-loader with v-html to load svg inline -->
  <!-- Add error handling in future -->
  <i
    :class="classes"
    v-html="require(`!html-loader!./assets/${name.trim()}.svg`)"
    v-if="name"
    @click="onClick"
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
        "m-icon": true,
        "m-profile-icon": this.name.split("/")[0] == "profile",
        "m-appmenu-icon": this.name.split("/")[0] == "appmenu",
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
