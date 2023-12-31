import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AddContactForm from './AddContactForm';
import { StyledContactModal } from './index.styled';

const CreateContact = ({
  isAddContact,
  handleAddContactClose,
  selectContact,
  onUpdateContact,
}) => {
  const [userImage, setUserImage] = useState(
    selectContact && selectContact.image
      ? selectContact.image
      : '/assets/images/placeholder.jpg'
  );

  return (
    <StyledContactModal
      open={isAddContact}
      onOk={isAddContact}
      footer={false}
      onCancel={handleAddContactClose}
    >
      <AddContactForm
        selectContact={selectContact}
        setUserImage={setUserImage}
        userImage={userImage}
        onUpdateContact={onUpdateContact}
        handleAddContactClose={handleAddContactClose}
      />
    </StyledContactModal>
  );
};

export default CreateContact;

CreateContact.defaultProps = {
  selectContact: null,
};

CreateContact.propTypes = {
  isAddContact: PropTypes.bool.isRequired,
  handleAddContactClose: PropTypes.func.isRequired,
  onUpdateContact: PropTypes.func.isRequired,
  selectContact: PropTypes.object,
};
