import { appTheme } from './themes';
import fonts, { fontWeights, fontSizes } from './typography';
import { spacing, sizes } from './spacing';
import colors from './colors';
import zIndex from './layers';

const palette = { ...appTheme.palette, ...colors };
const semanticColors = { ...appTheme.semanticColors };

export { palette, semanticColors, fonts, fontWeights, fontSizes, spacing, sizes, zIndex };
