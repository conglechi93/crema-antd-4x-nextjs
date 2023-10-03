import React from "react";
import AppPage from "../../../../core/AppLayout/AppPage";
import asyncComponent from "@crema/components/AppAsyncComponent";

const Notification = asyncComponent(() => import('../../../../modules/components/feedback/Notification'));
export default AppPage(() => <Notification />);
