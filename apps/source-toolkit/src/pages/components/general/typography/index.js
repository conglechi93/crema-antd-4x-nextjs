import React from "react";
import AppPage from "../../../../core/AppLayout/AppPage";
import asyncComponent from "@crema/components/AppAsyncComponent";

const Typography = asyncComponent(() => import('../../../../modules/components/general/Typography'));
export default AppPage(() => <Typography />);
