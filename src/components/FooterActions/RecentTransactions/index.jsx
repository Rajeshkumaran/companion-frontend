import React from 'react';
import { Stack, Text, GetIcon, AmountText } from '@/atoms';
import { useFluentTheme } from '@/theme';
import { useGetRecentTransactionsQuery } from '@/dataLayer/apis';
import { formatDateToLocal } from '@/utils/helpers';

const RecentTransactions = () => {
  const theme = useFluentTheme();

  const { data } = useGetRecentTransactionsQuery({ page: 1 });
  const transactions = data?.data?.transaction_list || [];
  const renderTransactions = () => {
    return transactions.map((t, index) => (
      <Stack
        key={`${t.name}-${index}`}
        horizontal
        styles={{ root: { width: '100%' } }}
        horizontalAlign='space-between'
        verticalAlign='start'
        tokens={{ childrenGap: 16 }}
      >
        <GetIcon name={t.category_name} />
        <Stack grow={2} horizontalAlign='start' verticalAlign='start' tokens={{ childrenGap: 4 }}>
          <Text variant='mediumSemibold'>{t.name}</Text>
          <Text variant='small' style={{ color: theme.palette.gray9 }}>
            {t.category_name} - {formatDateToLocal(t.transaction_date)}
          </Text>
        </Stack>
        <Stack horizontalAlign='end'>
          <AmountText transactionType={t.transaction_type} amount={t.amount} includeSign />
        </Stack>
      </Stack>
    ));
  };
  return (
    <Stack
      styles={{
        root: {
          width: '100%',
          padding: `${theme.spacing.s2} ${theme.spacing.s4}`,
        },
      }}
      tokens={{ childrenGap: 16 }}
    >
      <Stack
        horizontalAlign='space-between'
        styles={{ root: { width: '100%' } }}
        tokens={{ childrenGap: 16 }}
      >
        <Text>Transactions</Text>
      </Stack>
      <Stack tokens={{ childrenGap: 8 }}>{renderTransactions()}</Stack>
    </Stack>
  );
};

export default RecentTransactions;
