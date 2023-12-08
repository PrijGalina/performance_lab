import { SortContainer, SortTitle, SortParamList, SortValueList, SortParamLink, SortValueLink, SortValueHidden } from './styled';
import { SORT_PARAM, SORT_VALUE, SORT_CLICK_TYPES } from '../../../constants';
import { useSelector, useDispatch } from 'react-redux';
import { setSortParam, setSortValue } from '../../../redux/slices/main/mainSlice.js';
import { getSortParam, getSortValue } from '../../../redux/slices/main/mainSelectors.js';

export const Sorting = () => {
  let dispatch = useDispatch();
  let activeParam = useSelector(getSortParam);
  let activeValue = useSelector(getSortValue);

  let hahdleChanseSort = (type, item) => {
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
      <SortTitle className="section-title">Сортировка:</SortTitle>
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