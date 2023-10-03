import React from "react";
import AppPage from "../../../../core/AppLayout/AppPage";
import asyncComponent from "@crema/components/AppAsyncComponent";

const Avatar = asyncComponent(() => import('../../../../modules/components/dataDisplay/Avatar'));
export default AppPage(() => <Avatar />);
