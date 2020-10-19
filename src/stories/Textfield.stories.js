import Textfield from '../components/Textfield/Textfield.vue';

export default {
    title: 'Textfield',
    component: Textfield,
    argTypes: {
        size: { control: { type: 'select', options: ['medium', 'large'] } },
    },
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Textfield },
    template: '<Textfield v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
    size: "medium",
    placeholder: "Edit me!",
};

export const Large = Template.bind({});
Large.args = {
    size: "large",
    placeholder: "I am large!",
};

export const Error = Template.bind({});
Error.args = {
    hasError: true,
    placeholder: "Something`s not right!",
};
