export default function MascotaList({ mascotas, onEdit, onDelete }) {
  return (
    <div className="card">
      <h3>Lista de Mascotas</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Especie / Raza</th>
            <th>F. Nacimiento</th>
            <th>Tutor</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {mascotas.map((m) => (
            <tr key={m.id}>
              <td>{m.id}</td>
              <td><strong>{m.nombre}</strong> ({m.color})</td>
              <td>{m.especie} - {m.raza}</td>
              <td>{m.fechaNacimiento}</td>
              <td>{m.tutor ? `${m.tutor.nombre} ${m.tutor.apellido}` : 'Sin tutor'}</td>
              <td>
                <button className="btn-secondary" onClick={() => onEdit(m)} style={{ marginRight: '5px' }}>Editar</button>
                <button className="btn-danger" onClick={() => onDelete(m.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}