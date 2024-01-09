import colors from '../colors';
import semanticColors from '../colors/semanticcolors';
const theme = {
  palette: {
    themePrimary: colors.primary,
    themeDark: colors.primaryHover,
    themeDarker: colors.primaryActive,
    neutralSecondary: colors.textSecondary,
    neutralPrimary: colors.textPrimary,
  },
  semanticColors: {
    ...semanticColors,
  },
};

export default theme;
