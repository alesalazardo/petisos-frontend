// Se importan los hooks de cambio de estado.
import { useState, useEffect } from "react";

export default function TutorForm({ tutorActual, onSave, onCancel }) {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    email: "",
    ciudad: "",
  });

  useEffect(() => {
    if (tutorActual) {
      setFormData(tutorActual);
    } else {
      setFormData({
        nombre: "",
        apellido: "",
        telefono: "",
        email: "",
        ciudad: "",
      });
    }
  }, [tutorActual]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof onSave === "function") {
      onSave(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card">
      <h3>{tutorActual ? "Editar Tutor" : "Nuevo Tutor"}</h3>
      <div className="form-grid">
        <input
          name="nombre"
          placeholder="Nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
        <input
          name="apellido"
          placeholder="Apellido"
          value={formData.apellido}
          onChange={handleChange}
          required
        />
        <input
          name="telefono"
          placeholder="Teléfono"
          value={formData.telefono}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Correo"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          name="ciudad"
          placeholder="Ciudad"
          value={formData.ciudad}
          onChange={handleChange}
          required
        />
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <button type="submit" className="btn-primary">
          Guardar
        </button>
        {tutorActual && (
          <button type="button" className="btn-secondary" onClick={onCancel}>
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
}
