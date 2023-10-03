import React from "react";
import AppPage from "../../../../core/AppLayout/AppPage";
import asyncComponent from "@crema/components/AppAsyncComponent";

const Steps = asyncComponent(() => import('../../../../modules/components/navigation/Steps'));
export default AppPage(() => <Steps />);
