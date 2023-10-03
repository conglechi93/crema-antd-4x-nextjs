import React from "react";
import AppPage from "../../../core/AppLayout/AppPage";
import asyncComponent from "@crema/components/AppAsyncComponent";

const Calendar = asyncComponent(() => import('../../../../src/modules/thirdParty/calendar'),{ssr:false});
export default AppPage(() => <Calendar />);
