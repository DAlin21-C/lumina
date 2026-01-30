import React from 'react';
import '../plantillascss/Modificaciones.css';

function Modificaciones() {
    // Simulación de datos para la tabla
    const filas = [1, 2, 3, 4, 5];

    return (
        <div className="modificaciones-container">
            {/* Banner superior ovalado */}
            <div className="banner-ovalado-verde">
                <h2>M O D I F I C A C I O N E S</h2>
            </div>

            <div className="tabla-wrapper">
                <table className="tabla-modificaciones">
                    <thead>
                    <tr>
                        <th>Numero de control</th>
                        <th>Nombre</th>
                        <th>Apellido paterno</th>
                        <th>Apellido materno</th>
                        <th>Grado</th>
                        <th>Grupo</th>
                        <th>Especialidad</th>
                    </tr>
                    </thead>
                    <tbody>
                    {filas.map((fila) => (
                        <tr key={fila}>
                            <td><input type="text" className="input-celda" /></td>
                            <td><input type="text" className="input-celda" /></td>
                            <td><input type="text" className="input-celda" /></td>
                            <td><input type="text" className="input-celda" /></td>
                            <td>
                                <select className="select-celda">
                                    <option>Seleccionar</option>
                                    <option>1°</option>
                                    <option>3°</option>
                                    <option>5°</option>
                                </select>
                            </td>
                            <td>
                                <select className="select-celda">
                                    <option>Seleccionar</option>
                                    <option>A</option>
                                    <option>B</option>
                                </select>
                            </td>
                            <td>
                                <select className="select-celda">
                                    <option>Seleccionar</option>
                                    <option>Programación</option>
                                    <option>Ofimática</option>
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