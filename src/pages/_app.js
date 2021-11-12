import { useRef } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import { ManagedUIContext } from 'contexts/ui.context';
import ManagedModal from 'components/common/modal/managed-modal';
import { defaultTheme } from 'site-settings/site-theme/default';
import { CartProvider } from 'contexts/cart/use-cart';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import PrivateRoute from 'layouts/private-route';
import 'react-toastify/dist/ReactToastify.css';
import 'assets/styles/fonts.css';
import { GlobalStyle } from 'assets/styles/global.style';

function ExtendedApp({ Component, pageProps }) {
  const queryClientRef = useRef();
  const getLayout = Component.getLayout ?? ((page) => page);
  const authProps = Component.authenticate;

  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }
  return (
    <QueryClientProvider client={queryClientRef.current}>
      <Hydrate state={pageProps.dehydratedState}>
        <ThemeProvider theme={defaultTheme}>
          <CartProvider>
            <ManagedUIContext>
              {Boolean(authProps) ? (
                <PrivateRoute>
                  {getLayout(<Component {...pageProps} />)}
                </PrivateRoute>
              ) : (
                getLayout(<Component {...pageProps} />)
              )}
              <ManagedModal />
              <GlobalStyle />
              <ToastContainer
                autoClose={3000}
                position="bottom-right"
                hideProgressBar
                closeOnClick
              />
            </ManagedUIContext>
          </CartProvider>
        </ThemeProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default ExtendedApp;
