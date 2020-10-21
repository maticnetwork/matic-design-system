<template>
  <div class="token-text">
    <Textfield
      type="number"
      nature="link"
      :placeholder="placeholder"
      :size="size"
    />
    <Button
      backgroundColor="#F3F4F7"
      :class="buttonClasses"
      :iconName="currencySymbol"
      iconNameRight="discloser/bottom"
      :label="currencyName"
      size="medium"
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
  },

  computed: {
    buttonClasses() {
      return {
        "select-box": true,
        "select-box--large": this.size == "large",
        "select-box--medium": this.size == "medium",
      };
    },
    buttonSize() {
      return this.size == "large" ? "medium" : "small";
    },
  },
};
</script>
