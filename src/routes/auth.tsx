import Feed from "../pages/Feed";
import { Route, Routes } from "react-router-dom";

function AuthRoutes() {
  return (
    <Routes>
      <Route path="/feed" element={<Feed />} />
      <Route path="*" element={<h1>Not Found!</h1>} />
    </Routes>
  );
}

export default AuthRoutes;
