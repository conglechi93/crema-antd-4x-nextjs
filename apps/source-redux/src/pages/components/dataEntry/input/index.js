import React from "react";
import AppPage from "../../../../core/AppLayout/AppPage";
import asyncComponent from "@crema/components/AppAsyncComponent";

const Input = asyncComponent(() => import('../../../../modules/components/dataEntry/Input'));
export default AppPage(() => <Input />);
