import React, { useEffect } from 'react';
import TaskDetailHeader from './TaskDetailHeader';
import TaskDetailBody from './TaskDetailBody';
import { useRouter } from 'next/router';
import AppsHeader from '@crema/components/AppsHeader';
import AppsContent from '@crema/components/AppsContent';
import { useDispatch, useSelector } from 'react-redux';
import { onGetSelectedTask } from '../../../../toolkit/actions';

const TaskDetail = () => {
  const { query } = useRouter();
  const id = query.all[query.all.length - 1];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(onGetSelectedTask(id));
  }, [dispatch, id]);

  const selectedTask = useSelector(({ todoApp }) => todoApp.selectedTask);

  if (!selectedTask) {
    return null;
  }
  return (
    <>
      <AppsHeader>
        <TaskDetailHeader id={id} selectedTask={selectedTask} />
      </AppsHeader>
      <AppsContent isDetailView>
        <TaskDetailBody selectedTask={selectedTask} />
      </AppsContent>
    </>
  );
};

export default TaskDetail;
