import Feed from "../pages/Feed";
import { Route, Routes } from "react-router-dom";
import Profile from "../pages/Profile";

function AuthRoutes() {
  return (
    <Routes>
      <Route path="/feed" element={<Feed />} />
      <Route path="/me" element={<Profile />} />

      <Route path="*" element={<h1>Not Found!</h1>} />
    </Routes>
  );
}

export default AuthRoutes;
