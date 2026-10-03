import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import ProtectedRoutes from "../routes/ProtectedRoutes";
import AdminDashboard from "../pages/AdminDashboard";
import TutorForm from "../components/TutorForm";
import TutorList from "../components/TutorList";
import MascotaForm from "../components/MascotaForm";
import MascotaList from "../components/MascotaList";

export default function AdminRoutes({ user, onLogout, petisosData }) {
  const [activeTab, setActiveTab] = useState("tutores");

  const {
    tutores,
    mascotas,
    tutorEdit,
    setTutorEdit,
    mascotaEdit,
    setMascotaEdit,
    error,
    handleSaveTutor,
    handleDeleteTutor,
    handleSaveMascota,
    handleDeleteMascota,
  } = petisosData;

  return (
    <Routes>
      <Route element={<ProtectedRoutes user={user} allowedRoles={["admin"]} />}>
        <Route
          path="/admin-dashboard"
          element={
            <AdminDashboard user={user} onLogout={onLogout}>
              <div className="container">
                <header
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "20px",
                  }}
                >
                  <h1>🐾 Petisos - Panel de Control</h1>
                  <button className="btn-secondary" onClick={onLogout}>
                    Cerrar Sesión
                  </button>
                </header>

                {error && <div className="error-msg">⚠️ {error}</div>}

                <div className="tabs">
                  <button
                    className={`tab-btn ${activeTab === "tutores" ? "active" : ""}`}
                    onClick={() => setActiveTab("tutores")}
                  >
                    Gestión de Tutores
                  </button>
                  <button
                    className={`tab-btn ${activeTab === "mascotas" ? "active" : ""}`}
                    onClick={() => setActiveTab("mascotas")}
                  >
                    Gestión de Mascotas
                  </button>
                </div>

                {activeTab === "tutores" ? (
                  <>
                    <TutorForm
                      tutorActual={tutorEdit}
                      onSave={handleSaveTutor}
                      onCancel={() => setTutorEdit(null)}
                    />
                    <TutorList
                      tutores={tutores}
                      onEdit={setTutorEdit}
                      onDelete={handleDeleteTutor}
                    />
                  </>
                ) : (
                  <>
                    <MascotaForm
                      mascotaActual={mascotaEdit}
                      tutores={tutores}
                      onSave={handleSaveMascota}
                      onCancel={() => setMascotaEdit(null)}
                    />
                    <MascotaList
                      mascotas={mascotas}
                      onEdit={setMascotaEdit}
                      onDelete={handleDeleteMascota}
                    />
                  </>
                )}
              </div>
            </AdminDashboard>
          }
        />
      </Route>
    </Routes>
  );
}