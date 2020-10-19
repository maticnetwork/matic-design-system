import Button from '../components/Button/Button.vue';

export default {
  title: 'Button (includes Icons)',
  component: Button,
  argTypes: {
    nature: { control: { type: 'select', options: [null, 'primary', 'secondary', 'link'] } },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
    variant: { control: { type: 'select', options: [null, 'pill'] } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Button },
  template: '<Button @onClick="onClick" v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  label: 'Button',
};

export const Primary = Template.bind({});
Primary.args = {
  nature: "primary",
  label: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  nature: "secondary",
  label: 'Secondary Button',
};

export const Link = Template.bind({});
Link.args = {
  nature: "link",
  label: 'Button Link',
};

export const PrimaryWithIcon = Template.bind({});
PrimaryWithIcon.args = {
  nature: "primary",
  label: 'Button',
  iconName: 'login/metamask',
};

export const OnlyIcon = Template.bind({});
OnlyIcon.args = {
  iconName: 'login/metamask'
};

export const OnlyIconPill = Template.bind({});
OnlyIconPill.args = {
  iconName: 'login/metamask',
  variant: "pill",
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
