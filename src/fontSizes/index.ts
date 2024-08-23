import { ThemeName, ThemeFontSizes } from '../types';

const baseFontSizes: ThemeFontSizes = {
    _12: '12px',
    _14: '14px',
    _16: '16px',
    _18: '18px',
    _22: '22px',
    _24: '24px',
    _28: '28px',
    _32: '32px',
    _36: '36px',
    _42: '42px',
    _48: '48px',

};

export const fontSizes: Record<ThemeName, ThemeFontSizes> = {
    base: baseFontSizes,
    dark: {
        ...baseFontSizes,
    },
};