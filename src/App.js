import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Admin from "./Admin/Admin";
import Product from "./Product/Product";

import Navbar from "./common/Navbar";
import "./app.css";

const App = () => {
  return (
    <div className="AppStyle">
      <Router>
        <div className="container">
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={<div> Hello from react router dom </div>}
            />
            <Route path="/admin" element={<Admin />} />
            <Route path="/product" element={<Product />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
