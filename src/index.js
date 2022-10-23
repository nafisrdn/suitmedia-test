import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Ideas from "./routes/Ideas";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/ideas" element={<Ideas />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
