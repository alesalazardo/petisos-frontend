import { useState, useEffect } from "react";

export default function MascotaForm({
  mascotaActual,
  tutores,
  onSave,
  onCancel,
}) {
  const [formData, setFormData] = useState({
    nombre: "",
    especie: "",
    raza: "",
    fechaNacimiento: "",
    color: "",
    descripcion: "",
    tutorId: "",
  });

  useEffect(() => {
    if (mascotaActual) {
      setFormData({
        ...mascotaActual,
        tutorId: mascotaActual.tutor?.id || "",
      });
    } else {
      setFormData({
        nombre: "",
        especie: "",
        raza: "",
        fechaNacimiento: "",
        color: "",
        descripcion: "",
        tutorId: "",
      });
    }
  }, [mascotaActual]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      tutor: { id: Number(formData.tutorId) },
    };
    onSave(payload);
  };

  return (
    <form onSubmit={handleSubmit} className="card">
      <h3>{mascotaActual ? "Editar Mascota" : "Nueva Mascota"}</h3>
      <div className="form-grid">
        <input
          name="nombre"
          placeholder="Nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
        <input
          name="especie"
          placeholder="Especie (Perro/Gato)"
          value={formData.especie}
          onChange={handleChange}
          required
        />
        <input
          name="raza"
          placeholder="Raza"
          value={formData.raza}
          onChange={handleChange}
          required
        />
        <input
          name="fechaNacimiento"
          type="date"
          value={formData.fechaNacimiento}
          onChange={handleChange}
          required
        />
        <input
          name="color"
          placeholder="Color"
          value={formData.color}
          onChange={handleChange}
          required
        />

        <select
          name="tutorId"
          value={formData.tutorId}
          onChange={handleChange}
          required
        >
          <option value="">-- Seleccionar Tutor --</option>
          {tutores.map((t) => (
            <option key={t.id} value={t.id}>
              {t.nombre} {t.apellido}
            </option>
          ))}
        </select>
      </div>
      <textarea
        name="descripcion"
        placeholder="Descripción médica o notas..."
        value={formData.descripcion}
        onChange={handleChange}
        style={{ marginBottom: "10px" }}
      />
      <div style={{ display: "flex", gap: "10px" }}>
        <button type="submit" className="btn-primary">
          Guardar
        </button>
        {mascotaActual && (
          <button type="button" className="btn-secondary" onClick={onCancel}>
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
}
