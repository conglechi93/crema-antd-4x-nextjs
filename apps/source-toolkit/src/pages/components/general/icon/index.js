import React from "react";
import AppPage from "../../../../core/AppLayout/AppPage";
import asyncComponent from "@crema/components/AppAsyncComponent";

const Icon = asyncComponent(() => import('../../../../modules/components/general/Icon'));
export default AppPage(() => <Icon />);
