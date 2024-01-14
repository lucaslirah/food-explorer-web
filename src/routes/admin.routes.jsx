import { Routes, Route, Navigate } from "react-router-dom";

import { Home } from "../pages/Home";
import { Details } from "../pages/Dishes/Details";
import { Add } from "../pages/Dishes/Add";
import { Edit } from "../pages/Dishes/Edit";

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dishes/details/:id" element={<Details />} />
      <Route path="/dishes/create" element={<Add />} />
      <Route path="/dishes/edit/:id" element={<Edit />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
