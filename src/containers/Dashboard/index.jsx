import React from 'react';
import { Stack } from '@fluentui/react';
import { useFluentTheme } from '@/theme';
import InfoCard from './InfoCard';

const Dashboard = () => {
  const theme = useFluentTheme();
  return (
    <Stack
      styles={{ root: { width: '100%', padding: theme.spacing.s2 } }}
      tokens={{ childrenGap: 16 }}
    >
      <InfoCard />
    </Stack>
  );
};

export default Dashboard;
