import React from "react";
import AppPage from "../../../../core/AppLayout/AppPage";
import asyncComponent from "@crema/components/AppAsyncComponent";

const ConfigProvider = asyncComponent(() => import('../../../../modules/components/others/ConfigProvider'));
export default AppPage(() => <ConfigProvider />);
