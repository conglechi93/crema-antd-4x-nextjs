import React from "react";
import AppPage from "../../../../core/AppLayout/AppPage";
import asyncComponent from "@crema/components/AppAsyncComponent";

const Carousel = asyncComponent(() => import('../../../../modules/components/dataDisplay/Carousel'));
export default AppPage(() => <Carousel />);
