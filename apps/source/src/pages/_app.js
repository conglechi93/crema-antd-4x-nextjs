import * as React from "react";
import PropTypes from "prop-types";
import AppContextProvider from "@crema/context/AppContextProvider";
import AppThemeProvider from "@crema/context/AppThemeProvider";
import AppLocaleProvider from "@crema/context/AppLocaleProvider";
import AppAuthProvider from "../core/AppAuthProvider";
import AuthRoutes from "@crema/components/AuthRoutes";
import "@crema/mockapi";
import AppPageMeta from "@crema/components/AppPageMeta";
import InfoViewContextProvider from "@crema/context/InfoViewContextProvider";
import "antd/dist/reset.css";
import "../../public/styles/index.css";
import {GlobalStyles} from "../core/theme/GlobalStyle";
import {Normalize} from "styled-normalize";

// Client-side cache, shared for the whole session of the user in the browser.

export default function MyApp(props) {
  const { Component, pageProps } = props;

  return (
      <AppContextProvider>
        <AppThemeProvider>
            <AppLocaleProvider>
              <InfoViewContextProvider>
                <AppAuthProvider>
                  <AuthRoutes>
                    <AppPageMeta />
                    <GlobalStyles />
                    <Normalize />
                    <Component {...pageProps} />
                  </AuthRoutes>
                </AppAuthProvider>
              </InfoViewContextProvider>
            </AppLocaleProvider>
        </AppThemeProvider>
      </AppContextProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
