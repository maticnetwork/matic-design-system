import TokenText from '../components/TokenText/TokenText.vue';

export default {
    title: 'TokenText',
    component: TokenText,
    argTypes: {
        size: { control: { type: 'select', options: ['medium', 'large'] } },
    },
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { TokenText },
    template: '<TokenText v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
    currencyName: "MATIC",
    currencySymbol: "token/matic",
    placeholder: "0.00",
};

export const Large = Template.bind({});
Large.args = {
    currencyName: "ETHER",
    currencySymbol: "token/eth",
    size: "large",
};
