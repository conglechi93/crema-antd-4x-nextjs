import React from "react";
import AppPage from "../../../../core/AppLayout/AppPage";
import asyncComponent from "@crema/components/AppAsyncComponent";

const Tag = asyncComponent(() => import('../../../../modules/components/dataDisplay/Tag'));
export default AppPage(() => <Tag />);
