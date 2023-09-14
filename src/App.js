import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../src/component/homepage/HomePage";
import Notfound from "./component/pagenotfound/Notfound";

const RootApplication = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <Router>
      <RootApplication />
    </Router>
  );
}

export default App;
