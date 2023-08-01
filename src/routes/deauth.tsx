import Login from "../pages/login";
import { Route, Routes } from "react-router-dom";

function DeauthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="*" element={<h1>Not Found!</h1>} />
    </Routes>
  );
}

export default DeauthRoutes;
