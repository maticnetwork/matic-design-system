<template>
  <!-- Adding html-loader with v-html to load svg inline -->
  <i :class="classes" v-html="svg" v-if="name && svg" @click="onClick"> </i>
</template>

<script>
import "./icon.scss";

export default {
  name: "Icon",

  props: {
    name: {
      type: String,
      // required: true,
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
    svg() {
      try {
        return require(`!html-loader!./assets/${this.name.trim()}.svg`);
      } catch {
        return null;
      }
    },
  },

  methods: {
    onClick() {
      this.$emit("onClick");
    },
  },
};
</script>
