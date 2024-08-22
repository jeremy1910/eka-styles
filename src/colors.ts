import { ThemeColors, ThemeName } from './types';

const baseColor: ThemeColors = {
    white: '#FFFFFF',
    black: '#000000',
    primary: '#1a73e8',
    text: '#000000',
};

export const colors: Record<ThemeName, ThemeColors> = {
    base: baseColor,
    dark: {
        ...baseColor,
        primary: '#bb86fc',
        text: '#FFFFFF',
    },
};