import Icon from '../components/Icon/Icon.vue';

export default {
  title: 'Icon',
  component: Icon,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Icon },
  template: '<Icon @onClick="onClick" v-bind="$props" />',
});

export const Login = Template.bind({});
Login.args = {
  name: 'metamask'
};

export const Custom = Template.bind({});
Custom.args = {
  name: 'yes'
};

export const Navbar = Template.bind({});
Navbar.args = {
  name: 'back-arrow'
};

export const Monochrome = Template.bind({});
Monochrome.args = {
  name: 'privacy-normal'
};

export const MonochromeSelected = Template.bind({});
MonochromeSelected.args = {
  name: 'privacy-selected'
};

export const Discloser = Template.bind({});
Discloser.args = {
  name: 'top'
};

export const ProfileIcons = Template.bind({});
ProfileIcons.args = {
  name: 'profile-1'
};
