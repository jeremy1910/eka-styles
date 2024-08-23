import { ThemeName, ThemeSpacings } from './types';

const baseSpacings: ThemeSpacings = {
    _4: '4px',
    _8: '8px',
    _12: '12px',
    _16: '16px',
    _24: '24px',
    _32: '32px',
    _40: '40px',
    _48: '48px',
    _64: '64px',

};

export const spacings: Record<ThemeName, ThemeSpacings> = {
    base: baseSpacings,
    dark: {
        ...baseSpacings,
    },
};