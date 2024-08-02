import type { PolymorphicComponent } from '@/types';
import type { ElementType, ReactElement } from 'react';

type DefaultAsTag = 'p';
type ValidAsTags = 'h1' | 'h2' | 'h3' | 'span' | 'p';

type TextOptions = {
  variant?: 'small' | 'p' | 'h1' | 'h2' | 'h3';
  tone?:
    | 'body'
    | 'primary'
    | 'danger'
    | 'success'
    | 'warning'
    | 'body-invert'
    | 'inherit';
  fontWeight?: 'light' | 'normal' | 'medium' | 'semiBold';
};

type TextProps<
  E extends ElementType,
  Props = TextOptions,
> = PolymorphicComponent<E, Props>;

type TextComponent = <
  E extends ElementType<any, ValidAsTags> = DefaultAsTag,
>(
  props: TextProps<E>,
) => ReactElement;

export type { TextComponent, TextOptions };
