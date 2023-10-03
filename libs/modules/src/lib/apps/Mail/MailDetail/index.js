import React, { createRef, useEffect } from "react";
import MailDetailHeader from "./MailDetailHeader";
import MailDetailBody from "./MailDetailBody";
import AppsContent from "@crema/components/AppsContent";
import AppsHeader from "@crema/components/AppsHeader";
import { MailDetailSkeleton } from "@crema/components/MailDetailSkeleton";
import { StyledMailDetail } from "./index.styled";
import AppAnimate from "@crema/components/AppAnimate";
import { useGetDataApi } from "@crema/hooks/APIHooks";
import { useRouter } from "next/router";

const MailDetail = () => {
  const contentRef = createRef();

  const router = useRouter();
  const {all} = router.query;

  const [{ apiData: selectedMail }, { setQueryParams, setData }] =
    useGetDataApi('/api/mailApp/mail/', undefined, { }, false);

  useEffect(() => {
    setQueryParams({ id:all.slice(-1)[0] });
  }, [all]);

  const onUpdateSelectedMail = (data) => {
    setData(data);
  };

  if (!selectedMail) {
    return <MailDetailSkeleton />;
  }

  return (
    <StyledMailDetail ref={contentRef}>
      <AppsHeader>
        <MailDetailHeader
          selectedMail={selectedMail}
          onUpdateSelectedMail={onUpdateSelectedMail}
        />
      </AppsHeader>
      <AppsContent isDetailView>
        <AppAnimate animation="transition.slideUpIn" delay={200}>
          <MailDetailBody
            selectedMail={selectedMail}
            key={'mail_detail'}
            onUpdateSelectedMail={onUpdateSelectedMail}
          />
        </AppAnimate>
      </AppsContent>
    </StyledMailDetail>
  );
};

export default MailDetail;
