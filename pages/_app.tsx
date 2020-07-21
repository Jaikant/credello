import {
  ThemeProvider,
  createGlobalStyle,
  DefaultTheme,
} from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useEffect } from 'react';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Roboto-Regular";
      src: url('/static/fonts/Roboto-Regular.ttf') format("truetype"),
  }
  @font-face {
    font-family: "Roboto-Medium";
      src: url('/static/fonts/Roboto-Medium.ttf') format("truetype"),
  }
  @font-face {
    font-family: "Roboto-Bold";
      src: url('/static/fonts/Roboto-Bold.ttf') format("truetype"),
  }
  @font-face {
    font-family: "Roboto-Black";
      src: url('/static/fonts/Roboto-Black.ttf') format("truetype"),
  }

  body {
    font-family: Roboto-Regular;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: Roboto-Bold;
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
    paddingTopHeroY: '40px',
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
