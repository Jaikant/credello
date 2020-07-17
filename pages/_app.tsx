import {
  ThemeProvider,
  createGlobalStyle,
  DefaultTheme,
} from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useEffect } from 'react';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Roboto;
      src: url('/static/fonts/Roboto-Medium.ttf');
  }
  * {
    font-family: Roboto;
  }
`;

export const theme: DefaultTheme = {
  colors: {
    primary: '#02254d',
    grey: 'grey',
  },
  spacing: {
    //top level paddings
    //Mobile
    paddingX: '22px',
    paddingTopY: '40px',
    paddingBottomY: '32px',

    //top level paddings
    //tablet
    tabletPaddingX: '24px',
    tabletPaddingY: '40px',

    //top level paddings
    //laptop
    laptopPaddingX: '128px',
    laptopPaddingY: '40px',

    //component spacing
    padding12: '12px',
    padding13: '13px',
    padding16: '16px',
    padding22: '22px',
    padding28: '28px',
    padding30: '30px',
    padding32: '32px',
    padding36: '36px',
    padding48: '48px',
  },
};

function DefaultLayout({ children }) {
  return <>{children}</>;
}

function Credello({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode)
      jssStyles.parentNode.removeChild(jssStyles);
  }, []);

  const Layout = Component.layout || DefaultLayout;
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default Credello;
