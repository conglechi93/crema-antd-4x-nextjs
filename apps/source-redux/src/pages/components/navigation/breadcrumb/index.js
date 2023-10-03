import React from "react";
import AppPage from "../../../../core/AppLayout/AppPage";
import asyncComponent from "@crema/components/AppAsyncComponent";

const Breadcrumb = asyncComponent(() => import('../../../../modules/components/navigation/Breadcrumb'));
export default AppPage(() => <Breadcrumb />);
