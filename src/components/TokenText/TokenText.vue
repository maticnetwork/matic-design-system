<template>
  <div class="token-text">
    <Textfield
      type="number"
      nature="link"
      :placeholder="placeholder"
      :size="size"
      :value="amount"
    />
    <div :class="rightButtonsClasses">
      <Button
        class="max-button"
        label="MAX"
        nature="link"
        @onClick="handleMaxClick"
      />
      <Button
        backgroundColor="#F3F4F7"
        class="select-box"
        :iconName="currencySymbol"
        iconNameRight="discloser/bottom"
        :label="currencyName"
        size="medium"
        @onClick="handleChooseTokenOpen"
      />
    </div>
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
  },

  computed: {
    rightButtonsClasses() {
      return {
        "right-buttons": true,
        "right-buttons--large": this.size == "large",
        "right-buttons--medium": this.size == "medium",
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
