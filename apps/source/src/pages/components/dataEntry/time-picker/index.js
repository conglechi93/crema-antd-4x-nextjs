import React from "react";
import AppPage from "../../../../core/AppLayout/AppPage";
import asyncComponent from "@crema/components/AppAsyncComponent";

const TimePicker = asyncComponent(() => import('../../../../modules/components/dataEntry/TimePicker'));
export default AppPage(() => <TimePicker />);
