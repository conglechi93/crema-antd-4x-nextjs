import React from "react";
import AppPage from "../../../../core/AppLayout/AppPage";
import asyncComponent from "@crema/components/AppAsyncComponent";

const Space = asyncComponent(() => import('../../../../modules/components/layout/Space'));
export default AppPage(() => <Space />);
