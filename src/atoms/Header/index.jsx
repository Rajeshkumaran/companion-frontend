import React from 'react';
import { Image } from '@fluentui/react';
import { useFluentTheme } from '@/theme';
import { Text, Stack } from '@/atoms';

const Header = ({ setShowProfilePane }) => {
  const theme = useFluentTheme();

  return (
    <Stack
      horizontal
      horizontalAlign='space-between'
      styles={{
        root: {
          padding: theme.spacing.s3,
          position: 'fixed',
          top: 0,
          width: '100%',
          height: 48,
          zIndex: 1,
          backgroundColor: theme.palette.white,
        },
      }}
    >
      <Stack horizontal horizontalAlign='start'>
        <Text>Welcome,</Text>
        <Text style={{ fontWeight: '600', marginLeft: theme.spacing.s1 }}>Rajesh 👋</Text>
      </Stack>
      {/* TODO: Store user image in db */}
      <Image
        src='/profile.jpg'
        alt='Profile'
        width={24}
        height={24}
        styles={{ root: { borderRadius: theme.spacing.s2 } }}
        onClick={setShowProfilePane}
      />
    </Stack>
  );
};
export default Header;
