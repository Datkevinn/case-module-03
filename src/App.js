import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductAdd from "./components/ProductAdd";
import ProductDelete from "./components/ProductDelete";
import ProductEdit from "./components/ProductEdit";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/add" element={<ProductAdd />} />
          <Route
            path="/product/edit/:id"
            element={<ProductEdit />}
          />
          <Route
            path="/product/delete/:id"
            element={<ProductDelete />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
