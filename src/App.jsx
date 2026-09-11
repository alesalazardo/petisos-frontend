import { useState, useEffect } from 'react';
import { api } from './api/apiService';
import TutorForm from './components/TutorForm';
import TutorList from './components/TutorList';
import MascotaForm from './components/MascotaForm';
import MascotaList from './components/MascotaList';

export default function App() {
  const [activeTab, setActiveTab] = useState('tutores');
  const [tutores, setTutores] = useState([]);
  const [mascotas, setMascotas] = useState([]);
  
  const [tutorEdit, setTutorEdit] = useState(null);
  const [mascotaEdit, setMascotaEdit] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    cargarDatos();
  }, []);

  const cargarDatos = async () => {
    try {
      setError(null);
      const dataTutores = await api.getTutores();
      const dataMascotas = await api.getMascotas();
      setTutores(dataTutores);
      setMascotas(dataMascotas);
    } catch (err) {
      setError(err.message);
    }
  };

  // --- MÉTODOS TUTOR ---
  const handleSaveTutor = async (data) => {
    try {
      setError(null);
      if (tutorEdit) {
        await api.updateTutor(tutorEdit.id, data);
      } else {
        await api.createTutor(data);
      }
      setTutorEdit(null);
      cargarDatos();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDeleteTutor = async (id) => {
    if (!confirm('¿Eliminar tutor? Se borrarán sus mascotas asociadas en cascada.')) return;
    try {
      setError(null);
      await api.deleteTutor(id);
      cargarDatos();
    } catch (err) {
      setError(err.message);
    }
  };

  // --- MÉTODOS MASCOTA ---
  const handleSaveMascota = async (data) => {
    try {
      setError(null);
      if (mascotaEdit) {
        await api.updateMascota(mascotaEdit.id, data);
      } else {
        await api.createMascota(data);
      }
      setMascotaEdit(null);
      cargarDatos();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDeleteMascota = async (id) => {
    if (!confirm('¿Eliminar mascota?')) return;
    try {
      setError(null);
      await api.deleteMascota(id);
      cargarDatos();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container">
      <h1>🐾 Petisos - Panel de Control Veterinaria</h1>

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
            onEdit={(t) => setTutorEdit(t)} 
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
            onEdit={(m) => setMascotaEdit(m)} 
            onDelete={handleDeleteMascota} 
          />
        </>
      )}
    </div>
  );
}