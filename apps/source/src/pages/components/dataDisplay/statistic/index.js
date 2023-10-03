import React from "react";
import AppPage from "../../../../core/AppLayout/AppPage";
import asyncComponent from "@crema/components/AppAsyncComponent";

const Statistic = asyncComponent(() => import('../../../../modules/components/dataDisplay/Statistic'));
export default AppPage(() => <Statistic />);
