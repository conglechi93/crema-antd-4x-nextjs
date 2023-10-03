import React from "react";
import AppPage from "../../../../core/AppLayout/AppPage";
import asyncComponent from "@crema/components/AppAsyncComponent";

const Slider = asyncComponent(() => import('../../../../modules/components/dataEntry/Slider'));
export default AppPage(() => <Slider />);
