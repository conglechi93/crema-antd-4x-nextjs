import React, { useEffect } from "react";
import TaskDetailHeader from "./TaskDetailHeader";
import TaskDetailBody from "./TaskDetailBody";
import AppsHeader from "@crema/components/AppsHeader";
import AppsContent from "@crema/components/AppsContent";
import { useGetDataApi } from "@crema/hooks/APIHooks";
import { useRouter } from "next/router";

const TaskDetail = () => {
  const { query } = useRouter();
  const [{apiData: selectedTask}, {setQueryParams, setData}] = useGetDataApi(
    '/api/todoApp/task/',
    undefined,
    {id: query.all[query.all.length - 1]},
    false,
  );

  useEffect(() => {
    setQueryParams({id:query.all[query.all.length - 1]});
  }, [query.all]);

  const onUpdateSelectedTask = (data) => {
    setData(data);
  };

  if (!selectedTask) {
    return null;
  }
  return (
    <>
      <AppsHeader>
        <TaskDetailHeader
          selectedTask={selectedTask}
          onUpdateSelectedTask={onUpdateSelectedTask}
        />
      </AppsHeader>
      <AppsContent isDetailView>
        <TaskDetailBody
          selectedTask={selectedTask}
          onUpdateSelectedTask={onUpdateSelectedTask}
        />
      </AppsContent>
    </>
  );
};

export default TaskDetail;
