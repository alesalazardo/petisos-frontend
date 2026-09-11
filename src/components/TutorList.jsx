export default function TutorList({ tutores, onEdit, onDelete }) {
  return (
    <div className="card">
      <h3>Lista de Tutores</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Contacto</th>
            <th>Ciudad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {tutores.map((t) => (
            <tr key={t.id}>
              <td>{t.id}</td>
              <td>
                {t.nombre} {t.apellido}
              </td>
              <td>
                {t.email}
                <br />
                <small>{t.telefono}</small>
              </td>
              <td>{t.ciudad}</td>
              <td>
                <button
                  className="btn-secondary"
                  onClick={() => onEdit(t)}
                  style={{ marginRight: "5px" }}
                >
                  Editar
                </button>
                <button className="btn-danger" onClick={() => onDelete(t.id)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
