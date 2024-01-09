import { mergeStyleSets } from '@fluentui/react';

const getStyles = (theme) =>
  mergeStyleSets({
    defaultButton: {
      color: `${theme.palette.white} !important`,
      backgroundColor: `${theme.palette.black} !important`,
      padding: `${theme.spacing.s3} ${theme.spacing.s8}`,
      borderRadius: '8px',
      height: 40,
      border: 'none',
      fontSize: theme.fontSizes.s,
      ':hover': {
        backgroundColor: theme.palette.white,
        color: theme.palette.black,
      },
      '@media(max-width: 992px)': {
        fontSize: theme.fontSizes.s,
        padding: theme.spacing.s2,
      },
    },
    secondaryButton: {
      color: theme.palette.black,
      backgroundColor: theme.palette.white,
      border: `2px solid ${theme.palette.black}`,
      padding: theme.spacing.s5,
      borderRadius: '6px',
      fontSize: theme.fontSizes.xl,
      ':hover': {
        backgroundColor: theme.palette.black,
        color: theme.palette.white,
      },
      '@media(max-width: 992px)': {
        fontSize: theme.fontSizes.s,
        padding: theme.spacing.s4,
      },
    },
    cancelButton: {
      color: theme.palette.white,
      backgroundColor: theme.palette.red1,
      border: 'none',
      borderRadius: '8px',
      ':hover': {
        backgroundColor: theme.palette.white,
        color: theme.palette.red1,
        border: `2px solid ${theme.palette.red1}`,
      },
    },
  });

export default getStyles;
