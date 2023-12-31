import React, { useState } from "react";
import PropTypes from "prop-types";
import TaskDetailBody from "../../TaskDetail/TaskDetailBody";
import { StyledTaskCalenderModal } from "./index.styled";

const ViewEditTodo = ({taskList, toDoId, showModal}) => {
  const [isModalVisible, setIsModalVisible] = useState(showModal);
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const todo = taskList.find((task) => {
    return task.id === toDoId;
  });

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <StyledTaskCalenderModal
      open={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      width={800}>
      <TaskDetailBody selectedTask={todo} />
    </StyledTaskCalenderModal>
  );
};

ViewEditTodo.propTypes = {
  taskList: PropTypes.any,
  showModal: PropTypes.any,
  toDoId: PropTypes.any,
};

export default ViewEditTodo;
