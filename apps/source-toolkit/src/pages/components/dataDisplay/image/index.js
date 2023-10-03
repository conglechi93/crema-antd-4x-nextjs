import React from "react";
import AppPage from "../../../../core/AppLayout/AppPage";
import asyncComponent from "@crema/components/AppAsyncComponent";

const Image = asyncComponent(() => import('../../../../modules/components/dataDisplay/Image'));
export default AppPage(() => <Image />);
