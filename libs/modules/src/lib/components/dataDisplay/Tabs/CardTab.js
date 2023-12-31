import React from "react";
import { Space, Tabs } from "antd";

const TabPane = Tabs.TabPane;

const CardTab = () => {
  const callback = (key) => {
    console.log(key);
  };

  return (
    <Space direction='vertical' style={{width: '100%'}}>
      <Tabs onChange={callback} type='card'>
        <TabPane tab='Tab 1' key='1'>
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab='Tab 2' key='2'>
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab='Tab 3' key='3'>
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </Space>
  );
};
export default CardTab;
