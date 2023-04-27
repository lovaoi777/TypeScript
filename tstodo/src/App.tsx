import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Main from "./Pages/Main";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}
