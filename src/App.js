import { BrowserRouter, Routes, Route, Navigate  } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Layout } from "./containers/layout";
import { Food } from "./pages/food";
import { Cloth } from "./pages/cloth";
import { Electronics } from "./pages/electronics";
import { ErrorPage } from "./pages/error-page";
import { GlobalStyles } from './styled';
import { useDispatch } from "react-redux";
import { ACTION_TYPE, CATALOG_SECTIONS } from './constants';

const history = createBrowserHistory();

export const App = () => {
  const dispatch = useDispatch();

  const RedirectToFood = () => {
    localStorage.setItem('currentPage', CATALOG_SECTIONS.Food);
    dispatch({type: ACTION_TYPE.SetCatalogSection, payload: CATALOG_SECTIONS.Food});
    return <Navigate to={CATALOG_SECTIONS.Food}/>;
  };

  return (
    <>
      <GlobalStyles />
      <BrowserRouter history={history}>
        <Layout>
          <Routes>
            <Route path="/" element={<RedirectToFood />} />
            <Route path={CATALOG_SECTIONS.Food} element={<Food />} />
            <Route path={CATALOG_SECTIONS.Cloth} element={<Cloth/>} />
            <Route path={CATALOG_SECTIONS.Electronic} element={<Electronics/>} />
            <Route path="*" element={<ErrorPage/>} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
