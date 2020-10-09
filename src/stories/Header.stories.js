import Header from '../components/Header/Header';

export default {
  title: 'Example/Header',
  component: Header,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Header },
  template:
    '<Header :user="user" @onLogin="onLogin" @onLogout="onLogout" @onCreateAccount="onCreateAccount" />',
});

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
