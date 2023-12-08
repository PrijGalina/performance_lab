export const QUANTITY_PER_PAGE = 8;
export const COLOR_BASIC_YELLOW = '#f0c52e';
export const COLOR_BASIC_GREY = '#e5e5e5';

export const SORT_TYPES = {
  ByPrice: 'price',
  ByTitle: 'title',
  ByVendorCode: 'vendor_code',
  ByAsc: 'asc',
  ByDesc: 'desc'
};

export const SORT_CLICK_TYPES = {
  ParameterClick: 'param',
  ValueClick: 'value',
};

export const SORT_PARAM = [
  {
    key: 'by-price',
    type: SORT_TYPES.ByPrice,
    title: 'По цене',
  },
  {
    key: 'by-title',
    type: SORT_TYPES.ByTitle,
    title: 'По названию',
  },
  {
    key: 'by-vendor-code',
    type: SORT_TYPES.ByVendorCode,
    title: 'По артикулу',
  }
];

export const SORT_VALUE = [
  {
    key: 'asc',
    type: SORT_TYPES.ByAsc,
    desc: 'по возрастанию',
  },
  {
    key: 'desc',
    type: SORT_TYPES.ByDesc,
    desc: 'по убыванию',
  }
];

export const ACTION_TYPE = {
  SetNumberPage: 'main/setNumberPage',
  SetSortParam: 'main/setSortParam',
  SetSortValue: 'main/setSortValue',
  SetQuantityOfItem: 'main/setQuantityOfItem',
  SetCatalogSection: 'main/setCatalogSection',
  FetchDataRequest: 'data/fetchDataRequest',
  FetchDataSuccess: 'data/fetchDataSuccess',
  FetchDataFailure: 'data/fetchDataFailure'
};

export const PAGINATION_CLICK_TYPE = {
  Forward: 'forward',
  Back: 'back',
  Specific: 'specific'
};

export const CATALOG_SECTIONS = {
  Food: 'food',
  Cloth: 'cloth',
  Electronic: 'electronics',
}
