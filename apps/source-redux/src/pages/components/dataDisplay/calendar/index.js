import React from "react";
import AppPage from "../../../../core/AppLayout/AppPage";
import asyncComponent from "@crema/components/AppAsyncComponent";

const Calendar = asyncComponent(() => import('../../../../modules/components/dataDisplay/Calendar'));
export default AppPage(() => <Calendar />);
