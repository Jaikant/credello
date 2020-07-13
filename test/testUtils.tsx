import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
// import { theme } from '../_app.js';

// import { ThemeProvider } from "my-ui-lib"
// import { TranslationProvider } from "my-i18n-lib"
// import defaultStrings from "i18n/en-x-default"

export const theme = {
  colors: {
    primary: 'pink',
    grey: 'grey',
  },
};

const Providers = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const customRender = (ui, options = {}) =>
  render(ui, { wrapper: Providers, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
