import React from "react";
import PropTypes from "prop-types";
import AppImage from "@crema/components/AppImage";
import { StyledStatsSecondAvatar, StyledStatsSecondCard } from "./index.styled";

const StatsCardSecond = ({icon, bgColor, text, value}) => {
  return (
    <StyledStatsSecondCard heightFull>
      <StyledStatsSecondAvatar
        src={<AppImage src={icon} alt='' />}
        style={{backgroundColor: bgColor}}
      />
      <h3>{value}</h3>
      <p>{text}</p>
    </StyledStatsSecondCard>
  );
};

export default StatsCardSecond;

StatsCardSecond.defaultProps = {
  bgColor: '',
  value: '',
};

StatsCardSecond.propTypes = {
  bgColor: PropTypes.string,
  text: PropTypes.any.isRequired,
  value: PropTypes.string,
  icon: PropTypes.string,
};
