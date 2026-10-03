import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import { usePetisosData } from "./hooks/usePetisosData";

// Rutas Públicas
import LandingPage from "./components/Landing";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Navbar from "./components/Navbar";

// Módulos de Rutas Desensamblados
import AdminRoutes from "./routes/AdminRoutes";
import UserRoutes from "./routes/UserRoutes";

export default function App() {
  const [user, setUser] = useState(null);
  const petisosData = usePetisosData();

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* ================= RUTAS PÚBLICAS ================= */}
        <Route
          path="/"
          element={
            <>
              
              <LandingPage />
            </>
          }
        />

        <Route
          path="/login"
          element={
            !user ? (
              <Login onSuccess={(userData) => setUser(userData)} />
            ) : (
              <Navigate
                to={user.rol === "admin" ? "/admin-dashboard" : "/client-dashboard"}
                replace
              />
            )
          }
        />

        <Route
          path="/register"
          element={
            !user ? (
              <Register onSuccess={(userData) => setUser(userData)} />
            ) : (
              <Navigate
                to={user.rol === "admin" ? "/admin-dashboard" : "/client-dashboard"}
                replace
              />
            )
          }
        />

        {/* ================= MODULOS ENRUTADORES PRIVADOS ================= */}
        <Route
          path="/admin-dashboard/*"
          element={
            <AdminRoutes
              user={user}
              onLogout={handleLogout}
              petisosData={petisosData}
            />
          }
        />

        <Route
          path="/client-dashboard/*"
          element={<UserRoutes user={user} onLogout={handleLogout} />}
        />

        {/* Redirección 404 */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}