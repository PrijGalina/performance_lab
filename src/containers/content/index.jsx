import { useSelector } from 'react-redux';
import {getIsLoading } from '../../redux/slices/data/dataSelectors.js';
import { ContentContainer, CatalogContainer, HiddenTitle, CatalogInner } from './styled';
import { Sorting } from '../../components/ui/sorting';
import { Loader } from '../../components/ui/loader';
import { Sidebar } from '../sidebar/index.jsx';

export const Content = ({children}) => {
  const isLoading = useSelector(getIsLoading);
  return (
    <ContentContainer>
        <CatalogContainer>
          <HiddenTitle>Список товаров</HiddenTitle>
          <Sorting/>
          <CatalogInner>
            {isLoading && <Loader size="120px"/>}
            {children}
          </CatalogInner>
        </CatalogContainer>
        <Sidebar/>
    </ContentContainer>
  );
}