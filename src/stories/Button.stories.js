import PButton from "../components/Button/Button.vue";

export default {
  title: "Button",
  component: PButton,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: [null, "primary", "secondary", "success", "warning", "error"],
      },
    },
    size: { control: { type: "select", options: ["sm", "md", "lg"] } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { PButton },
  template: `<p-button @onClick="onClick" v-bind="$props">${args.label} Button</p-button>`,
});

// note: there is no label prop. We are using slot to pass the button text.

export const Default = Template.bind({});
Default.args = {
  label: "Default",
};

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  label: "Primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  label: "Secondary",
};

export const Success = Template.bind({});
Success.args = {
  variant: "success",
  label: "Success",
};

export const Warning = Template.bind({});
Warning.args = {
  variant: "warning",
  label: "Warning",
};

export const Error = Template.bind({});
Error.args = {
  variant: "error",
  label: "Error",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: "Disabled",
};

export const Large = Template.bind({});
Large.args = {
  size: "lg",
  variant: "primary",
  label: "Large",
};

export const Small = Template.bind({});
Small.args = {
  size: "sm",
  variant: "primary",
  label: "Small",
};

export const Block = Template.bind({});
Block.args = {
  variant: "primary",
  block: true,
  label: "Block",
};
