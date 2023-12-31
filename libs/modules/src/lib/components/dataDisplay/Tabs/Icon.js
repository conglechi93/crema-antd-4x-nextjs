import React from "react";

import { Tabs } from "antd";
import { AndroidOutlined, AppleOutlined } from "@ant-design/icons";

const {TabPane} = Tabs;

const Icon = () => {
  return (
    <Tabs defaultActiveKey='2'>
      <TabPane
        tab={
          <span>
            <AppleOutlined />
            Tab 1
          </span>
        }
        key='1'>
        Tab 1
      </TabPane>
      <TabPane
        tab={
          <span>
            <AndroidOutlined />
            Tab 2
          </span>
        }
        key='2'>
        Tab 2
      </TabPane>
    </Tabs>
  );
};

export default Icon;
