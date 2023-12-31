import React, { useEffect } from 'react';
import AppsContainer from '@crema/components/AppsContainer';
import BoardDetailView from './BoardDetailView';
import { useRouter } from 'next/router';
import { StyledScrumBoardDetailTitle } from './index.styled';
import {
  onGetBoardDetail,
  onNullifyBoardDetail,
} from '../../../../toolkit/actions';
import { useDispatch, useSelector } from 'react-redux';

const BoardDetail = () => {
  const router = useRouter();
  const { query } = router;
  const { id } = query;
  const boardDetail = useSelector(
    ({ scrumboardApp }) => scrumboardApp.boardDetail
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onGetBoardDetail(id));
    return () => {
      dispatch(onNullifyBoardDetail());
    };
  }, [dispatch, id]);

  const onGoToBoardList = () => {
    router.back();
  };

  if (!boardDetail) {
    return null;
  }

  return (
    <AppsContainer
      fullView
      noContentAnimation
      title={
        <>
          <StyledScrumBoardDetailTitle onClick={onGoToBoardList}>
            Scrum Board
          </StyledScrumBoardDetailTitle>
          &gt; {boardDetail?.name}
        </>
      }
    >
      <BoardDetailView boardDetail={boardDetail} />
    </AppsContainer>
  );
};

export default BoardDetail;
