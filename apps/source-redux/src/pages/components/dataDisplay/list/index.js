import React from "react";
import AppPage from "../../../../core/AppLayout/AppPage";
import asyncComponent from "@crema/components/AppAsyncComponent";

const List = asyncComponent(() => import('../../../../modules/components/dataDisplay/List'));
export default AppPage(() => <List />);
