const API_BASE_URL = "http://localhost:8080/api";

// Función genérica para manejar peticiones HTTP y errores
async function request(endpoint, options = {}) {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    const message =
      typeof errorData === "object"
        ? Object.values(errorData).join(", ")
        : "Ocurrió un error en la solicitud";
    throw new Error(message || `Error HTTP: ${response.status}`);
  }

  // Si la respuesta es 204 No Content (DELETE), retornamos null
  if (response.status === 204) return null;

  return await response.json();
}

export const api = {
  // Tutores
  getTutores: () => request("/tutores"),
  createTutor: (data) =>
    request("/tutores", { method: "POST", body: JSON.stringify(data) }),
  updateTutor: (id, data) =>
    request(`/tutores/${id}`, { method: "PUT", body: JSON.stringify(data) }),
  deleteTutor: (id) => request(`/tutores/${id}`, { method: "DELETE" }),

  // Mascotas
  getMascotas: () => request("/mascotas"),
  createMascota: (data) =>
    request("/mascotas", { method: "POST", body: JSON.stringify(data) }),
  updateMascota: (id, data) =>
    request(`/mascotas/${id}`, { method: "PUT", body: JSON.stringify(data) }),
  deleteMascota: (id) => request(`/mascotas/${id}`, { method: "DELETE" }),
};
