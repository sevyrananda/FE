import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import ProductListing from "../pages/ProductListing";
import ProductDetails from "../pages/ProductDetails";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import Welcome from "../pages/Welcome";
import DataUser from "../pages/DataUser";
import AddUser from "../pages/AddUser";
import DataMahasiswa from "../pages/DataMahasiswa";
import AddMahasiswa from "../pages/AddMahasiswa";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<ProductListing />} />
      <Route path="/products/:slug" element={<ProductDetails />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/blogs/:slug" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/user" element={<DataUser />} />
      <Route path="/add-user" element={<AddUser />} />
      <Route path="/mahasiswa" element={<DataMahasiswa />} />
      <Route path="/add-mahasiswa" element={<AddMahasiswa />} />
    </Routes>
  );
};

export default Routers;
