import { SortContainer, SortTitle, SortParamList, SortValueList, SortParamLink, SortValueLink, SortValueHidden } from './styled';
import { SORT_PARAM, SORT_VALUE, SORT_CLICK_TYPES } from '../../../constants';
import { useSelector, useDispatch } from 'react-redux';
import { setSortParam, setSortValue } from '../../../redux/slices/main/mainSlice.js';
import { getSortParam, getSortValue } from '../../../redux/slices/main/mainSelectors.js';

export const Sorting = () => {
  const dispatch = useDispatch();
  const activeParam = useSelector(getSortParam);
  const activeValue = useSelector(getSortValue);

  const hahdleChanseSort = (type, item) => {
    switch (type) {
      case SORT_CLICK_TYPES.ParameterClick:
        if (activeParam === item.type) return;
        dispatch(setSortParam(item.type));
        break;
      case SORT_CLICK_TYPES.ValueClick:
        if (activeValue === item.type) return;
        dispatch(setSortValue(item.type));
        break;
      default:
        break;
    }
  }

  return (
    <SortContainer>
      <SortTitle>Sorting:</SortTitle>
      <SortParamList>
        {
          SORT_PARAM.map((item) => {
            return (
              <li key={item.key}>
                <SortParamLink $isActive={activeParam === item.type} onClick={() => hahdleChanseSort(SORT_CLICK_TYPES.ParameterClick, item)}>{item.title}</SortParamLink>
              </li>
            )
          })
        }
      </SortParamList>

      <SortValueList>
        {
          SORT_VALUE.map((item) => {
            return (
              <li key={item.key}>
                <SortValueLink $isActive={activeValue === item.type} type={item.type} onClick={() => hahdleChanseSort(SORT_CLICK_TYPES.ValueClick, item)}>
                  <SortValueHidden>{item.desc}</SortValueHidden>
                </SortValueLink>
              </li>
            )
          })
        }
      </SortValueList>
    </SortContainer>
  )
}