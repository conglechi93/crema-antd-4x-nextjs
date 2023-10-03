import React from "react";
import PropTypes from "prop-types";
import NavLink from "next/link";
import { StyledTodoDots, StyledTodoLabelItem } from "./index.styled";

const LabelItem = ({label}) => {
  return (
    <StyledTodoLabelItem>
      <NavLink href={`/apps/todo/label/${label.alias}`}>
        <StyledTodoDots
          className='todo-dots'
          style={{backgroundColor: label.color}}
        />
        {label.name}
      </NavLink>
    </StyledTodoLabelItem>
  );
};

export default LabelItem;

LabelItem.propTypes = {
  label: PropTypes.object.isRequired,
};
