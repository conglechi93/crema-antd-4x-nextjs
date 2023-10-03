import React from "react";
import AppPage from "../../../../core/AppLayout/AppPage";
import asyncComponent from "@crema/components/AppAsyncComponent";

const Cards = asyncComponent(() => import('../../../../modules/components/dataDisplay/Cards'));
export default AppPage(() => <Cards />);
