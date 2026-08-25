import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./Portfolio";
import Work from "./Work";
import ProjectDetail from "./ProjectDetail";

export default function App() {
  return (
    <HashRouter>
      {" "}
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/work" element={<Work />} />
        <Route path="/project/:projectId" element={<ProjectDetail />} />
      </Routes>
    </HashRouter>
  );
}
