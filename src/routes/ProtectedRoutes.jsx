import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoutes({ user, allowedRoles }) {
  // 1. Si no hay usuario en sesión, redirigir al Login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // 2. Si el rol no pertenece a los permitidos, redirigir según su rol correspondiente
  if (allowedRoles && !allowedRoles.includes(user.rol)) {
    return <Navigate to={user.rol === "admin" ? "/admin-dashboard" : "/client-dashboard"} replace />;
  }

  // 3. Permite renderizar la ruta hija
  return <Outlet />;
}