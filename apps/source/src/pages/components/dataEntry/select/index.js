import React from "react";
import AppPage from "../../../../core/AppLayout/AppPage";
import asyncComponent from "@crema/components/AppAsyncComponent";

const Select = asyncComponent(() => import('../../../../modules/components/dataEntry/Select'));
export default AppPage(() => <Select />);
