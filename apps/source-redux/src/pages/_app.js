import * as React from 'react';
import PropTypes from 'prop-types';
import AppContextProvider from '@crema/context/AppContextProvider';
import AppThemeProvider from '@crema/context/AppThemeProvider';
import AppLocaleProvider from '@crema/context/AppLocaleProvider';
import AppAuthProvider from "../core/AppAuthProvider";
import AuthRoutes from '@crema/components/AuthRoutes';
import '@crema/mockapi';
import AppPageMeta from '@crema/components/AppPageMeta';
import 'antd/dist/reset.css';
import '../../public/styles/index.css';
import {Provider} from 'react-redux';
import {GlobalStyles} from '../core/theme/GlobalStyle';
import {Normalize} from 'styled-normalize';
import configureStore from '../redux/store';

// Client-side cache, shared for the whole session of the user in the browser.
const store = configureStore();

export default function MyApp(props) {
  const { Component, pageProps } = props;

  return (
    <AppContextProvider>
      <Provider store={store}>
        <AppThemeProvider>
          <AppLocaleProvider>
            <AppAuthProvider>
              <AuthRoutes>
                <AppPageMeta />
                <GlobalStyles />
                <Normalize />
                <Component {...pageProps} />
              </AuthRoutes>
            </AppAuthProvider>
          </AppLocaleProvider>
        </AppThemeProvider>
      </Provider>
    </AppContextProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
