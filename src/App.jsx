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
import CoolTransitions from "episodes/CoolTransitions/CoolTransitions";
import Demo1 from "episodes/CoolTransitions/Demo1";
import Demo2 from "episodes/CoolTransitions/Demo2";
import Demo3 from "episodes/CoolTransitions/Demo3";
import Demo4 from "episodes/CoolTransitions/Demo4";
import AnimatedSvg from "episodes/AnimatedSVG/AnimatedSVG";

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
        <Route path="/cool-transitions" element={<CoolTransitions/>}>
            <Route index element={<Demo1/>}/>
            <Route path="demo-2" element={<Demo2/>}/>
            <Route path="demo-3" element={<Demo3/>}/>
            <Route path="demo-4" element={<Demo4/>}/>
        </Route>
        <Route path="/animated-svg" element={<AnimatedSvg/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
