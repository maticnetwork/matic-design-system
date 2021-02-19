<template>
  <div :class="classes">
    <Textfield
      class="token-text-amount"
      type="number"
      nature="link"
      :placeholder="placeholder"
      :size="size"
      :value="amount"
    />
    <Button
      class="max-button"
      label="MAX"
      nature="link"
      size="small"
      v-if="showMax"
      @onClick="handleMaxClick"
    />
    <Button
      v-if="currencyName"
      backgroundColor="#F3F4F7"
      class="select-box"
      :iconName="currencySymbol"
      iconNameRight="discloser/bottom"
      :label="currencyName"
      size="medium"
      @onClick="handleChooseTokenOpen"
    />
  </div>
</template>

<script>
import "./tokenText.scss";
import Textfield from "../Textfield/Textfield";
import Button from "../Button/Button";

export default {
  name: "TokenText",
  components: {
    Textfield,
    Button,
  },

  props: {
    size: {
      type: String,
      default: "medium",
      validator: function (value) {
        return ["medium", "large"].indexOf(value) !== -1;
      },
    },
    currencySymbol: {
      type: String,
    },
    currencyName: {
      type: String,
    },
    placeholder: {
      type: String,
      default: "0.00",
    },
    amount: {
      type: String,
    },
    showMax: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    classes() {
      return {
        "token-text": true,
        "token-text--large": this.size == "large",
      };
    },
  },

  methods: {
    handleChooseTokenOpen() {
      this.$emit("handleChooseTokenOpen");
    },
    handleMaxClick() {
      this.$emit("handleMaxClick");
    },
  },
};
</script>
