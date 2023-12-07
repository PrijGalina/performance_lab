import { LayoutContainer } from './styled';
import { Header } from '../header';
import { Content } from '../content';
import { Footer } from '../footer';

export const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <Header/>
      <Content>{children}</Content>
      <Footer/>
    </LayoutContainer>
  );
}