import React, { useState } from 'react';
import '../plantillascss/RegistrarAlumno.css';

function RegistrarAlumno({ alRegresar }) {
    const [codigo, setCodigo] = useState("012345678");

    return (
        <div className="registro-alumno-full-container">
            {/* Título en Óvalo Verde */}
            <div className="titulo-ovalado-verde_h">
                <h2>Registrar Alumno</h2>
            </div>

            <div className="registro-alumno-layout">
                {/* Panel Izquierdo: Formulario */}
                <div className="tarjeta-formulario-crema">
                    <input type="text" placeholder="Numero de control" className="input-ovalado" />
                    <input type="text" placeholder="Nombre" className="input-ovalado" />
                    <input type="text" placeholder="Apellido Paterno" className="input-ovalado" />
                    <input type="text" placeholder="Apellido Materno" className="input-ovalado" />

                    <select className="input-ovalado select-flecha">
                        <option value="" disabled selected>Especialidad</option>
                        <option value="programacion">Programación</option>
                        <option value="programacion">Ofimatica</option>
                        <option value="programacion">SPP</option>
                        <option value="programacion">Agropecuario</option>
                        <option value="programacion">Contabilidad</option>
                    </select>

                    <select className="input-ovalado select-flecha">
                        <option value="" disabled selected>Grado</option>
                        <option value="1">1° Semestre</option>
                        <option value="2">2° Semestre</option>
                        <option value="3">3° Semestre</option>
                        <option value="4">4° Semestre</option>
                        <option value="5">5° Semestre</option>
                        <option value="6">6° Semestre</option>
                    </select>

                    <select className="input-ovalado select-flecha">
                        <option value="" disabled selected >Grupo</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                        <option value="E">E</option>
                        <option value="F">F</option>
                    </select>

                    <input type="tel" placeholder="Télefono" className="input-ovalado" />
                </div>

                {/* Panel Derecho: Código de Barras y Botones */}
                <div className="panel-derecho-barcode">
                    <div className="contenedor-barcode">
                        <img src="/barcode_sim.png" alt="Código de barras" className="barcode-img" />
                        <p className="barcode-text">{codigo}</p>
                    </div>

                    <button className="btn-generar-negro">Generar codigo</button>

                    <div className="botones-inferiores">
                        <button className="btn-registrar-verde">Registrar</button>
                        <button className="btn-regresar-naranja" onClick={alRegresar}>Regresar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegistrarAlumno;