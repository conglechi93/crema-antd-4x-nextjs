import React from "react";
import AppPage from "../../../../core/AppLayout/AppPage";
import asyncComponent from "@crema/components/AppAsyncComponent";

const Affix = asyncComponent(() => import('../../../../modules/components/navigation/Affix'));
export default AppPage(() => <Affix />);
