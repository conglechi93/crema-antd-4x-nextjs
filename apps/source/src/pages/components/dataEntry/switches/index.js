import React from "react";
import AppPage from "../../../../core/AppLayout/AppPage";
import asyncComponent from "@crema/components/AppAsyncComponent";

const Switches = asyncComponent(() => import('../../../../modules/components/dataEntry/Switches'));
export default AppPage(() => <Switches />);
