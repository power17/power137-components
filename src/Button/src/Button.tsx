import { defineComponent, toRefs } from 'vue';
import { buttonProps, ButtonProps } from './button-type';
import './button.scss';
export default defineComponent({
  name: 'SButton',
  props: buttonProps,
  setup(props: ButtonProps, { slots }) {
    const { type, size, disabled } = toRefs(props);
    return () => {
      return (
        <button
          disabled={disabled.value}
          class={`s-btn s-btn--${type.value} s-btn--${size.value}`}
        >
          {slots.default ? slots.default() : '按钮'}
        </button>
      );
    };
  }
});
