import React from "react";
import AppPage from "../../../core/AppLayout/AppPage";
import asyncComponent from "@crema/components/AppAsyncComponent";

const ReactBeautifulDnd = asyncComponent(() =>
  import('../../../modules/thirdParty/reactBeautifulDnd'),
  { ssr: false }
);
export default AppPage(() => <ReactBeautifulDnd />);
