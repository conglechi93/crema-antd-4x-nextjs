import React from "react";
import AppPage from "../../../../core/AppLayout/AppPage";
import asyncComponent from "@crema/components/AppAsyncComponent";

const Transfer = asyncComponent(() => import('../../../../modules/components/dataEntry/Transfer'));
export default AppPage(() => <Transfer />);
