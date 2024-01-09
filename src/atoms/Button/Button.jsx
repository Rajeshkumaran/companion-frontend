import React from 'react';
import { DefaultButton } from '@fluentui/react';
import { useFluentTheme } from '@/theme';
import getStyles from './Button.styles';

export const ButtonVariants = {
  Primary: 'Primary',
  Secondary: 'Secondary',
  Cancel: 'Cancel',
};

const Button = ({ variant = ButtonVariants.Default, className = '', children, ...restProps }) => {
  const theme = useFluentTheme();
  const classNames = getStyles(theme);
  if (variant === ButtonVariants.Secondary)
    return (
      <DefaultButton className={`${classNames.secondaryButton} ${className}`} {...restProps}>
        {children}
      </DefaultButton>
    );
  else if (variant === ButtonVariants.Cancel) {
    return (
      <DefaultButton className={`${classNames.cancelButton} ${className}`} {...restProps}>
        {children}
      </DefaultButton>
    );
  }
  return (
    <DefaultButton className={`${classNames.defaultButton} ${className}`} {...restProps}>
      {children}
    </DefaultButton>
  );
};
export default Button;
