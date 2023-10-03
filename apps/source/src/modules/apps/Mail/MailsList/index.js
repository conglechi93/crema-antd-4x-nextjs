import React, { useState } from 'react';
import MailContentHeader from './MailContentHeader';
import MailListItem from './MailListItem';
import AppsPagination from '@crema/components/AppsPagination';
import AppsContent from '@crema/components/AppsContent';
import AppsHeader from '@crema/components/AppsHeader';
import AppsFooter from '@crema/components/AppsFooter';
import AppList from '@crema/components/AppList';
import ListEmptyResult from '@crema/components/AppList/ListEmptyResult';
import EmailListSkeleton from '@crema/components/EmailListSkeleton';
import {
  StyledAppsMailFooter,
  StyledMailListDesktop,
  StyledMailListMobile,
} from './index.styled';
import { putDataApi, useGetDataApi } from '@crema/hooks/APIHooks';
import { useInfoViewActionsContext } from '@crema/context/InfoViewContextProvider';
import { MailListItemMobile } from '@crema/modules/apps/Mail';
import {
  useMailActionsContext,
  useMailContext,
} from '../../context/MailContextProvider';
import { useRouter } from 'next/router';

const MailsList = () => {
  const router = useRouter();
  const query = router.query;
  const { page, mailList, loading } = useMailContext();
  const { setMailData, onPageChange } = useMailActionsContext();

  const [filterText, onSetFilterText] = useState('');

  const infoViewActionsContext = useInfoViewActionsContext();

  const [checkedMails, setCheckedMails] = useState([]);

  const [{ apiData: labelList }] = useGetDataApi('/api/mailApp/labels/list');

  const onChangeCheckedMails = (checked, id) => {
    if (checked) {
      setCheckedMails(checkedMails.concat(id));
    } else {
      setCheckedMails(checkedMails.filter((mailId) => mailId !== id));
    }
  };

  const onViewMailDetail = (mail) => {
    if (mail.isRead) {
      router.push(
        `/apps/mail/${query.folder ? query.folder : `label/${query.label}`}/${
          mail.id
        }`
      );
    } else {
      mail.isRead = true;
      putDataApi('/api/mailApp/mail/', infoViewActionsContext, { mail })
        .then((data) => {
          onUpdateItem(data);
          router.push(
            `/apps/mail/${
              query.folder ? query.folder : `label/${query.label}`
            }/${mail.id}`
          );
          infoViewActionsContext.showMessage(
            mail.isRead
              ? 'Mail Marked as Read Successfully'
              : 'Mail Marked as Unread Successfully'
          );
        })
        .catch((error) => {
          infoViewActionsContext.fetchError(error.message);
        });
    }
  };

  const onChangeStarred = (checked, mail) => {
    putDataApi('/api/mailApp/update/starred', infoViewActionsContext, {
      mailIds: [mail.id],
      status: checked,
    })
      .then((data) => {
        onUpdateItem(data[0]);
        infoViewActionsContext.showMessage(
          checked
            ? 'Mail Marked as Starred Successfully'
            : 'Mail Marked as Unstarred Successfully'
        );
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  const onUpdateItem = (data) => {
    setMailData({
      data: mailList.data.map((item) => {
        if (item.id === data.id) {
          return data;
        }
        return item;
      }),
      count: mailList.count,
    });
  };

  const onRemoveItem = (data) => {
    setMailData({
      data: mailList.data.filter((item) => item.id !== data.id),
      count: mailList.count - 1,
    });
  };

  return (
    <>
      <AppsHeader>
        <MailContentHeader
          checkedMails={checkedMails}
          setCheckedMails={setCheckedMails}
          filterText={filterText}
          onSetFilterText={onSetFilterText}
        />
      </AppsHeader>
      <AppsContent>
        <StyledMailListDesktop>
          <AppList
            data={mailList?.data?.filter((item) =>
              item.subject.toLowerCase().includes(filterText.toLowerCase())
            )}
            ListEmptyComponent={
              <ListEmptyResult
                loading={loading}
                placeholder={<EmailListSkeleton />}
              />
            }
            renderItem={(mail) => (
              <MailListItem
                mail={mail}
                key={mail.id}
                labelList={labelList}
                onChangeCheckedMails={onChangeCheckedMails}
                checkedMails={checkedMails}
                onViewMailDetail={onViewMailDetail}
                onChangeStarred={onChangeStarred}
                onRemoveItem={onRemoveItem}
                onUpdateItem={onUpdateItem}
              />
            )}
          />
        </StyledMailListDesktop>
        <StyledMailListMobile>
          <AppList
            data={mailList?.data?.filter((item) =>
              item.subject.toLowerCase().includes(filterText.toLowerCase())
            )}
            ListEmptyComponent={
              <ListEmptyResult
                loading={loading}
                placeholder={<EmailListSkeleton />}
              />
            }
            renderItem={(mail) => (
              <MailListItemMobile
                mail={mail}
                key={mail.id}
                labelList={labelList}
                onViewMailDetail={onViewMailDetail}
                onChangeStarred={onChangeStarred}
                checkedMails={checkedMails}
                onChangeCheckedMails={onChangeCheckedMails}
              />
            )}
          />
        </StyledMailListMobile>
      </AppsContent>
      {mailList?.data?.length > 0 ? (
        <StyledAppsMailFooter>
          <AppsFooter>
            <AppsPagination
              count={mailList?.count}
              page={page}
              onChange={onPageChange}
            />
          </AppsFooter>
        </StyledAppsMailFooter>
      ) : null}
    </>
  );
};

export default MailsList;
