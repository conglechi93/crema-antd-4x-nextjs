import React from "react";
import AppPage from "../../../../core/AppLayout/AppPage";
import asyncComponent from "@crema/components/AppAsyncComponent";

const Drawer = asyncComponent(() => import('../../../../modules/components/feedback/Drawer'));
export default AppPage(() => <Drawer />);
