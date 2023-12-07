import { useState, useEffect } from 'react';
import { SortContainer, SortTitle, SortParamList, SortValueList, SortParamLink, SortValueLink, SortValueHidden } from './styled';
import { SORT_PARAM, SORT_VALUE } from '../../../constants';

export const Sorting = () => {
  const [activeParam, setActiveParam] = useState(SORT_PARAM[0].value);
  const [activeValue, setActiveValue] = useState(SORT_VALUE[0].type);

  let handleParamClick = (item) => {
    if (activeParam === item.value) return;

    setActiveParam(item.value);
  };

  let handleValueClick = (item) => {
    if (activeValue === item.type) return;

    setActiveValue(item.type);
  };

  return (
    <SortContainer>
      <SortTitle className="section-title">Сортировка:</SortTitle>
      <SortParamList>
        {
          SORT_PARAM.map((item) => {
            return (
              <li key={item.key}>
                <SortParamLink isActive={activeParam === item.value} onClick={() => handleParamClick(item)}>{item.title}</SortParamLink>
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
                <SortValueLink isActive={activeValue === item.type} type={item.type} onClick={() => handleValueClick(item)}>
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