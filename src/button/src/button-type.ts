import { PropType, ExtractPropTypes } from 'vue';
export type IButtonType = 'primary' | 'secondary' | 'text';
export type IButtonSize = 'large' | 'medium' | 'small';
export const buttonProps = {
  type: {
    type: String as PropType<IButtonType>,
    default: 'secondary'
  },
  size: {
    type: String as PropType<IButtonSize>,
    default: 'medium'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  block: {
    type: Boolean,
    default: false
  }
};
export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
