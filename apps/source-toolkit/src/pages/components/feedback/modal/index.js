import React from "react";
import AppPage from "../../../../core/AppLayout/AppPage";
import asyncComponent from "@crema/components/AppAsyncComponent";

const Modal = asyncComponent(() => import('../../../../modules/components/feedback/Modal'));
export default AppPage(() => <Modal />);
