<template>
  <div class="m-header">
    <div class="header-left">
      <div><MaticLogo variant="horizontal" size="header" /></div>
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
              <div class="app-item-left">
                <img :src="appMenuIconPath(app.icon)" />
              </div>
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
                <img
                  class="transaction-token-icon"
                  :src="
                    transaction.token.icon
                      ? require(`./assets/tokens/${transaction.token.icon}`)
                      : ''
                  "
                  v-if="transaction.token.icon"
                />
                <span
                  class="transaction-status-text-icon"
                  v-if="!transaction.token.icon"
                >
                  {{ transaction.token.symbol.charAt(0) }}
                </span>
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
                    transactionSecondsAgoString(transaction.createdAt.seconds)
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
            <div class="profile-info-left">
              <Icon name="profile/profile-1" v-if="!userProfilePic" />
              <img
                v-if="userProfilePic"
                :src="userProfilePic"
                :alt="userFormattedAddress"
              />
            </div>
            <div class="profile-info-right">
              <div class="account-name">{{ userFormattedAddress }}</div>
              <div class="m-account-key-section">
                <div class="m-account-key" @click="copyUserAddress">
                  {{ metamaskAddress }}
                </div>
                <Icon
                  v-if="!copyAnim"
                  class="m-copy-address-animation m-copy-icon"
                  name="navbar/copy"
                />
                <Icon
                  v-if="copyAnim"
                  class="m-copy-address-animation"
                  name="custom/yes"
                />
              </div>
            </div>
          </div>
          <div class="profile-dropdown-list">
            <div class="profile-dropdown-list-item" @click="openQrCode">
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
            <nuxt-link class="nuxt-link" :to="{ name: 'index-index' }">
              <div class="profile-dropdown-list-item">
                <Icon
                  class="profile-dropdown-item-icon normal"
                  :class="profileDropdownIconNormalClasses"
                  name="monochrome/matic-normal"
                />
                <Icon
                  class="profile-dropdown-item-icon selected"
                  :class="profileDropdownIconSelectedClasses"
                  name="monochrome/matic-selected"
                />
                <span class="profile-dropdown-item-text"
                  >Matic Wallet - v1</span
                >
              </div>
            </nuxt-link>
            <div class="profile-dropdown-list-item" @click="logout">
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
            <a
              :href="maticExplorerLink"
              target="_blank"
              rel="noopener noreferrer"
            >
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
            </a>
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
    copyAnim: {
      type: Boolean,
      default: false,
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
    appMenuIconPath() {
      return (name) => require(`./assets/${name}.png`);
    },
    tokenImageIconPath(name) {
      if (name) return require(`./assets/tokens/${name}`);
      else return null;
    },
    countIconClasses() {
      return {
        [`status--${this.transactionStatus}`]: true,
        text: this.transactionCount > 0,
      };
    },
    loginButtonClasses() {
      return {
        "display-none": this.metamaskAddress,
      };
    },
    maticExplorerLink() {
      return `https://explorer.matic.network/address/${this.metamaskAddress}/transactions`;
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
        "": true,
        // "display-none": !this.transactionCount || this.transactionCount < 0,
      };
    },
    transactionStatusIconClasses() {
      return (status) =>
        [-4, -3, -7, 1, 4].includes(status) ? "" : "display-none";
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
              return "Burn transaction failed";
            case -3:
              return "Waiting for checkpoint";
            case -4:
              return "Checkpointed";
            case -5:
              return "Exit transaction completed";
            case -6:
              return "Exit transaction failed";
            case -7:
              return "Exit transaction pending";
          }
        } else if (transactionType == "deposit") {
          switch (transactionStatusCode) {
            case 4:
            case 3:
              return "Deposit pending";
            case 2:
              return "Deposit failed";
            case 1:
              return "Deposit confirmed (enroute)";
            case 0:
              return "Deposit completed";
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
    copyUserAddress() {
      this.$emit("onCopyUserAddress");
    },
    openQrCode() {
      this.$emit("onOpenQrCode");
    },
    logout() {
      this.$emit("onLogout");
    },
  },

  data() {
    return {
      appList: [
        {
          name: "Matic Bridge",
          icon: "bridge",
          description: "Deposit and withdraw between networks",
          link: { name: "bridge" },
        },
        {
          name: "Matic Wallet",
          icon: "wallet",
          description: "Send and receive crypto assets on Matic network",
          link: { name: "index-index" },
        },
        {
          name: "Matic Wallet v2",
          icon: "wallet",
          description: "Send and receive crypto assets on Matic network",
          link: { name: "index-v2" },
        },
        {
          name: "Staking",
          icon: "staking",
          description: "Stake matic and earn rewards",
          link: { name: "index-staking" },
        },
        {
          name: "Developer Portal",
          icon: "developer",
          description: "Create widget and API Webhoo for your dapps.",
          link: { name: "widgets" },
        },
        // {
        //   name: "NFT Marketplace",
        //   icon: "nftmarketplace",
        //   description: "Sell and buy unique collectibles on Matic network.",
        //   link: { name: "index-index" },
        // },
      ],
    };
  },
};
</script>
