<template>
  <div class="header">
    <div class="header-left">
      <MaticLogo variant="horizontal" size="header" />
      <div class="app-name">{{ appName }}</div>
    </div>
    <div class="header-right">
      <Button
        iconName="navbar/menu"
        inline
        label="Apps"
        nature="link"
        size="medium"
        variant="pill"
      />
      <Button
        backgroundColor="#F3F4F7"
        class="transaction-status"
        :class="transactionStatusClasses"
        inline
        :label="transactionText"
        size="medium"
        variant="pill"
      >
        <div class="icon-count" :class="countIconClasses">
          {{ transactionCount }}
        </div>
      </Button>
      <Button
        class="metamask-address"
        :class="metamaskAddressClasses"
        :label="shortMetamaskAddress"
        iconName="login/metamask"
        iconNameRight="discloser/bottom"
        size="medium"
        variant="pill"
        backgroundColor="#F3F4F7"
        inline
      />
      <Button
        class="login-button"
        :class="loginButtonClasses"
        iconName="navbar/qr"
        inline
        label="Login"
        nature="primary"
        variant="pill"
      />
    </div>
  </div>
</template>

<script>
import "./header.scss";
import Button from "../Button/Button";
import MaticLogo from "../MaticLogo/MaticLogo";

import { truncateString } from "../../utils";

export default {
  name: "Header",

  components: {
    Button,
    MaticLogo,
  },

  props: {
    appName: {
      type: String,
    },
    metamaskAddress: {
      type: String,
    },
    transactionCount: {
      type: Number,
      default: 0,
    },
    transactionText: {
      type: String,
    },
    transactionStatus: {
      type: String,
      default: "progress",
      validator: function (value) {
        return ["action", "progress"].indexOf(value) !== -1;
      },
    },
  },

  computed: {
    countIconClasses() {
      return {
        [`status--${this.transactionStatus}`]: true,
      };
    },
    loginButtonClasses() {
      return {
        "display-none": this.metamaskAddress,
      };
    },
    metamaskAddressClasses() {
      return {
        "display-none": !this.metamaskAddress,
      };
    },
    shortMetamaskAddress() {
      return truncateString(this.metamaskAddress, 20, 5, 5);
    },
    transactionStatusClasses() {
      return {
        "display-none": !this.transactionCount || this.transactionCount <= 0,
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
