import type { TextComponent } from './Text.types';
import styles from './Text.module.scss';
import { joinClassNames } from '@/utils';

const Text: TextComponent = ({
  children,
  as: Component = 'p',
  variant = 'p',
  tone = 'body',
  fontWeight,
  ...restProps
}) => {
  return (
    <Component
      className={joinClassNames(
        styles[variant],
        styles[tone],
        fontWeight && styles[fontWeight],
      )}
      {...restProps}>
      {children}
    </Component>
  );
};

export default Text;
