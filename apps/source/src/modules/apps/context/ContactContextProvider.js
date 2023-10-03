import React, { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useGetDataApi } from '@crema/hooks/APIHooks';
import { useRouter } from 'next/router';

const ContactContext = createContext();
const ContactActionsContext = createContext();

export const useContactContext = () => useContext(ContactContext);

export const useContactActionsContext = () => useContext(ContactActionsContext);

export const ContactContextProvider = ({ children }) => {
  const router = useRouter();
  const { all } = router.query;
  const [{ apiData: labelList }] = useGetDataApi(
    '/api/contactApp/labels/list',
    []
  );

  const [{ apiData: folderList }] = useGetDataApi(
    '/api/contactApp/folders/list',
    []
  );

  const [pageView, setPageView] = useState('list');

  const [page, setPage] = useState(0);

  const [
    { apiData: contactList, loading },
    { setQueryParams, setData: setContactData, reCallAPI },
  ] = useGetDataApi('/api/contactApp/contact/List', {}, {}, false);

  useEffect(() => {
    setPage(0);
  }, [all]);

  useEffect(() => {
    setQueryParams({
      type: all[0],
      name: all[1],
      page: page,
    });
  }, [all, page]);

  const onPageChange = (event, value) => {
    setPage(value);
  };

  const onChangePageView = (view) => {
    setPageView(view);
  };

  return (
    <ContactContext.Provider
      value={{
        all,
        labelList,
        folderList,
        contactList,
        loading,
        page,
        pageView,
      }}
    >
      <ContactActionsContext.Provider
        value={{
          setContactData,
          onPageChange,
          reCallAPI,
          setPageView,
          onChangePageView,
        }}
      >
        {children}
      </ContactActionsContext.Provider>
    </ContactContext.Provider>
  );
};
export default ContactContextProvider;

ContactContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
