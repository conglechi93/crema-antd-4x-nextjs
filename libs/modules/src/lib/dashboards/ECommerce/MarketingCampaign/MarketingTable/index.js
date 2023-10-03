import React from "react";
import PropTypes from "prop-types";
import { Avatar } from "antd";
import {
  StyledGraphItem,
  StyledMarketingCampaignTable,
  StyledMarketingUserInfo,
  StyledMarketingUserInfoContent
} from "../index.styled";
import AppImage from "@crema/components/AppImage";

const OrderTable = ({marketingCampaignData}) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (name) => (
        <StyledMarketingUserInfo>
          <Avatar src={name.icon} />
          <StyledMarketingUserInfoContent>
            <h3>{name.name}</h3>
            <p>{name.description}</p>
          </StyledMarketingUserInfoContent>
        </StyledMarketingUserInfo>
      ),
    },
    {
      title: 'Spend',
      dataIndex: 'spend',
      key: 'spend',
    },
    {
      title: 'Graph',
      dataIndex: 'graph',
      key: 'graph',
      render: (graph) => (
        <StyledGraphItem>
          <span>
            {graph.growth ? (
              <AppImage
                src={'/assets/images/dashboard/growth_icon.svg'}
                alt='growth_icon'
              />
            ) : (
              <AppImage
                src={'/assets/images/dashboard/decries_icon.svg'}
                alt='decries_icon'
              />
            )}
          </span>
          <span style={{color: `${graph.growth ? '#0A8FDC' : '#F44D50'}`}}>
            {graph.graph}
          </span>
          <span>{graph.growth ? 'Up' : 'Down'}</span>
        </StyledGraphItem>
      ),
    },
  ];

  return (
    <StyledMarketingCampaignTable
      data={marketingCampaignData}
      columns={columns}
    />
  );
};

export default OrderTable;

OrderTable.defaultProps = {
  marketingCampaignData: [],
};

OrderTable.propTypes = {
  marketingCampaignData: PropTypes.array,
};
