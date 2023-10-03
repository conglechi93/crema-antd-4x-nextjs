import React from "react";
import AppPage from "../../../../core/AppLayout/AppPage";
import asyncComponent from "@crema/components/AppAsyncComponent";

const Form = asyncComponent(() => import('../../../../modules/components/dataEntry/Form'));
export default AppPage(() => <Form />);
