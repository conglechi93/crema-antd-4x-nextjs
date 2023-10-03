import React from "react";
import AppPage from "../../../../core/AppLayout/AppPage";
import asyncComponent from "@crema/components/AppAsyncComponent";

const Rate = asyncComponent(() => import('../../../../modules/components/dataEntry/Rate'));
export default AppPage(() => <Rate />);
