import classNames from 'classnames';

const generateTextStyles = (
  style:
    | 'body'
    | 'heading-extra-large'
    | 'heading-giant'
    | 'heading-large'
    | 'heading-medium'
    | 'heading-small'
    | 'link'
    | 'paragraph',
  theme: 'light' | 'dark' = 'light',
  includeMargin = true
): string => {
  const COMMON_BODY = 'font-normal font-body leading-body text-body';
  const COMMON_HEAD = 'font-bold font-display';
  const COMMON_MARGIN = 'mb-16';
  let textStyle = '';
  let textTheme = '';
  switch (style) {
    case 'body':
      // The only difference between the body and paragraph styles is a bottom margin
      textStyle = COMMON_BODY;
      break;
    case 'heading-extra-large':
      textStyle = `${COMMON_HEAD} leading-heading-extra-large text-heading-extra-large`;
      break;
    case 'heading-giant':
      textStyle = `${COMMON_HEAD} leading-heading-giant text-heading-giant`;
      break;
    case 'heading-large':
      textStyle = `${COMMON_HEAD} leading-heading-large text-heading-large`;
      break;
    case 'heading-medium':
      textStyle = `${COMMON_HEAD} leading-heading-medium text-heading-medium`;
      break;
    case 'heading-small':
      textStyle = `${COMMON_HEAD} leading-heading-small text-heading-small`;
      break;
    case 'link':
      textStyle = `${COMMON_BODY} underline hover:text-charcoal-light`;
      break;
    case 'paragraph':
      textStyle = `${COMMON_BODY} ${COMMON_MARGIN}`;
      break;
    default:
      // eslint-disable-next-line no-console
      console.error(`Zephyr Error: Unknown text style ${style}`);
  }

  switch (theme) {
    case 'light':
      textTheme = 'text-charcoal-normal';
      break;
    case 'dark':
      textTheme = 'text-steam-normal';
      break;
    default:
      // eslint-disable-next-line no-console
      console.error(`Zephyr Error: Unknown text theme ${theme}`);
  }

  return classNames(textStyle, textTheme, { [COMMON_MARGIN]: includeMargin });
};

const generateAlertStyles = (theme: 'error' | 'success'): string => {
  const COMMON_ALERT_STYLES = 'px-24 py-16 rounded-partial shadow-1';
  let styles = '';
  switch (theme) {
    case 'error':
      styles = `${generateTextStyles('body', 'dark')} bg-danger-normal `;
      break;
    default:
      // eslint-disable-next-line no-console
      console.error(`Zephyr Error: Unknown alert theme ${theme}`);
  }
  return classNames(COMMON_ALERT_STYLES, styles);
};

// Why export button styles as a utility? Good question! This allows us to create "buttons" on
// non-button elements such as React Router <Link> elements while keeping consistent styles
const generateButtonStyles = (size: 'normal' | 'small', theme: 'primary' | 'secondary'): string => {
  const COMMON_BUTTON_STYLES =
    'rounded-partial shadow-1 hover:shadow-2 active:shadow-0 transition duration-75';
  let sizeStyles = '';
  switch (size) {
    case 'normal':
      sizeStyles = 'h-56 py-16 px-48';
      break;
    case 'small':
      sizeStyles = 'h-40 py-8 px-24';
      break;
    default:
      // eslint-disable-next-line no-console
      console.error(`Zephyr Error: Unknown button size ${size}`);
  }

  let themeStyles = '';
  switch (theme) {
    case 'primary':
      themeStyles = `${generateTextStyles(
        'body',
        'dark'
      )} bg-primary-normal active:bg-primary-dark hover:bg-primary-light`;
      break;
    case 'secondary':
      themeStyles = `${generateTextStyles(
        'body'
      )} bg-steam-normal active:bg-ash-normal text-primary-normal hover:text-primary-light active:text-primary-dark`;
      break;
    default:
      // eslint-disable-next-line no-console
      console.error(`Zephyr Error: Unknown button theme ${theme}`);
  }
  return classNames(COMMON_BUTTON_STYLES, sizeStyles, themeStyles);
};

const utilities = {
  generateAlertStyles,
  generateButtonStyles,
  generateTextStyles,
};

export default utilities;
