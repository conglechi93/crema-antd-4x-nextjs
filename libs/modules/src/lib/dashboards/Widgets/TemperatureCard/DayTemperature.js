import React from "react";
import PropTypes from "prop-types";
import AppImage from "@crema/components/AppImage";
import { StyledDayTempItem } from "./index.styled";

const DayTemperature = (props) => {
  const {day} = props;

  return (
    <StyledDayTempItem>
      <p>{day.day}</p>
      <span>
        <AppImage src={day.image} alt='weather' />
      </span>
    </StyledDayTempItem>
  );
};

export default DayTemperature;

DayTemperature.propTypes = {
  day: PropTypes.object.isRequired,
};
