import React from 'react';
import { Stack as DefaultStack } from '@fluentui/react';

const Stack = ({ children, ...restProps }) => {
  return (
    <DefaultStack
      horizontalAlign="center"
      verticalAlign="center"
      style={{ width: '100%' }}
      {...restProps}
    >
      {children}
    </DefaultStack>
  );
};
export default Stack;
