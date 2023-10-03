import React from 'react';
import appAsyncComponent from "../AppAsyncComponent";

const AppInfoViewContext = appAsyncComponent(() => import('./ContextView'));
const AppInfoViewRedux = appAsyncComponent(() => import('./ReduxView'));

export const AppInfoView = () => {
  if (process.env.NX_STATE_TYPE === 'context') {
    return <AppInfoViewContext />;
  }
  return <AppInfoViewRedux />;
};

export default AppInfoView;
