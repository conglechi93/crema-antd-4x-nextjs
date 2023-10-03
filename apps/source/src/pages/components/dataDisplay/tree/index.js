import React from "react";
import AppPage from "../../../../core/AppLayout/AppPage";
import asyncComponent from "@crema/components/AppAsyncComponent";

const Tree = asyncComponent(() => import('../../../../modules/components/dataDisplay/Tree'));
export default AppPage(() => <Tree />);
