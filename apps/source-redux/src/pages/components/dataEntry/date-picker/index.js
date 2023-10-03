import React from "react";
import AppPage from "../../../../core/AppLayout/AppPage";
import asyncComponent from "@crema/components/AppAsyncComponent";

const DatePicker = asyncComponent(() => import('../../../../modules/components/dataEntry/DatePicker'));
export default AppPage(() => <DatePicker />);
