import { Route, Routes } from "react-router-dom";
import { About } from "../Components/About";
import { Contact } from "../Components/Contact";
import { FAQ } from "../Components/FAQ";
import { Footer } from "../Components/Footer";
import { Home } from "../Components/Home";
import Navbar from "../Components/Navbar";
import { ProductCategory } from "../Components/ProductCategory";
import { ProductDetails } from "../Components/ProductDetails";
import { Products } from "../Components/Products";

export const MyRouter = () => {
  return (
    <>
      <Navbar position="sticky" top="0" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:id" element={<ProductCategory />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/FAQ's" element={<FAQ />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </>
  );
};
