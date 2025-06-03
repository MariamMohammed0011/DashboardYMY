import { useState } from "react";
import { BrowserRouter, Router, Route } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import SideBar from "./components/sideBar/SideBar";
import Home from "./components/home/Home";
import { Box } from "@mui/material";
function App() {
  return (
    <>
      <BrowserRouter>
        <Box display="flex">
          <SideBar />

          <Box flex={1} display="flex" flexDirection="column">
            <NavBar />

            <Box flex={1} padding={2}>
              <Home />
            </Box>
          </Box>
        </Box>
      </BrowserRouter>
    </>
  );
}

export default App;
