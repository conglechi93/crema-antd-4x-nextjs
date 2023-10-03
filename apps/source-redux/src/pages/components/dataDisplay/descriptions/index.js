import React from "react";
import AppPage from "../../../../core/AppLayout/AppPage";
import asyncComponent from "@crema/components/AppAsyncComponent";

const Descriptions = asyncComponent(() => import('../../../../modules/components/dataDisplay/Descriptions'));
export default AppPage(() => <Descriptions />);
