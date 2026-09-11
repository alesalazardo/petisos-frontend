import { useState } from 'react';
import { usePetisosData } from './hooks/usePetisosData';
import LandingPage from './components/Landing';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import TutorForm from './components/TutorForm';
import TutorList from './components/TutorList';
import MascotaForm from './components/MascotaForm';
import MascotaList from './components/MascotaList';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('landing'); // 'landing' | 'login' | 'register' | 'dashboard'
  const [activeTab, setActiveTab] = useState('tutores'); // 'tutores' | 'mascotas'

  // Hook que contiene toda la lógica de negocio y llamadas HTTP
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
    handleDeleteMascota
  } = usePetisosData();

  // Vista 1: Landing Page
  if (currentScreen === 'landing') {
    return <LandingPage onNavigate={setCurrentScreen} />;
  }

  // Vista 2: Inicio de Sesión
  if (currentScreen === 'login') {
    return (
      <Login 
        onSuccess={() => setCurrentScreen('dashboard')} 
        onNavigate={setCurrentScreen} 
      />
    );
  }

  // Vista 3: Registro de Usuario
  if (currentScreen === 'register') {
    return (
      <Register 
        onSuccess={() => setCurrentScreen('dashboard')} 
        onNavigate={setCurrentScreen} 
      />
    );
  }

  // Vista 4: Dashboard de Administración (Pantalla autenticada)
  return (
    <div className="container">
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1>🐾 Petisos - Panel de Control</h1>
        <button className="btn-secondary" onClick={() => setCurrentScreen('landing')}>
          Cerrar Sesión / Ir al Inicio
        </button>
      </header>

      {error && <div className="error-msg">⚠️ {error}</div>}

      <div className="tabs">
        <button 
          className={`tab-btn ${activeTab === 'tutores' ? 'active' : ''}`}
          onClick={() => setActiveTab('tutores')}
        >
          Gestión de Tutores
        </button>
        <button 
          className={`tab-btn ${activeTab === 'mascotas' ? 'active' : ''}`}
          onClick={() => setActiveTab('mascotas')}
        >
          Gestión de Mascotas
        </button>
      </div>

      {activeTab === 'tutores' ? (
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
  );
}