import { Stack, Text, BottomSheet } from '@/atoms';

import { useFluentTheme } from '@/theme';
// import { useGetRecentTransactionsQuery } from '@/dataLayer/apis';
import { Image } from '@fluentui/react';

const Profile = ({ hideProfilePane }) => {
  const theme = useFluentTheme();

  // const { data } = useGetRecentTransactionsQuery({ page: 1 });

  return (
    <BottomSheet isOpen toggleSheet={hideProfilePane}>
      <Stack
        verticalAlign='center'
        styles={{
          root: {
            width: '100%',
            padding: `${theme.spacing.s2} ${theme.spacing.s4}`,
          },
        }}
        tokens={{ childrenGap: 16 }}
      >
        <Image
          src='/profile.jpg'
          alt='Profile picture'
          width={150}
          height={150}
          style={{ borderRadius: theme.spacing.s2 }}
        />
        <Text variant='mediumSemibold'>Profile</Text>
      </Stack>
    </BottomSheet>
  );
};

export default Profile;
