import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import Home from "./home";
import About from "./about";
import Formation from "./formation";
import Project from "./project";
import Contact from "./contact";
import Aside from "./comp-aside/aside";

const App = () => {

  return (
    <div>
      <BrowserRouter>
      <Aside />
        <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/formation" element={<Formation />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
};
export default App;