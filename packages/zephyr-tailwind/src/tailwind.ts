interface ThemeColor {
  darker: string;
  lighter: string;
  normal: string;
}

interface DefaultColors {
  dark: {
    bg: ThemeColor;
    fg: ThemeColor;
  }
  danger: ThemeColor;
  light: {
    bg: ThemeColor;
    fg: ThemeColor;
  }
  primary: ThemeColor;
  secondary: ThemeColor;
  success: ThemeColor;
}

export const charcoal: ThemeColor = {
  darker: '#222222',
  lighter: '#555555',
  normal: '#333333',
}

export const sourApple: ThemeColor = {
  darker: '#449E48',
  lighter: '#82C785',
  normal: '#4CAF50',
};

export const steam: ThemeColor = {
  darker: '#E6E6E6#',
  lighter: '#ffffff',
  normal: '#ffffff',
}

export const tomato = {
  darker: '#DC3C31',
  lighter: '#F77B72',
  normal: '#F44336'
};

export const defaultColors: DefaultColors = {
  dark: {
    bg: charcoal,
    fg: steam
  },
  danger: tomato,
  light: {
    bg: steam,
    fg: charcoal,
  },
  primary: charcoal,
  secondary: steam,
  success: sourApple
}

export const generateConfig = (colors = defaultColors, additionalOverrides = {}) => ({
  theme: {
    borderRadius: {
      none: '0',
      partial: '8px',
      full: '100%',
    },
    boxShadow: {
      '0': 'none',
      '1': '0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08)',
      '2': '0 7px 14px rgba(50,50,93,.1), 0 3px 6px rgba(0,0,0,.08)',
      '3':
        '0 13px 27px -5px rgba(50,50,93,.25), 0 8px 16px -8px rgba(0,0,0,.3), 0 -6px 16px -6px rgba(0,0,0,.025)',
    },
    colors,
    lineHeight: {
      body: '24px',
      'heading-giant': '88px',
      'heading-extra-large': '64px',
      'heading-large': '56px',
      'heading-medium': '32px',
      'heading-small': '24px',
    },
    fontFamily: {
      body: ['Source Sans Pro', 'sans-serif'],
      display: ['Oxygen', 'sans-serif'],
    },
    fontSize: {
      body: '16px',
      'heading-giant': '64px',
      'heading-extra-large': '48px',
      'heading-large': '40px',
      'heading-medium': '24px',
      'heading-small': '16px',
    },
    fontWeight: {
      bold: 700,
      normal: 400,
    },
    screens: {
      dark: { raw: '(prefers-color-scheme: dark)' },
      light: { raw: '(prefers-color-scheme: light)' },
    },
    spacing: {
      '8': '8px',
      '16': '16px',
      '24': '24px',
      '32': '32px',
      '40': '40px',
      '48': '48px',
      '56': '56px',
      '64': '64px',
      '72': '72px',
      '80': '80px',
      '88': '88px',
      '96': '96px',
    },
    extend: {
      maxWidth: {
        'container-fluid': '100vw',
        'container-general': '1200px',
        'container-long-form': '600px',
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    boxShadow: ['responsive', 'hover', 'focus', 'active'],
  },
  ...additionalOverrides,
});

export default generateConfig();
