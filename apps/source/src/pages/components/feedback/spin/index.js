import React from "react";
import AppPage from "../../../../core/AppLayout/AppPage";
import asyncComponent from "@crema/components/AppAsyncComponent";

const Spin = asyncComponent(() => import('../../../../modules/components/feedback/Spin'));
export default AppPage(() => <Spin />);
