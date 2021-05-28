import ButtonLoader from '../components/Button/ButtonLoader.vue';

export default {
  title: 'ButtonLoader',
  component: ButtonLoader,
  argTypes: {
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ButtonLoader },
  template: '<ButtonLoader @onClick="onClick" v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  label: 'Not Loading',
};

export const WhenLoading = Template.bind({});
WhenLoading.args = {
  label: 'When Loading',
  loading: true,
};

