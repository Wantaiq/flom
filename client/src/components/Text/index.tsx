import type { TextComponent } from './Text.types';
import styles from './Text.module.scss';
import { classes } from '@/utils';

const Text: TextComponent = ({
  children,
  as: Component = 'p',
  variant = 'p',
  tone = 'default',
  fontWeight,
  ...restProps
}) => {
  return (
    <Component
      className={classes(
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
