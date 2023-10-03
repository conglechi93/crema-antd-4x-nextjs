import React from "react";
import AppPage from "../../../../core/AppLayout/AppPage";
import asyncComponent from "@crema/components/AppAsyncComponent";

const Anchor = asyncComponent(() => import('../../../../modules/components/others/Anchor'));
export default AppPage(() => <Anchor />);
