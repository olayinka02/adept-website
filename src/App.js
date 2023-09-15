import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../src/component/homepage/HomePage";
import Notfound from "./component/pagenotfound/Notfound";
import OurService from "./component/ourservices/OurService";

const RootApplication = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/ourservice" exact element={<OurService />} />
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
