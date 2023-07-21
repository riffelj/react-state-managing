import React from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Products from "./Products";

import { Routes, Route } from "react-router-dom";

export default function App() {

  return (
    <>
      <div className="content">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Products />} />
          </Routes>

        </main>
      </div>
      <Footer />
    </>
  );
}
