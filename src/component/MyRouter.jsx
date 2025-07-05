import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import { Projects } from "./Projects";
import { projects } from "../constants";
import { ProjectDetail } from "./ProjectDetail";
import { Hero } from "./Hero";

const MyRouter = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/projects" element={<Projects projects={projects} />} />
          <Route
            path="/projects/:id"
            element={<ProjectDetail projects={projects} />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default MyRouter;
