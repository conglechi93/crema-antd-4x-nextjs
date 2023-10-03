import React from "react";
import AppPage from "../../../../core/AppLayout/AppPage";
import asyncComponent from "@crema/components/AppAsyncComponent";

const BasicTable = asyncComponent(() => import('../../../../modules/components/table/Basic'));
export default AppPage(() => <BasicTable />);
