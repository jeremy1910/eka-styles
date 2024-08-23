export interface ThemeFontVariants {
    light?: string;
    lightItalic?: string;
    regular: string;
    regularItalic?: string;
    medium?: string;
    semiBold?: string;
    bold: string;
    boldItalic?: string;
    extraBold?: string;
}

export interface ThemeFont {
    name: string;
    labelName: string;
    variants: ThemeFontVariants;
}

export interface ThemeFonts {
    [key: string]: ThemeFont;
}
export interface ThemeColors {
    white: string;
    black: string;
    primary: string;
    text: string;
    cardBackground: string;
    textColor: string;
}


export interface ThemeSpacings {
    _4: string,
    _8: string,
    _12: string,
    _16: string,
    _24: string,
    _32: string,
    _40: string,
    _48: string,
    _64: string,
}

export interface ThemeFontSizes {
    _12: string,
    _14: string,
    _16: string,
    _18: string,
    _22: string,
    _24: string,
    _28: string,
    _32: string,
    _36: string,
    _42: string,
    _48: string,
}
export interface ThemeShadows {
    _1: string,
}

export interface Theme {
    name: ThemeName,
    colors: ThemeColors;
    spacings: ThemeSpacings;
    fonts: ThemeFonts;
    shadows: ThemeShadows;
    fontSizes: ThemeFontSizes;
}


export type ThemeName = 'base' | 'dark';