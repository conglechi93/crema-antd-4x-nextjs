import React from "react";
import AppPage from "../../../../core/AppLayout/AppPage";
import asyncComponent from "@crema/components/AppAsyncComponent";

const DataTable = asyncComponent(() => import('../../../../modules/components/table/Data'));
export default AppPage(() => <DataTable />);
