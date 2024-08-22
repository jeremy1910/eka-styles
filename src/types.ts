// types.ts

export interface ThemeColors {
    white: string;
    black: string;
    primary: string;
    text: string;
}

export interface Theme {
    colors: ThemeColors;
}

export type ThemeName = 'base' | 'dark';