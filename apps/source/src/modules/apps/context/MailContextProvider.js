import React, { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useGetDataApi } from '@crema/hooks/APIHooks';
import { useRouter } from 'next/router';

const MailContext = createContext();
const MailActionsContext = createContext();

export const useMailContext = () => useContext(MailContext);

export const useMailActionsContext = () => useContext(MailActionsContext);

export const MailContextProvider = ({ children }) => {
  const router = useRouter();
  const { asPath } = router;
  const { all } = router.query;
  let folder;
  let label;
  if (all.length === 2 && !+all[1] > 0) {
    label = all[1];
  } else if (all.length === 1) {
    folder = all[0];
  }

  const [{ apiData: labelList }] = useGetDataApi('/api/mailApp/labels/list');
  const [{ apiData: connectionList }] = useGetDataApi(
    '/api/mailApp/connection/list'
  );
  const [{ apiData: folderList }] = useGetDataApi('/api/mailApp/folders/list');
  const [page, setPage] = useState(0);

  const [
    { apiData: mailList, loading },
    { setQueryParams, setData: setMailData },
  ] = useGetDataApi(
    '/api/mailApp/folder/mail/List',
    undefined,
    {
      type: all?.[0],
      name: all?.[1],
      page: page,
    },
    false
  );

  useEffect(() => {
    setPage(0);
  }, [asPath]);

  useEffect(() => {
    setQueryParams({
      type: all?.[0],
      name: all?.[1],
      page,
    });
  }, [page, asPath, all]);

  const onPageChange = (event, value) => {
    setPage(value);
  };

  return (
    <MailContext.Provider
      value={{
        all,
        folder,
        label,
        labelList,
        connectionList,
        folderList,
        mailList,
        loading,
        page,
      }}
    >
      <MailActionsContext.Provider
        value={{
          setMailData,
          onPageChange,
        }}
      >
        {children}
      </MailActionsContext.Provider>
    </MailContext.Provider>
  );
};
export default MailContextProvider;

MailContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
