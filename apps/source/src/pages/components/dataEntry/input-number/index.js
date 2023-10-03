import React from "react";
import AppPage from "../../../../core/AppLayout/AppPage";
import asyncComponent from "@crema/components/AppAsyncComponent";

const InputNumber = asyncComponent(() => import('../../../../modules/components/dataEntry/InputNumber'));
export default AppPage(() => <InputNumber />);
