import React from "react";
import AppPage from "../core/DefaultPage";
import asyncComponent from "@crema/components/AppAsyncComponent";

const ResetPassword = asyncComponent(() =>
  import('../modules/auth/ForgetPassword/ResetPasswordAwsCognito')
);
export default AppPage(() => <ResetPassword />);
