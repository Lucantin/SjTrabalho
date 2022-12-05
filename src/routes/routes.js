import React from "react";
import { Route, BrowserRouter, Routes as Router } from "react-router-dom";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import AboutMe from "../pages/aboutMe";
import Contact from "../pages/contact";
import { Home } from "../pages/homePage";

const Routes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Router>
        <Route path="/" exact element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
      </Router>
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;
