import Login from "../pages/login";
import { Route, Routes } from "react-router-dom";
import Register from "../pages/register";

function DeauthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<h1>Not Found!</h1>} />
    </Routes>
  );
}

export default DeauthRoutes;
