import MHeader from '../components/Header/Header';

export default {
  title: 'Example/Header',
  component: MHeader,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MHeader },
  template:
    '<m-header :user="user" @onLogin="onLogin" @onLogout="onLogout" @onCreateAccount="onCreateAccount" />',
});

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
