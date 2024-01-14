import { Routes, Route, Navigate } from "react-router-dom";

import { Home } from "../pages/Home";
import { Details } from "../pages/Dishes/Details";

export function CustomerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dishes/details/:id" element={<Details />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
