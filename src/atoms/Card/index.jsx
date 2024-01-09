import React from 'react';
import { useFluentTheme } from '@/theme';
import { Stack } from '@/atoms';

const Card = ({ children, className = '' }) => {
  const theme = useFluentTheme();

  return (
    <Stack
      horizontal
      styles={{
        root: {
          padding: theme.spacing.s2,
          boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
          borderRadius: theme.spacing.s2,
        },
      }}
      className={className}
      tokens={{ childrenGap: theme.spacing.s2 }}
    >
      {children}
    </Stack>
  );
};
export default Card;
