import { ThemeProvider, createGlobalStyle } from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useEffect } from 'react';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto', sans-serif;
      src: url('/static/fonts/Roboto-Regular.ttf');
  }
  p {
    font-family: 'Roboto';
  }
`;

export const theme = {
  colors: {
    primary: '#02254d',
    grey: 'grey',
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
