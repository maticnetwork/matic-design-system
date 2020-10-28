import Icon from '../components/Icon/Icon.vue';

export default {
  title: 'Icon',
  component: Icon,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Icon },
  template: '<Icon v-bind="$props" />',
});

export const Login = Template.bind({});
Login.args = {
  name: 'login/metamask'
};

export const Custom = Template.bind({});
Custom.args = {
  name: 'custom/yes'
};

export const Navbar = Template.bind({});
Navbar.args = {
  name: 'navbar/back-arrow'
};

export const Monochrome = Template.bind({});
Monochrome.args = {
  name: 'monochrome/privacy-normal'
};

export const MonochromeSelected = Template.bind({});
MonochromeSelected.args = {
  name: 'monochrome/privacy-selected'
};

export const Discloser = Template.bind({});
Discloser.args = {
  name: 'discloser/top'
};

export const ProfileIcons = Template.bind({});
ProfileIcons.args = {
  name: 'profile/profile-1'
};
