import React, { useEffect } from 'react';
import AppsContainer from '@crema/components/AppsContainer';
import BoardDetailView from './BoardDetailView';
import { StyledScrumBoardDetailTitle } from './index.styled';
import { useGetDataApi } from '@crema/hooks/APIHooks';
import { useRouter } from 'next/router';

const BoardDetail = () => {
  const router = useRouter();
  const { query } = router;
  const { id } = query;
  const [{ apiData: boardDetail }, { setData, setQueryParams }] = useGetDataApi(
    '/api/scrumboard/board/',
    undefined,
    { id: id },
    false
  );

  useEffect(() => {
    setQueryParams({ id });
    return () => {
      setQueryParams(null);
    };
  }, [id]);

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
      <BoardDetailView boardDetail={boardDetail} setData={setData} />
    </AppsContainer>
  );
};

export default BoardDetail;
