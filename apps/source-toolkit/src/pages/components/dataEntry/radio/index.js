import React from "react";
import AppPage from "../../../../core/AppLayout/AppPage";
import asyncComponent from "@crema/components/AppAsyncComponent";

const Radio = asyncComponent(() => import('../../../../modules/components/dataEntry/Radio'));
export default AppPage(() => <Radio />);
