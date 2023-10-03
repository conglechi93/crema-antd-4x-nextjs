import React from "react";
import AppPage from "../../../../core/AppLayout/AppPage";
import asyncComponent from "@crema/components/AppAsyncComponent";

const Result = asyncComponent(() => import('../../../../modules/components/feedback/Result'));
export default AppPage(() => <Result />);
