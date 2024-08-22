import { colors } from './colors';
import { Theme, ThemeName } from './types';

export const getTheme = (themeName: ThemeName): Theme => {
    return {
        colors: colors[themeName],
    };
};