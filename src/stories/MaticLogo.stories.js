import MaticLogo from '../components/MaticLogo/MaticLogo.vue';

export default {
    title: 'MaticLogo',
    component: MaticLogo,
    argTypes: {
        variant: { control: { type: 'select', options: ['symbol', 'horizontal'] } },
        monochrome: { control: { type: 'select', options: [null, 'dark', 'white'] } },
        size: { control: { type: 'select', options: [null, 'header'] } },
    },
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { MaticLogo },
    template: '<MaticLogo v-bind="$props" />',
});

export const Symbol = Template.bind({});
Symbol.args = {
    variant: 'symbol',
};

export const Horizontal = Template.bind({});
Horizontal.args = {
    variant: 'horizontal',
    size: "header"
};

export const MonochromeDark = Template.bind({});
MonochromeDark.args = {
    monochrome: 'dark',
};

export const MonochromeLight = Template.bind({});
MonochromeLight.args = {
    monochrome: 'white',
};
