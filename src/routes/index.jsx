import { Routes, Route, Navigate } from "react-router-dom";
import { NotFound } from "../pages/NotFound";
import { Register } from "../pages/Register";
import { ForgotPassword } from "../pages/ForgotPassword";
import { ResetPassword } from "../pages/ResetPassword";

export default function () {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/password/reset/:token" element={<ResetPassword />} />
      <Route path="/password/reset/" element={<ForgotPassword />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}