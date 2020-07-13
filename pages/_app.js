import { ThemeProvider } from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useEffect } from 'react';

export const theme = {
  colors: {
    primary: 'pink',
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
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default Credello;
