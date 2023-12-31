import React from "react";
import AppPage from "../../../../core/AppLayout/AppPage";
import asyncComponent from "@crema/components/AppAsyncComponent";

const Mention = asyncComponent(() => import('../../../../modules/components/dataEntry/Mention'));
export default AppPage(() => <Mention />);
