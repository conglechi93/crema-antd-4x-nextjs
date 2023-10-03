import React from "react";
import AppPage from "../../../../core/AppLayout/AppPage";
import asyncComponent from "@crema/components/AppAsyncComponent";

const AutoComplete = asyncComponent(() => import('../../../../modules/components/dataEntry/AutoComplete'));
export default AppPage(() => <AutoComplete />);
