import React from "react";
import AppPage from "../../../../core/AppLayout/AppPage";
import asyncComponent from "@crema/components/AppAsyncComponent";

const TreeSelect = asyncComponent(() => import('../../../../modules/components/dataEntry/TreeSelect'));
export default AppPage(() => <TreeSelect />);
