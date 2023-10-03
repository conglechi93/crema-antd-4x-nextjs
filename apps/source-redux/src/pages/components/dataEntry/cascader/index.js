import React from "react";
import AppPage from "../../../../core/AppLayout/AppPage";
import asyncComponent from "@crema/components/AppAsyncComponent";

const Cascader = asyncComponent(() => import('../../../../modules/components/dataEntry/Cascader'));
export default AppPage(() => <Cascader />);
