import React from "react";
import AppPage from "../../../../core/AppLayout/AppPage";
import asyncComponent from "@crema/components/AppAsyncComponent";

const PageHeader = asyncComponent(() => import('../../../../modules/components/navigation/PageHeader'));
export default AppPage(() => <PageHeader />);
