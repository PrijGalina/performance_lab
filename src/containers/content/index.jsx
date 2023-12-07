import { ContentContainer, CatalogContainer, HiddenTitle } from './styled';
import { Sorting } from '../../components/ui/sorting';

export const Content = ({children}) => {
  return (
    <ContentContainer>
        <CatalogContainer>
          <HiddenTitle>Список товаров</HiddenTitle>
          <Sorting/>
          {children}
        </CatalogContainer>
    </ContentContainer>
  );
}
