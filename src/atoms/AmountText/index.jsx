import React from 'react';
import { useFluentTheme } from '@/theme';
import { Text } from '@/atoms';
import { CURRENCY_SYMBOL } from '@/utils/constants';

const AmountText = ({
  amount,
  currency = 'INR',
  transactionType = 'expense',
  includeSign = false,
  style,
  ...rest
}) => {
  const theme = useFluentTheme();
  return (
    <Text
      variant='mediumSemibold'
      style={{
        color: transactionType === 'expense' ? theme.palette.cherryRed : theme.palette.green2,
        ...style,
      }}
      {...rest}
    >
      {includeSign && (transactionType === 'expense' ? '-' : '+')}
      {CURRENCY_SYMBOL[currency]}
      {amount}
    </Text>
  );
};

export default AmountText;
