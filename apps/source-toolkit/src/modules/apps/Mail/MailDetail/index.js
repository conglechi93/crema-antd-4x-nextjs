import React, { createRef, useEffect } from 'react';
import MailDetailHeader from './MailDetailHeader';
import MailDetailBody from './MailDetailBody';
import { useRouter } from 'next/router';
import AppsContent from '@crema/components/AppsContent';
import AppsHeader from '@crema/components/AppsHeader';
import { MailDetailSkeleton } from '@crema/components/MailDetailSkeleton';
import { StyledMailDetail } from './index.styled';
import AppAnimate from '@crema/components/AppAnimate';
import { useDispatch, useSelector } from 'react-redux';
import { onGetSelectedMail, onNullifyMail } from '../../../../toolkit/actions';

const MailDetail = () => {
  const contentRef = createRef();
  const dispatch = useDispatch();

  const router = useRouter();
  const { all } = router.query;
  const selectedMail = useSelector(({ mailApp }) => mailApp.selectedMail);

  useEffect(() => {
    dispatch(onGetSelectedMail(all.slice(-1)[0]));
    return () => {
      onNullifyMail();
    };
  }, [dispatch, all]);

  if (!selectedMail) {
    return <MailDetailSkeleton />;
  }

  return (
    <StyledMailDetail ref={contentRef}>
      <AppsHeader>
        <MailDetailHeader selectedMail={selectedMail} />
      </AppsHeader>
      <AppsContent isDetailView>
        <AppAnimate animation="transition.slideUpIn" delay={200}>
          <MailDetailBody selectedMail={selectedMail} key={'mail_detail'} />
        </AppAnimate>
      </AppsContent>
    </StyledMailDetail>
  );
};

export default MailDetail;
