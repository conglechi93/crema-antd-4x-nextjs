import React from "react";
import { Card } from "antd";
import AppImage from "@crema/components/AppImage";

const {Meta} = Card;

const Customize = () => {
  return (
    <Card
      hoverable
      style={{width: 240}}
      cover={
        <AppImage
          alt='example'
          src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
        />
      }>
      <Meta title='Europe Street beat' description='www.instagram.com' />
    </Card>
  );
};

export default Customize;
