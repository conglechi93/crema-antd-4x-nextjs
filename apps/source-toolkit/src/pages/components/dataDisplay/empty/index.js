import React from "react";
import AppPage from "../../../../core/AppLayout/AppPage";
import asyncComponent from "@crema/components/AppAsyncComponent";

const Empty = asyncComponent(() => import('../../../../modules/components/dataDisplay/Empty'));
export default AppPage(() => <Empty />);
