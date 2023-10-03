import React from "react";
import {
  StyledAnaInfoWidgetCard,
  StyledAnaInfoWidgetContent,
  StyledAnaInfoWidgetImg,
  StyledAnaInfoWidgetInfo
} from "./index.styled";
import AppImage from "@crema/components/AppImage";
import PropTypes from "prop-types";

const InfoWidget = ({data}) => {
  return (
    <StyledAnaInfoWidgetCard heightFull>
      <StyledAnaInfoWidgetInfo>
        <StyledAnaInfoWidgetImg>
          <AppImage src={data.icon} alt='icon' />
        </StyledAnaInfoWidgetImg>
        <StyledAnaInfoWidgetContent>
          <h3>{data.count}</h3>
          <p className='text-truncate'>{data.details}</p>
        </StyledAnaInfoWidgetContent>
      </StyledAnaInfoWidgetInfo>
    </StyledAnaInfoWidgetCard>
  );
};

export default InfoWidget;

InfoWidget.propTypes = {
  data: PropTypes.object,
};
