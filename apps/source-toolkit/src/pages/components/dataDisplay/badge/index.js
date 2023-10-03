import React from "react";
import AppPage from "../../../../core/AppLayout/AppPage";
import asyncComponent from "@crema/components/AppAsyncComponent";

const Badge = asyncComponent(() => import('../../../../modules/components/dataDisplay/Badge'));
export default AppPage(() => <Badge />);
