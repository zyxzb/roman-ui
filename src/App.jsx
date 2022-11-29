import React from "react";
import {GlobalStyle} from "./assets/styles/GlobalStyles";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "components/Navigation/Navigation";
import InfiniteScroll from "episodes/InfiniteScroll/InfiniteScroll";
import Welcome from "components/Welcome/Welcome";
import AccordionFaq from "episodes/AccordionFaq/AccordionFaq";
import Sidebar from "episodes/Sidebar/Sidebar";
import AnimatedButtons from "episodes/AnimatedButtons/AnimatedButtons";

function App() {
  return (
    <>
    <BrowserRouter>
      <GlobalStyle />
      <Navigation/>
      <Routes>
        <Route path="/" index element={<Welcome/>}/>
        <Route path="/infinite-scroll" element={<InfiniteScroll/>}/>
        <Route path="/accordion-faq" element={<AccordionFaq/>}/>
        <Route path="/sidebar" element={<Sidebar/>}/>
        <Route path="/animated-buttons" element={<AnimatedButtons/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
