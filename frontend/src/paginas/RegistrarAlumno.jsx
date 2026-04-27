import React, { useState, useRef, useEffect } from 'react';
import '../plantillascss/RegistrarAlumno.css';
import { LuChevronDown } from "react-icons/lu";

// Componente Interno para el Select Personalizado
function CustomSelect({ label, opciones, alCambiar, valor }) {
    const [abierto, setAbierto] = useState(false);
    const [subir, setSubir] = useState(false);
    const contenedorRef = useRef(null);

    // Detectar si el menú debe abrirse hacia arriba o hacia abajo
    useEffect(() => {
        if (abierto && contenedorRef.current) {
            const rect = contenedorRef.current.getBoundingClientRect();
            const espacioDebajo = window.innerHeight - rect.bottom;
            // Si hay menos de 250px de espacio abajo, se abre hacia arriba
            setSubir(espacioDebajo < 250);
        }
    }, [abierto]);

    return (
        <div className="custom-select-container" ref={contenedorRef}>
            <div
                className={`select-disparador ${abierto ? 'activo' : ''}`}
                onClick={() => setAbierto(!abierto)}
                onBlur={() => setTimeout(() => setAbierto(false), 200)}
                tabIndex="0"
            >
                <span className={valor ? 'texto-seleccionado' : 'texto-placeholder'}>
                    {valor || label}
                </span>
                <LuChevronDown className={`icono-flecha-select ${abierto ? 'girar' : ''}`} />
            </div>

            {abierto && (
                <ul className={`lista-opciones-redondeada ${subir ? 'posicion-arriba' : 'posicion-abajo'}`}>
                    {opciones.map((opt) => (
                        <li
                            key={opt}
                            onClick={() => { alCambiar(opt); setAbierto(false); }}
                            className={valor === opt ? 'opcion-activa' : ''}
                        >
                            {opt}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

function RegistrarAlumno({ alRegresar }) {
    const [codigo, setCodigo] = useState("012345678");

    // Estados para el formulario
    const [especialidad, setEspecialidad] = useState("");
    const [grado, setGrado] = useState("");
    const [grupo, setGrupo] = useState("");

    return (
        <div className="registro-alumno-full-container">
            <div className="titulo-ovalado-verde_h">
                <h2>Registrar Alumno</h2>
            </div>

            <div className="registro-alumno-layout">
                <div className="tarjeta-formulario-crema">
                    <input type="text" placeholder="Numero de control" className="input-ovalado" />
                    <input type="text" placeholder="Nombre" className="input-ovalado" />
                    <input type="text" placeholder="Apellido Paterno" className="input-ovalado" />
                    <input type="text" placeholder="Apellido Materno" className="input-ovalado" />

                    <CustomSelect
                        label="Especialidad"
                        opciones={["Programación", "Ofimática", "SPP", "Agropecuario", "Contabilidad"]}
                        valor={especialidad}
                        alCambiar={setEspecialidad}
                    />

                    <CustomSelect
                        label="Grado"
                        opciones={["1° Semestre", "2° Semestre", "3° Semestre", "4° Semestre", "5° Semestre", "6° Semestre"]}
                        valor={grado}
                        alCambiar={setGrado}
                    />

                    <CustomSelect
                        label="Grupo"
                        opciones={["A", "B", "C", "D", "E", "F"]}
                        valor={grupo}
                        alCambiar={setGrupo}
                    />

                    <input type="tel" placeholder="Teléfono" className="input-ovalado" />
                </div>

                <div className="panel-derecho-barcode">
                    <div className="contenedor-barcode">
                        <img src="/barcode_sim.png" alt="Código de barras" className="barcode-img" />
                        <p className="barcode-text">{codigo}</p>
                    </div>
                    <button className="btn-generar-negro">Generar código</button>
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