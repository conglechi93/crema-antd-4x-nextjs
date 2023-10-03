import React from "react";
import PropTypes from "prop-types";
import AppRowContainer from "@crema/components/AppRowContainer";
import { Col } from "antd";
import Link from "next/link";
import AppImage from "@crema/components/AppImage";
import {
  StyledConfirmationCard,
  StyledLinkBtn,
  StyledOrderPlacedAction,
  StyledOrderPlacedActionThumb,
  StyledOrderPlacedContent,
  StyledOrderPlacedInfo
} from "./index.styled";
import { getTotalPrice } from "./helper";

const OrderPlaced = ({cartItems}) => {
  return (
    <StyledConfirmationCard>
      <AppRowContainer>
        <Col xs={24} lg={16}>
          <StyledOrderPlacedInfo>
            <AppImage src={'/assets/images/ecommerce/gift.png'} alt='confirm' />
            <StyledOrderPlacedContent>
              <h3>Order placed for ${getTotalPrice(cartItems)}!</h3>
              <p className='mb-0'>
                Your {cartItems.length} Item will be delivered by Mon, 27 Aug
                20.
              </p>
            </StyledOrderPlacedContent>
          </StyledOrderPlacedInfo>
        </Col>
        <Col xs={24} lg={8}>
          <StyledOrderPlacedAction>
            <div>
              <p>Why call? Just click!</p>
              <p>Easily track all your orders! </p>
              <StyledLinkBtn type='primary'>
                <Link href='/ecommerce/orders'>Go to My Orders</Link>
              </StyledLinkBtn>
            </div>
            <StyledOrderPlacedActionThumb>
              <AppImage
                style={{maxHeight: 60, marginTop: 20}}
                src={'/assets/images/ecommerce/confirm-box.png'}
                alt='confirm'
              />
            </StyledOrderPlacedActionThumb>
          </StyledOrderPlacedAction>
        </Col>
      </AppRowContainer>
    </StyledConfirmationCard>
  );
};

export default OrderPlaced;

OrderPlaced.propTypes = {
  cartItems: PropTypes.array,
};
