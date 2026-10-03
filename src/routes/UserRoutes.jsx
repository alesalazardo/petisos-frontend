import { Routes, Route } from "react-router-dom";

import ProtectedRoutes from "../routes/ProtectedRoutes";
import ClientDashboard from "../pages/ClientDashboard";

export default function UserRoutes({ user, onLogout }) {
  return (
    <Routes>
      <Route element={<ProtectedRoutes user={user} allowedRoles={["tutor", "client"]} />}>
        <Route
          path="/client-dashboard"
          element={<ClientDashboard user={user} onLogout={onLogout} />}
        />
      </Route>
    </Routes>
  );
}