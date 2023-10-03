import React, { useEffect } from 'react';
import BoardDetail from './BoardDetail';
import BoardList from './BoardList';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { onGetMemberList, onGetScrumLabelList } from '../../../redux/actions';

const ScrumBoard = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onGetScrumLabelList());
  }, [dispatch]);

  useEffect(() => {
    dispatch(onGetMemberList());
  }, [dispatch]);

  const onGetMainComponent = () => {
    if (id) {
      return <BoardDetail />;
    } else {
      return <BoardList />;
    }
  };

  return <>{onGetMainComponent()}</>;
};

export default ScrumBoard;
