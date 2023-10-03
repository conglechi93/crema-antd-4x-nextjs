import React from "react";
import AppPage from "../../../../core/AppLayout/AppPage";
import asyncComponent from "@crema/components/AppAsyncComponent";

const Button = asyncComponent(() => import('../../../../modules/components/general/Button'));
export default AppPage(() => <Button />);
