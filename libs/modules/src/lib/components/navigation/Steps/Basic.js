import React from "react";
import { Space, Steps } from "antd";
import { StyledAntStepsHor } from "./Basic.styled";

const {Step} = Steps;

const Basic = () => {
  return (
    <Space direction='vertical' style={{width: '100%'}}>
      <StyledAntStepsHor current={1}>
        <Step title='Finished' description='This is a description.' />
        <Step
          title='In Progress'
          subTitle='Left 00:00:08'
          description='This is a description.'
        />
        <Step title='Waiting' description='This is a description.' />
      </StyledAntStepsHor>
    </Space>
  );
};

export default Basic;
