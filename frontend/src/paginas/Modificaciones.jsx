import React, { useState } from 'react';
import '../plantillascss/Modificaciones.css';

function Modificaciones() {
    // Estado para manejar los datos de cada fila de forma independiente
    const [datosFilas, setDatosFilas] = useState([
        { id: 1, grado: '', grupo: '', especialidad: '' },
        { id: 2, grado: '', grupo: '', especialidad: '' },
        { id: 3, grado: '', grupo: '', especialidad: '' },
        { id: 4, grado: '', grupo: '', especialidad: '' },
        { id: 5, grado: '', grupo: '', especialidad: '' },
    ]);

    // Función para actualizar el grado y resetear campos dependientes
    const manejarCambioGrado = (id, nuevoGrado) => {
        const nuevasFilas = datosFilas.map((fila) => {
            if (fila.id === id) {
                return {
                    ...fila,
                    grado: nuevoGrado,
                    grupo: '',
                    especialidad: nuevoGrado === "1" ? "N/A" : "" // Si es 1°, ponemos N/A
                };
            }
            return fila;
        });
        setDatosFilas(nuevasFilas);
    };

    return (
        <div className="modificaciones-container">
            <div className="banner-ovalado-verde">
                <h2>M O D I F I C A C I O N E S</h2>
            </div>

            <div className="tabla-wrapper">
                <table className="tabla-modificaciones">
                    <thead>
                    <tr>
                        <th>Número de control</th>
                        <th>Nombre</th>
                        <th>Apellido paterno</th>
                        <th>Apellido materno</th>
                        <th>Semestre</th>
                        <th>Grupo</th>
                        <th>Especialidad</th>
                    </tr>
                    </thead>
                    <tbody>
                    {datosFilas.map((fila) => (
                        <tr key={fila.id}>
                            <td><input type="text" className="input-celda" /></td>
                            <td><input type="text" className="input-celda" /></td>
                            <td><input type="text" className="input-celda" /></td>
                            <td><input type="text" className="input-celda" /></td>
                            <td>
                                <select
                                    className="select-celda"
                                    value={fila.grado}
                                    onChange={(e) => manejarCambioGrado(fila.id, e.target.value)}
                                >
                                    <option value="">Seleccionar</option>
                                    <option value="1">1°</option>
                                    <option value="2">2°</option>
                                    <option value="3">3°</option>
                                    <option value="4">4°</option>
                                    <option value="5">5°</option>
                                    <option value="6">6°</option>
                                </select>
                            </td>
                            <td>
                                <select className="select-celda">
                                    <option value="">Seleccionar</option>
                                    {/* Grupos de A-F para 1°, A-B para el resto */}
                                    {fila.grado === "1" ? (
                                        <>
                                            <option>A</option><option>B</option><option>C</option>
                                            <option>D</option><option>E</option><option>F</option>
                                        </>
                                    ) : (
                                        <>
                                            <option>A</option><option>B</option>
                                        </>
                                    )}
                                </select>
                            </td>
                            <td>
                                {/* Si es primer grado, el select se deshabilita */}
                                <select
                                    className="select-celda"
                                    disabled={fila.grado === "1"}
                                    value={fila.grado === "1" ? "N/A" : fila.especialidad}
                                    onChange={(e) => {
                                        const nuevas = datosFilas.map(f => f.id === fila.id ? {...f, especialidad: e.target.value} : f);
                                        setDatosFilas(nuevas);
                                    }}
                                >
                                    {fila.grado === "1" ? (
                                        <option value="N/A">Sin Especialidad</option>
                                    ) : (
                                        <>
                                            <option value="">Seleccionar</option>
                                            <option>Programación</option>
                                            <option>Ofimática</option>
                                            <option>Sistemas de P.P</option>
                                            <option>Agropecuario</option>
                                            <option>Contabilidad</option>
                                        </>
                                    )}
                                </select>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Modificaciones;