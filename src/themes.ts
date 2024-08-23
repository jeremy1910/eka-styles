import { colors } from './colors';
import { fonts } from './fonts';
import { spacings } from './spacing';
import { shadows } from './shadows';
import { fontSizes } from './fontSizes';
import { Theme, ThemeName } from './types';

export const getTheme = (themeName: ThemeName): Theme => {
    return {
        name: themeName,
        colors: colors[themeName],
        spacings: spacings[themeName],
        fonts: fonts[themeName],
        shadows: shadows[themeName],
        fontSizes: fontSizes[themeName]
    };
};