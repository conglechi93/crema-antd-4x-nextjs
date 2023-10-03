import React, { useEffect, useState } from 'react';
import AppsHeader from '@crema/components/AppsHeader';
import AppsContent from '@crema/components/AppsContent';
import {
  StyledProductListMainContent,
  StyledProductListView,
} from './index.styled';
import { useGetDataApi } from '@crema/hooks/APIHooks';
import PropTypes from 'prop-types';
import { VIEW_TYPE } from '../index';
import {
  ProductGrid,
  ProductHeader,
  ProductList,
} from '@crema/modules/ecommerce/Products';

const ProductListing = ({
  filterData,
  viewType,
  setViewType,
  setFilterData,
}) => {
  const [{ apiData: ecommerceList, loading }, { setQueryParams }] =
    useGetDataApi('/api/ecommerce/list', [], {}, false);
  const [page, setPage] = useState(0);

  const searchProduct = (title) => {
    setFilterData({ ...filterData, title });
  };

  useEffect(() => {
    setQueryParams({ filterData, page });
  }, [filterData]);

  return (
    <StyledProductListView>
      <AppsHeader>
        <ProductHeader
          viewType={viewType}
          onChange={searchProduct}
          setViewType={setViewType}
        />
      </AppsHeader>

      <AppsContent>
        <StyledProductListMainContent>
          {viewType === VIEW_TYPE.GRID ? (
            <ProductGrid ecommerceList={ecommerceList.list} loading={loading} />
          ) : (
            <ProductList ecommerceList={ecommerceList.list} loading={loading} />
          )}
        </StyledProductListMainContent>
      </AppsContent>
    </StyledProductListView>
  );
};

export default ProductListing;

ProductListing.propTypes = {
  filterData: PropTypes.object,
  viewType: PropTypes.string,
  setViewType: PropTypes.func,
  setFilterData: PropTypes.func,
};
