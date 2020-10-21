import Textfield from '../components/Textfield/Textfield.vue';

export default {
    title: 'Textfield',
    component: Textfield,
    argTypes: {
        size: { control: { type: 'select', options: ['medium', 'large'] } },
        type: { control: { type: 'select', options: ['text', 'number'] } },
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
    type: "number",

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

export const HintTexts = Template.bind({});
HintTexts.args = {
    hasError: true,
    placeholder: "Left and right hint texts!",
    hintText: "Hint text here!",
    hintTextRight: "Hint this side!",
};

export const WithIcons = Template.bind({});
WithIcons.args = {
    placeholder: "Can keep any one icon!",
    iconLeft: "navbar/search",
    iconRight: "navbar/close",
};
