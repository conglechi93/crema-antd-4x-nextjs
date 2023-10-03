import React from "react";
import AppPage from "../../../../core/AppLayout/AppPage";
import asyncComponent from "@crema/components/AppAsyncComponent";

const Comment = asyncComponent(() => import('../../../../modules/components/dataDisplay/Comment'));
export default AppPage(() => <Comment />);
