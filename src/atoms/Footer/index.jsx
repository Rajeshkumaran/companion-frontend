import React from 'react';
import { useFluentTheme } from '@/theme';
import { Text, Stack, GetIcon } from '@/atoms';

const Footer = ({ addTransaction, showRecentTransactions, setShowProfilePane }) => {
  const theme = useFluentTheme();
  const activeItemIndex = 0;
  const items = [
    {
      name: 'Dashboard',
      icon: 'Home',
      text: 'Dashboard',
      activeIcon: '/dashboardActive.png',
      onClick: () => {},
    },
    {
      name: 'Transactions',
      icon: 'Transaction',
      text: 'Transactions',
      onClick: showRecentTransactions,
    },

    {
      name: 'Profile',
      icon: 'Account',
      text: 'Profile',
      onClick: setShowProfilePane,
    },
  ];

  const renderItem = (item, index) => (
    <Stack
      styles={{
        root: {
          '> svg': {
            ...{
              color: index === activeItemIndex ? theme.palette.red1 : theme.palette.gray1,
            },
          },
        },
      }}
      onClick={item.onClick}
    >
      <GetIcon
        name={item.icon}
        color={index === activeItemIndex ? theme.palette.red1 : theme.palette.gray1}
      />
      {item.text && (
        <Text
          style={{
            color: index === activeItemIndex ? theme.palette.red1 : theme.palette.gray1,
            fontSize: '12px',
          }}
        >
          {item.text}
        </Text>
      )}
    </Stack>
  );

  return (
    <Stack
      horizontal
      horizontalAlign='space-between'
      styles={{
        root: {
          padding: theme.spacing.s2,
          position: 'fixed',
          bottom: 0,
          width: '100%',
          // boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 32px;',
        },
      }}
      tokens={{ childrenGap: theme.spacing.s2 }}
    >
      <Stack
        horizontal
        horizontalAlign='space-around'
        styles={{
          root: {
            padding: '0 16px',
            position: 'relative',
            width: '75% !important',
            height: 64,
            borderRadius: '24px',
            backgroundColor: theme.palette.black,
          },
        }}
      >
        {items?.map((item, index) => renderItem(item, index))}
      </Stack>
      <Stack
        horizontal
        styles={{
          root: {
            width: '64px !important',
            height: 64,
            borderRadius: '50%',
            backgroundColor: theme.palette.black,
          },
        }}
        onClick={addTransaction}
      >
        <GetIcon
          name='Add'
          color={theme.palette.white}
          boxStyles={{
            backgroundColor: 'transparent',
          }}
        />
      </Stack>
    </Stack>
  );
};
export default Footer;
