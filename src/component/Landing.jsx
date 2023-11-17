import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from "./Nav";
import { Products } from "./Products";
import { ProductDetails } from "./ProductDetails";
import { Cart } from "./Cart";

export const Landing=()=>{
    const [search,setSearch]=useState()
    return(
        <BrowserRouter>
            <Nav setSearch={setSearch} />
            <Routes>
                <Route path="/" element={<Products search={search} />} />
                <Route path="/proddetails" element={<ProductDetails />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </BrowserRouter>
    );
}