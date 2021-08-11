<template>
  <div id="app">
    <h1>Components</h1>
    <div class="container">
      <p-button variant="primary" @onClick="btnClick">Primary</p-button>
      <p-button variant="success" size="lg">Success</p-button>
      <p-button variant="primary" block>Block</p-button>
      <p-button variant="primary" disabled>Disabled</p-button>
      <p-button variant="warning">Button</p-button>
      <p-button variant="error" size="sm" class="salil">With custom class</p-button>
      <p-button variant="error" size="sm" icon><p-icon name="login/metamask" left/>Login with Metamask</p-button>
      <p-button variant="primary" icon><p-icon name="navbar/copy" fillColor="white" left/>Connect to Metamask</p-button>
      <p-button variant="secondary" size="lg" icon><p-icon name="login/metamask" left/>Login</p-button>
    </div>
  </div>
</template>

<script>
import { PButton, PIcon } from "@maticnetwork/matic-design-system";

export default {
  name: "App",
  components: {
    PButton,
    PIcon
  },
  methods: {
    btnClick: function () {
      alert("Button clicked");
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: block;

  button{
    margin: 10px;
  }
}

.salil{
  background-color: black;
}
</style>
