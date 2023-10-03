import React, {useEffect} from "react";
import { Layouts } from "@crema/components";
import {useLayoutActionsContext, useLayoutContext} from "@crema/context/LayoutContextProvider";
import routesConfig from "../../AppRoutes/routeConfig";
import { useSidebarActionsContext } from '@crema/context/SidebarContextProvider';
import {useRouter} from "next/router";

const withLayout = (ComposedComponent) => (props) => {
  const { navStyle } = useLayoutContext();
  const AppLayout = Layouts[navStyle];

  const {updateNavStyle} = useLayoutActionsContext();
  const {updateMenuStyle, setSidebarBgImage} = useSidebarActionsContext();
  const router = useRouter()

  useEffect(() => {
    if (router.query.layout) updateNavStyle(router.query.layout);
    if (router.query.menuStyle) updateMenuStyle(router.query.menuStyle);
    if (router.query.sidebarImage) setSidebarBgImage(true);
  }, []);

  return (
    <AppLayout routesConfig={routesConfig}>
      <ComposedComponent {...props} />
    </AppLayout>
  );
};

export default withLayout;
