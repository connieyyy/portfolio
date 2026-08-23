import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./Portfolio";
import Work from "./Work";

const basename = process.env.NODE_ENV === "production" ? "/portfolio" : "/";

export default function App() {
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </BrowserRouter>
  );
}
