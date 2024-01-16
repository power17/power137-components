import { defineComponent } from 'vue';
export default defineComponent({
    name: 'STest',
    props: {
        msg: {
            type: String,
            default: 'test'
        }
    },
    setup(props) {
        return () => {
            return <div>{props.msg}</div>;
        };
    }
});
//# sourceMappingURL=Test.jsx.map