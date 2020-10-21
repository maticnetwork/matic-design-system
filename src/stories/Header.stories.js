import Header from '../components/Header/Header.vue';

export default {
    title: 'Header',
    component: Header,
    argTypes: {
        transactionStatus: { control: { type: 'select', options: [null, 'action', 'progress'] } },
    },
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Header },
    template: '<Header v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
    appName: 'Wallet',
    metamaskAddress: '0x2bjh34jb42bjh34jb42bjh34jb42bjh34jb4',
    transactionCount: 2,
    transactionStatus: 'progress',
    transactionText: 'Action In Progress',
};

export const Pending = Template.bind({});
Pending.args = {
    appName: 'Wallet',
    metamaskAddress: '0x2bjh34jb42bjh34jb42bjh34jb42bjh34jb4',
    transactionCount: 2,
    transactionStatus: 'action',
    transactionText: 'Action Required',
};

export const NoCount = Template.bind({});
NoCount.args = {
    appName: 'Wallet',
    metamaskAddress: '0x2bjh34jb42bjh34jb42bjh34jb42bjh34jb4',
    transactionStatus: 'action',
    transactionText: 'Action Required',
};

export const NoMetamaskAddress = Template.bind({});
NoMetamaskAddress.args = {
    appName: 'Wallet',
};
