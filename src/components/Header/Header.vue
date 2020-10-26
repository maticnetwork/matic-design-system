<template>
  <div class="m-header">
    <div class="header-left">
      <MaticLogo variant="horizontal" size="header" />
      <div class="app-name">{{ appName }}</div>
    </div>
    <div class="header-right">
      <div class="m-dropdown">
        <Button
          class="app-button"
          iconName="navbar/menu"
          inline
          label="Apps"
          nature="link"
          size="medium"
          variant="pill"
        />
        <div class="dropdown-menu dropdown-app-menu">
          <div class="app-item" :key="app.name" v-for="app in appList">
            <nuxt-link class="nuxt-link-component" :to="app.link">
              <div class="app-item-left"><Icon :name="app.icon" /></div>
              <div class="app-item-right">
                <div class="app-item-title">{{ app.name }}</div>
                <div class="app-item-description">{{ app.description }}</div>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="m-dropdown">
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
        <div class="dropdown-menu dropdown-transaction-history">
          <div class="dropdown-header">Transaction History</div>
          <div class="dropdown-body">
            <div
              class="transaction-item"
              :key="transaction.txHash"
              v-for="transaction in transactions"
              @click="handleTransactionClick(transaction)"
            >
              <div class="transaction-item-left">
                <Icon class="transaction-token-icon" :name="transaction.icon" />
                <Icon
                  class="transaction-status-icon"
                  :name="transactionTypeIcon(transaction.type)"
                />
              </div>
              <div class="transaction-item-right">
                <div class="transaction-title">
                  <span class="transaction-type">{{ transaction.type }}</span>
                  of
                  <span class="transaction-amount"
                    >{{ transaction.amount }}
                    {{ transaction.token.symbol }}</span
                  >
                  to
                  {{ transactionTo(transaction.type) }}
                </div>
                <div class="transaction-subtitle">
                  <Icon
                    :class="transactionStatusIconClasses(transaction.status)"
                    name="custom/pending"
                  />
                  {{
                    transactionStatusText(transaction.type, transaction.status)
                  }}
                  &#183;
                  {{
                    transactionSecondsAgoString(transaction.updatedAt.seconds)
                  }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="m-dropdown">
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
        <div class="dropdown-menu dropdown-login-component">
          <div class="profile-info">
            <div class="profile-info-left"><Icon :name="userProfilePic" /></div>
            <div class="profile-info-right">
              <div class="account-name">{{ userFormattedAddress }}</div>
              <div class="account-key">{{ metamaskAddress }}</div>
            </div>
          </div>
          <div class="profile-dropdown-list">
            <div class="profile-dropdown-list-item">
              <Icon
                class="profile-dropdown-item-icon normal"
                name="monochrome/qr-code-normal"
              />
              <Icon
                class="profile-dropdown-item-icon selected"
                name="monochrome/qr-code-selected"
              />
              <span class="profile-dropdown-item-text">Show QR Code</span>
            </div>
            <div class="profile-dropdown-list-item">
              <Icon
                class="profile-dropdown-item-icon normal"
                :class="profileDropdownIconNormalClasses"
                name="monochrome/user-normal"
              />
              <Icon
                class="profile-dropdown-item-icon selected"
                :class="profileDropdownIconSelectedClasses"
                name="monochrome/user-selected"
              />
              <span class="profile-dropdown-item-text">Contacts</span>
            </div>
            <div class="profile-dropdown-list-item">
              <Icon
                class="profile-dropdown-item-icon normal"
                :class="profileDropdownIconNormalClasses"
                name="monochrome/logout-normal"
              />
              <Icon
                class="profile-dropdown-item-icon selected"
                :class="profileDropdownIconSelectedClasses"
                name="monochrome/logout-selected"
              />
              <span class="profile-dropdown-item-text">Logout</span>
            </div>
          </div>
          <div class="profile-matic-explorer">
            <div class="profile-dropdown-list-item">
              <Icon
                class="profile-dropdown-item-icon normal"
                :class="profileDropdownIconNormalClasses"
                name="monochrome/matic-explorer-normal"
              />
              <Icon
                class="profile-dropdown-item-icon selected"
                :class="profileDropdownIconSelectedClasses"
                name="monochrome/matic-explorer-selected"
              />
              <span class="profile-dropdown-item-text">Matic Explorer</span>
            </div>
          </div>
        </div>
      </div>
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
import Icon from "../Icon/Icon";

import { truncateString, timeAgo } from "../../utils";

export default {
  name: "Header",

  components: {
    Button,
    MaticLogo,
    Icon,
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
    transactions: {
      type: Array,
    },
    userFormattedAddress: {
      type: String,
    },
    userProfilePic: {
      type: String,
    },
    // onTransactionClick: {
    //   type: Function,
    // },
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
        "display-none": !this.transactionCount || this.transactionCount < 0,
      };
    },
    transactionStatusIconClasses() {
      return (status) => (status == 3 ? "" : "display-none");
    },
    transactionTypeIcon() {
      return (name) =>
        name == "withdraw" ? `transaction/out` : `transaction/in`;
    },
    transactionTo() {
      return (transactionType) =>
        transactionType == "withdraw" ? "Ethereum" : "Matic";
    },
    transactionStatusText() {
      return (transactionType, transactionStatusCode) => {
        if (transactionType == "withdraw") {
          switch (transactionStatusCode) {
            case -1:
              return "Burn transaction pending";
            case -2:
              return "Checkpointed";
            case -3:
              return "Exit transaction pending";
            case -4:
              return "Exit transaction failed";
            case -5:
              return "Exit transaction completed";
            case -6:
              return "Burn transaction failed";
            case -7:
              return "In checkpoint";
          }
        } else if (transactionType == "deposit") {
          switch (transactionStatusCode) {
            case 3:
              return "Deposit pending";
            case 2:
              return "Deposit failed";
            case 1:
              return "Deposit confirmed (enroute)";
            case 0:
              return "Depoisit completed";
          }
        }
      };
    },
    transactionSecondsAgoString() {
      return (timestamp) => timeAgo(timestamp);
    },
  },

  methods: {
    onClick() {
      this.$emit("onClick");
    },
    handleTransactionClick(tx) {
      this.$emit("onTransactionClick", tx);
    },
  },

  data() {
    return {
      appList: [
        {
          name: "Matic Bridge",
          icon: "appmenu/matic-bridge",
          description: "Deposit and withdraw between networks",
          link: { name: "bridge" },
        },
        {
          name: "Matic Wallet",
          icon: "appmenu/matic-wallet",
          description: "Send and receive crypto assets on Matic network",
          link: { name: "index-index" },
        },
        {
          name: "Staking",
          icon: "appmenu/staking",
          description: "Stake matic and earn rewards",
          link: { name: "index-staking" },
        },
        {
          name: "Developer Portal",
          icon: "appmenu/developer-portal",
          description: "Create widget and API Webhoo for your dapps.",
          link: { name: "index-developers" },
        },
        {
          name: "NFT Marketplace",
          icon: "appmenu/nft-marketplace",
          description: "Sell and buy unique collectibles on Matic network.",
          link: { name: "index-index" },
        },
      ],
    };
  },
};
</script>
