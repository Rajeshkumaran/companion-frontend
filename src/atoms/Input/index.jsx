import React from 'react';
import { TextField } from '@fluentui/react';
import { useFluentTheme } from '@/theme';

const Input = ({ placeholder, className, errorMessage, ...rest }) => {
  const theme = useFluentTheme();
  return (
    <TextField
      placeholder={placeholder}
      className={className}
      errorMessage={errorMessage}
      styles={{
        prefix: {
          maxWidth: 32,
          height: 32,
          fontSize: theme.fonts.small.fontSize,
          marginRight: theme.spacing.s1,
          background: theme.palette.cherryRed,
          color: theme.palette.white,
        },
        fieldGroup: {
          border: `1px solid white !important`,
          '> :after': {
            display: 'none',
          },
        },
        field: {
          background: theme.palette.white,
          border: `1px solid ${theme.palette.gray1} !important`,
          boxShadow: `0px 1px 1px rgba(0,0,0, 0.05)`,
          borderRadius: `${theme.spacing.s1} !important`,
          fontSize: theme.fonts.small.fontSize,
          height: 32,
          ':focus': {
            outline: `none !important`,
          },
        },
      }}
      {...rest}
    />
  );
};
export default Input;
