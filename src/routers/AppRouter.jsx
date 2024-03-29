import React, { useEffect } from 'react';
import Header from '../components/Header';
import Home from '../pages/Home';
import About from '../pages/About';
import Shop from '../pages/Shop';
import Cart from '../pages/Cart'; 
import Blogs from '../pages/Blogs';
import BlogDetails from '../pages/BlogDetails';
import Dashboard from "../pages/admin/Dashboard";
import AddBlog from "../pages/admin/update/AddBlog";
import EditBlog from "../pages/admin/update/EditBlog";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from 'react-use-cart';
import Footer from '../components/Footer';
import Login from '../pages/Login';
import Contact from '../pages/Contact';
import { ProductProvider } from '../context/ProductContext';
import { AuthProvider } from '../context/AuthContext';
import ProductDetails from '../pages/ProductDetails'
import Wishlist from '../pages/Wishlist';
import { WishlistProvider } from "react-use-wishlist";
import Checkout from '../pages/Chekout';
import Registration from '../pages/Registration';
import NotFoundPage from '../pages/NotFoundPage';
import Faq from '../pages/Faq';
import AOS from 'aos';
import 'aos/dist/aos.css'; 




const AppRouter = () => { 
  useEffect(()=>{
    AOS.init();
  },[])
  return (
   
     <BrowserRouter>
    <AuthProvider>
      <WishlistProvider>
  
      <CartProvider>
      <ProductProvider>
      <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/shop/:url" element={<ProductDetails />}></Route>
          <Route  path="/cart" element={<Cart />}></Route>
          <Route  path="/wishlist" element={<Wishlist />}></Route>
          <Route path="/blogs" element={<Blogs />}>  </Route>
          <Route path="/blogs/:id" element={<BlogDetails />}></Route>
          <Route path="/admin" element={<Dashboard />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/add" element={<AddBlog />}></Route>
        <Route path="/edit/:id" element={<EditBlog />}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/chekout" element={<Checkout />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
        <Route path="/faq" element={<Faq/>}></Route>
        <Route path="/notfoundpage" element={<NotFoundPage />}></Route>
        </Routes>
        <Footer />
        </ProductProvider>
              
        </CartProvider>
        
        </WishlistProvider>
        </AuthProvider>
       
    </BrowserRouter>
  
  );
};

export default AppRouter;
