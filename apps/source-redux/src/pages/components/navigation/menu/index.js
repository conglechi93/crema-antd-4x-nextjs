import React from "react";
import AppPage from "../../../../core/AppLayout/AppPage";
import asyncComponent from "@crema/components/AppAsyncComponent";

const Menu = asyncComponent(() => import('../../../../modules/components/navigation/Menu'));
export default AppPage(() => <Menu />);
