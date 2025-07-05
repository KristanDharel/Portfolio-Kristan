import React from "react";
import { Route, Routes } from "react-router-dom";
import { Hero } from "./Hero";
import { About } from "./About";
import Services from "./Services";
import { Projects } from "./Projects";
import { Certifications } from "./Certification";
import { Contact } from "./Contact";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="about" element={<About />} />
        <Route path="service" element={<Services />} />
        <Route path="projects" element={<Projects />} />
        <Route path="certification" element={<Certifications />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default Router;
