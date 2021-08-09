import PIcon from '../components/Icon/Icon.vue';

export default {
  title: 'Icon',
  component: PIcon,
  argTypes: {
    iconFillColor: { control: { type: "color" } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { PIcon },
  template: '<p-icon v-bind="$props" :fillColor="iconFillColor"/>',
});

export const Default = Template.bind({});
Default.args = {
  name: 'new/android'
};
