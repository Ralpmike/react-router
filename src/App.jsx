import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AppLayout from "./components/AppLayout";
import ProductContextApi from "./context/contextApiProvider";
import ProductDetailsPage from "./pages/ProductDetailsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <div className={styles.App}>App</div> */}
        <ProductContextApi>
          <Routes>
            <Route element={<AppLayout />}>
              <Route
                path="product/:productId"
                element={<ProductDetailsPage />}
              />
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
        </ProductContextApi>
      </BrowserRouter>
    </>
  );
}

export default App;
