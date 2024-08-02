import type { ElementType, ReactElement } from 'react';
import type { PolymorphicComponent } from '@/types';

type DefaultAsTag = 'button';
type ValidAsTags = 'button' | 'a';

type ButtonOptions = {
  tone?:
    | 'primary'
    | 'accent'
    | 'danger'
    | 'success'
    | 'warning';
  variant?: 'default' | 'outline' | 'plain';
  size?: 'sm' | 'md' | 'lg' | 'slim';
};

type ButtonProps<
  E extends ElementType,
  Props = ButtonOptions,
> = PolymorphicComponent<E, Props>;

type ButtonComponent = <
  E extends ElementType<any, ValidAsTags> = DefaultAsTag,
>(
  props: ButtonProps<E>,
) => ReactElement;

export type { ButtonComponent };
