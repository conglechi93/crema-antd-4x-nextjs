import React from "react";
import AppPage from "../../../../core/AppLayout/AppPage";
import asyncComponent from "@crema/components/AppAsyncComponent";

const Checkbox = asyncComponent(() => import('../../../../modules/components/dataEntry/Checkbox'));
export default AppPage(() => <Checkbox />);
