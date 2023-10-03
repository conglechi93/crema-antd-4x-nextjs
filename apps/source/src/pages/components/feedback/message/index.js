import React from "react";
import AppPage from "../../../../core/AppLayout/AppPage";
import asyncComponent from "@crema/components/AppAsyncComponent";

const Message = asyncComponent(() => import('../../../../modules/components/feedback/Message'));
export default AppPage(() => <Message />);
