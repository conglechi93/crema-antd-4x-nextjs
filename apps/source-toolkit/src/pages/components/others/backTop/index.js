import React from "react";
import AppPage from "../../../../core/AppLayout/AppPage";
import asyncComponent from "@crema/components/AppAsyncComponent";

const BackTop = asyncComponent(() => import('../../../../modules/components/others/BackTop'));
export default AppPage(() => <BackTop />);
