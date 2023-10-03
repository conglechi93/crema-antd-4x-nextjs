import React, { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useGetDataApi } from '@crema/hooks/APIHooks';
import { useRouter } from 'next/router';

export const ViewMode = {
  List: 'list',
  Calendar: 'calendar',
};

const TodoContext = createContext();
const TodoActionsContext = createContext();

export const useTodoContext = () => useContext(TodoContext);

export const useTodoActionsContext = () => useContext(TodoActionsContext);

export const TodoContextProvider = ({ children }) => {
  const router = useRouter();
  const { all, asPath } = router.query;
  let folder;
  let label;
  if (all.length === 2 && !+all[1] > 0) {
    label = all[1];
  } else if (all.length === 1) {
    folder = all[0];
  }

  const [viewMode, setViewMode] = useState(ViewMode.List);
  const [{ apiData: labelList }] = useGetDataApi('/api/todo/labels/list');
  const [{ apiData: priorityList }] = useGetDataApi('/api/todo/priority/list');
  const [{ apiData: staffList }] = useGetDataApi('/api/todo/staff/list');
  const [{ apiData: folderList }] = useGetDataApi('/api/todo/folders/list', []);
  const [{ apiData: statusList }] = useGetDataApi('/api/todo/status/list', []);
  const [page, setPage] = useState(0);

  const [
    { apiData: taskLists, loading },
    { setQueryParams, setData: setTodoData, reCallAPI },
  ] = useGetDataApi('/api/todo/task/list', undefined, {}, false);

  useEffect(() => {
    setPage(0);
  }, [asPath]);

  useEffect(() => {
    if (folder || label)
      setQueryParams({
        type: all?.[0],
        name: all?.[1],
        page: page,
      });
  }, [page, all]);

  const onPageChange = (event, value) => {
    setPage(value);
  };

  return (
    <TodoContext.Provider
      value={{
        folder,
        label,
        labelList,
        priorityList,
        staffList,
        statusList,
        folderList,
        taskLists,
        loading,
        page,
        viewMode,
      }}
    >
      <TodoActionsContext.Provider
        value={{
          setTodoData,
          onPageChange,
          setQueryParams,
          reCallAPI,
          setPage,
          setViewMode,
        }}
      >
        {children}
      </TodoActionsContext.Provider>
    </TodoContext.Provider>
  );
};
export default TodoContextProvider;

TodoContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
