import React from "react";
import AppPage from "../../../../core/AppLayout/AppPage";
import asyncComponent from "@crema/components/AppAsyncComponent";

const Collapse = asyncComponent(() => import('../../../../modules/components/dataDisplay/Collapse'));
export default AppPage(() => <Collapse />);
