import { ThemeShadows, ThemeName } from '../types';

const baseShadows: ThemeShadows = {
    _1: '-1px 3px 2px 0px rgba(112, 112, 112, 0.48)',
};

export const shadows: Record<ThemeName, ThemeShadows> = {
    base: baseShadows,
    dark: {
        ...baseShadows,
        _1: '-1px 3px 2px 0px rgba(10, 10, 10, 0.48)',
    },
};