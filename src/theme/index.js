import { createTheme, useTheme } from '@fluentui/react';
import {
  palette,
  semanticColors,
  fonts,
  fontWeights,
  fontSizes,
  spacing,
  sizes,
  zIndex,
} from './foundations';

const t = {
  palette,
  semanticColors,
  fonts,
  fontWeights,
  fontSizes,
  spacing,
  sizes,
  zIndex,
  defaultFontStyle: { fontFamily: 'Montserrat' },
};

const theme = createTheme(t);

const useFluentTheme = () => {
  const v = useTheme();
  return v;
};

export default theme;
export { useFluentTheme };
