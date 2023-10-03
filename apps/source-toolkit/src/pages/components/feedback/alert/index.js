import React from "react";
import AppPage from "../../../../core/AppLayout/AppPage";
import asyncComponent from "@crema/components/AppAsyncComponent";

const Alert = asyncComponent(() => import('../../../../modules/components/feedback/Alert'));
export default AppPage(() => <Alert />);
