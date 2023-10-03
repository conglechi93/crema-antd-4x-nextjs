import React from "react";
import AppPage from "../../../../core/AppLayout/AppPage";
import asyncComponent from "@crema/components/AppAsyncComponent";

const PopConfirm = asyncComponent(() => import('../../../../modules/components/feedback/PopConfirm'));
export default AppPage(() => <PopConfirm />);
