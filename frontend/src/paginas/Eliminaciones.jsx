import React, { useState } from 'react';
import { FaUserMinus } from 'react-icons/fa';
import '../plantillascss/Eliminaciones.css';

function Eliminaciones() {
    // Simulación de datos traídos de una base de datos o API
    // En un caso real, podrías usar un useEffect para llenar este estado
    const [usuarios, setUsuarios] = useState([
        { id: 1, tipo: 'Alumno', nombre: 'Sonia', paterno: 'Mendieta', materno: 'Pérez', semestre: '8vo', grupo: 'A', especialidad: 'Sistemas' },
        { id: 2, tipo: 'Administrador', nombre: 'Juan', paterno: 'García', materno: 'López', semestre: 'N/A', grupo: 'N/A', especialidad: 'Programación' },
        { id: 3, tipo: 'Alumno', nombre: 'Ana', paterno: 'Rodríguez', materno: 'Sánchez', semestre: '2do', grupo: 'C', especialidad: 'Ofimática' },
    ]);

    // Función para manejar la eliminación (lógica para el botón)
    const eliminarRegistro = (id) => {
        if (window.confirm("¿Estás seguro de que deseas eliminar este registro?")) {
            setUsuarios(usuarios.filter(u => u.id !== id));
            // Aquí iría tu llamada al backend: axios.delete(...)
        }
    };

    return (
        <div className="eliminaciones-container">
            <div className="banner-ovalado">
                <h1>E L I M I N A C I O N E S</h1>
            </div>

            <div className="tabla-card">
                <table className="tabla-datos">
                    <thead>
                    <tr>
                        <th>Tipo de usuario</th>
                        <th>Nombre</th>
                        <th>Apellido paterno</th>
                        <th>Apellido materno</th>
                        <th>Semestre</th>
                        <th>Grupo</th>
                        <th>Especialidad</th>
                        <th>Eliminar</th>
                    </tr>
                    </thead>
                    <tbody>
                    {usuarios.length > 0 ? (
                        usuarios.map((u) => (
                            <tr key={u.id}>
                                <td className="celda-lectura">{u.tipo}</td>
                                <td className="celda-lectura">{u.nombre}</td>
                                <td className="celda-lectura">{u.paterno}</td>
                                <td className="celda-lectura">{u.materno}</td>
                                <td className="celda-lectura">{u.semestre}</td>
                                <td className="celda-lectura">{u.grupo}</td>
                                <td className="celda-lectura">{u.especialidad}</td>
                                <td className="columna-eliminar">
                                    <button
                                        className="btn-borrar"
                                        onClick={() => eliminarRegistro(u.id)}
                                        title="Eliminar registro"
                                    >
                                        <FaUserMinus />
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="8" style={{ padding: '20px', color: '#435127' }}>
                                No hay registros disponibles.
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Eliminaciones;