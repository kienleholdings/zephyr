const tailwindConfig = {
  theme: {
    borderRadius: {
      none: '0',
      partial: '8px',
      full: '100%',
    },
    boxShadow: {
      '1': '0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08)',
      '2': '0 7px 14px rgba(50,50,93,.1), 0 3px 6px rgba(0,0,0,.08)',
    },
    colors: {
      ash: {
        normal: '#ededed',
      },
      charcoal: {
        dark: '#222222',
        light: '#555555',
        normal: '#333333',
      },
      steam: {
        normal: '#ffffff',
      },
    },
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
    spacing: {
      '8': '8px',
      '16': '12px',
      '24': '16px',
      '32': '24px',
      '40': '32px',
      '48': '48px',
      '56': '56px',
      '64': '64px',
      '72': '72px',
      '80': '80px',
      '88': '88px',
      '96': '96px',
    },
  },
};

export default tailwindConfig;
