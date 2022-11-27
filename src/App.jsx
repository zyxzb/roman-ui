import React from "react";
import {GlobalStyle} from "./assets/styles/GlobalStyles";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "components/Navigation/Navigation";
import InfiniteScroll from "episodes/InfiniteScroll/InfiniteScroll";
import Welcome from "components/Welcome/Welcome";

function App() {
  return (
    <>
    <BrowserRouter>
      <GlobalStyle />
      <Navigation/>
      <Routes>
        <Route path="/" index element={<Welcome/>}/>
        <Route path="/infinite-scroll" element={<InfiniteScroll/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
