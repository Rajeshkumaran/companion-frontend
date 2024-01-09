/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import { Text as FluentText } from '@fluentui/react';
import * as React from 'react';

const Text = (props) => {
  const { variant = 'medium', children, ...others } = props;
  return (
    <FluentText {...others} variant={variant}>
      {children}
    </FluentText>
  );
};

export default Text;
