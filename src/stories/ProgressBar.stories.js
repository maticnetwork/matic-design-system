import ProgressBar from '../components/ProgressBar/ProgressBar.vue';
import Progress from '../components/ProgressBar/Progress.vue';

export default {
    title: 'ProgressBar',
    component: ProgressBar,
    argTypes: {
    },
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { ProgressBar, Progress },
    template: `<ProgressBar>
    <Progress :left="false" status="completed" description="Approved" href="abc"/>
    <Progress status="progress" description="Deposit" />
    <Progress :right="false" description="Completed" href="def"/>
  </ProgressBar>`,
});

export const Default = Template.bind({});
Default.args = {

};
