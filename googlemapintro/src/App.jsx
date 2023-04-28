import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Issues from "./components/Issues";
import FutureFeatures from "./components/FutureFeatures";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/issues" element={<Issues />} />
      <Route path="/futurefeatures" element={<FutureFeatures />} />
    </Routes>
    
  );
}

export default App;
