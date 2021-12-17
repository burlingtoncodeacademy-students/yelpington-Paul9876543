import React from "react";
import Homepage from "./components/homepage";
import Restaurant from "./components/restaurant";
//importing react-router
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/restaurant/:restaurantId" element={<Restaurant />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
