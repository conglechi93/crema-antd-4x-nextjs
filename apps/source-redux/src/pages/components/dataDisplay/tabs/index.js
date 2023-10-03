import React from "react";
import AppPage from "../../../../core/AppLayout/AppPage";
import asyncComponent from "@crema/components/AppAsyncComponent";

const Tabs = asyncComponent(() => import('../../../../modules/components/dataDisplay/Tabs'));
export default AppPage(() => <Tabs />);
