import { useState, useEffect } from 'react';
import { api } from '../api/apiService';

export function usePetisosData() {
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
      const [dataTutores, dataMascotas] = await Promise.all([
        api.getTutores(),
        api.getMascotas()
      ]);
      setTutores(dataTutores);
      setMascotas(dataMascotas);
    } catch (err) {
      setError(err.message);
    }
  };

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
    if (!confirm('¿Eliminar tutor? Se borrarán sus mascotas asociadas.')) return;
    try {
      setError(null);
      await api.deleteTutor(id);
      cargarDatos();
    } catch (err) {
      setError(err.message);
    }
  };

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

  return {
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
  };
}