import { ThemeName, ThemeFonts } from '../types';

const baseFonts: ThemeFonts = {
  lato: {
    name: `"Lato", Arial, Helvetica, sans-serif`,
    labelName: 'Lato',
    variants: {
      regular: '400',
      regularItalic: '400i',
      bold: '700',
      boldItalic: '700i'
    }
  },
  poppins: {
    name: `"Poppins", Arial, Helvetica, sans-serif`,
    labelName: 'Poppins',
    variants: {
      light: '300',
      lightItalic: '300i',
      regular: '400',
      regularItalic: '400i',
      medium: '500',
      semiBold: '600',
      bold: '700',
    }
  },
  openSans: {
    name: `"Open Sans", Arial, Helvetica, sans-serif`,
    labelName: 'open Sans',
    variants: {
      light: '300',
      regular: '400',
      semiBold: '600',
      bold: '700',
      extraBold: '800',
    }
  },
};

export const fonts: Record<ThemeName, ThemeFonts> = {
    base: baseFonts,
    dark: {
        ...baseFonts,
    },
};
