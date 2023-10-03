import React from "react";
import AppPage from "../../../../core/AppLayout/AppPage";
import asyncComponent from "@crema/components/AppAsyncComponent";

const Popover = asyncComponent(() => import('../../../../modules/components/dataDisplay/Popover'));
export default AppPage(() => <Popover />);
