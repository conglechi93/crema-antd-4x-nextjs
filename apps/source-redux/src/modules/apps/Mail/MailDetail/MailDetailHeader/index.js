import React from 'react';
import IntlMessages from '@crema/helpers/IntlMessages';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Dropdown } from 'antd';
import { BiArchiveIn, BiArrowBack } from 'react-icons/bi';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { FiMoreVertical } from 'react-icons/fi';
import { MdLabelOutline } from 'react-icons/md';
import { AiOutlineDelete, AiOutlineInfoCircle } from 'react-icons/ai';
import AppIconButton from '@crema/components/AppIconButton';
import {
  StyledMailDetailActionHeader,
  StyledMailDetailArrow,
} from '../index.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  onUpdateMailFolders,
  onUpdateSelectedMail,
} from '../../../../../redux/actions';

const MailDetailHeader = ({ selectedMail }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const labelList = useSelector(({ mailApp }) => mailApp.labelList);

  const onClickBackButton = () => {
    router.back();
  };

  const onSelectLabel = (key) => {
    const mail = selectedMail;
    mail.label = labelList.find(
      (label) => label.id.toString() === key.toString()
    );
    dispatch(onUpdateSelectedMail(mail));
  };

  const onChangeMailFolder = (type) => {
    dispatch(onUpdateMailFolders([selectedMail.id], type));
  };

  const onChangeReadStatus = () => {
    dispatch(onUpdateSelectedMail({ ...selectedMail, isRead: false }));
    router.back();
  };

  const onChangeStarredStatus = () => {
    dispatch(
      onUpdateSelectedMail({
        ...selectedMail,
        isStarred: !selectedMail.isStarred,
      })
    );
  };

  const menuItems = labelList.map((label, index) => {
    return {
      key: index,
      label: <span onClick={() => onSelectLabel(label.id)}>{label.name}</span>,
    };
  });

  const menuMoveTo = [
    {
      key: '01',
      label: (
        <span onClick={onChangeReadStatus}>
          <IntlMessages id="mailApp.markAsUnread" />
        </span>
      ),
    },
    {
      key: '02',
      label: (
        <span onClick={onChangeStarredStatus}>
          {selectedMail.isStarred ? (
            <IntlMessages id="mailApp.markAsNotImportant" />
          ) : (
            <IntlMessages id="mailApp.markAsImportant" />
          )}
        </span>
      ),
    },
  ];

  if (!selectedMail) return null;
  return (
    <>
      <StyledMailDetailArrow
        title={<IntlMessages id="common.back" />}
        icon={<BiArrowBack />}
        onClick={onClickBackButton}
      />
      <h5 className="mb-0 text-truncate">
        {selectedMail.subject ? selectedMail.subject : null}
      </h5>
      <StyledMailDetailActionHeader>
        <AppIconButton
          title={<IntlMessages id="common.archive" />}
          icon={<BiArchiveIn />}
          onClick={() => onChangeMailFolder(127)}
        />

        <AppIconButton
          title={<IntlMessages id="common.reportSpam" />}
          icon={<AiOutlineInfoCircle />}
          onClick={() => onChangeMailFolder(125)}
        />

        <AppIconButton
          title={<IntlMessages id="common.trash" />}
          icon={<AiOutlineDelete />}
          onClick={() => onChangeMailFolder(126)}
        />

        <AppIconButton
          title={<IntlMessages id="mailApp.markAsUnread" />}
          icon={<HiOutlineMailOpen />}
          onClick={() => onChangeReadStatus()}
        />

        <Dropdown menu={{ items: menuItems }} trigger={['click']}>
          <AppIconButton
            title={<IntlMessages id="common.label" />}
            icon={<MdLabelOutline />}
          />
        </Dropdown>

        <Dropdown menu={{ items: menuMoveTo }} trigger={['click']}>
          <AppIconButton
            title={<IntlMessages id="common.more" />}
            icon={<FiMoreVertical />}
          />
        </Dropdown>
      </StyledMailDetailActionHeader>
    </>
  );
};

export default MailDetailHeader;

MailDetailHeader.propTypes = {
  selectedMail: PropTypes.object.isRequired,
  onUpdateSelectedMail: PropTypes.func,
};
