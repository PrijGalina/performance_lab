import { BrowserRouter, Routes, Route, Navigate  } from "react-router-dom";
import { Layout } from "./containers/layout";
import { Food } from "./pages/food";
import { Cloth } from "./pages/cloth";
import { Electronics } from "./pages/electronics";
import { GlobalStyles } from './styled';
// import { useSelector } from "react-redux";

export const App = () => {
  // const store = useSelector(store => store);
  // console.log('store', store);

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="food" />} />
            <Route path="food" element={<Food />} />
            <Route path="cloth" element={<Cloth/>} />
            <Route path="electronics" element={<Electronics/>} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
