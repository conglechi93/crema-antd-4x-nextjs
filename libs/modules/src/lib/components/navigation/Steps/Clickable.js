import React, { useState } from "react";
import { Divider, Steps } from "antd";

const {Step} = Steps;

const Clickable = () => {
  const [current, setCurrent] = useState(0);

  const onChange = (current) => {
    setCurrent(current);
  };

  return (
    <>
      <Steps current={current} onChange={onChange}>
        <Step title='Step 1' description='This is a description.' />
        <Step title='Step 2' description='This is a description.' />
        <Step title='Step 3' description='This is a description.' />
      </Steps>

      <Divider />

      <Steps current={current} onChange={onChange} direction='vertical'>
        <Step title='Step 1' description='This is a description.' />
        <Step title='Step 2' description='This is a description.' />
        <Step title='Step 3' description='This is a description.' />
      </Steps>
    </>
  );
};
export default Clickable;
