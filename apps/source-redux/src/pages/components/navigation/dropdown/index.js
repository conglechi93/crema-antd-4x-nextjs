import React from "react";
import AppPage from "../../../../core/AppLayout/AppPage";
import asyncComponent from "@crema/components/AppAsyncComponent";

const Dropdown = asyncComponent(() => import('../../../../modules/components/navigation/Dropdown'));
export default AppPage(() => <Dropdown />);
