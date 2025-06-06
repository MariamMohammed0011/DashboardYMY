import { useState } from "react";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import SideBar from "./components/sideBar/SideBar";
import Home from "./components/home/Home";
import { Box } from "@mui/material";
import Staff from "./components/staff/Staff";
import Products from "./components/productsList/products/Products";
// import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <Box display="flex">
          <SideBar />

          <Box flex={1} display="flex" flexDirection="column">
            <NavBar />
            <Box flex={1} padding={2}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/staff" element={<Staff />} />
                <Route path="/products" element={<Products />} />
              </Routes>
            </Box>
          </Box>
        </Box>
      </BrowserRouter>
    </>
  );
}

export default App;
