import { ButtonComponent } from './Button.types';
import styles from './Button.module.scss';
import Text from '@/components/Text';
import { TextOptions } from '@/components/Text/Text.types';
import {
  concatinateClasses,
  joinClassNames,
} from '@/utils';

const Button: ButtonComponent = ({
  as: Component = 'button',
  children,
  tone = 'primary',
  variant = 'default',
  size = 'md',
}) => {
  const textFontWeight: TextOptions['fontWeight'] =
    variant === 'plain' ? 'normal' : 'medium';

  const textMarkup = children ? (
    <Text
      as='span'
      variant='p'
      fontWeight={textFontWeight}
      tone='inherit'>
      {children}
    </Text>
  ) : null;

  const classNames = joinClassNames(
    styles.button,
    styles[concatinateClasses('button', tone)],
    styles[concatinateClasses('button', variant)],
    styles[concatinateClasses('button', size)],
  );

  return (
    <Component className={classNames}>
      {textMarkup}
    </Component>
  );
};

export default Button;
