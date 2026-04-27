import React, { useState, useMemo } from 'react';
import * as XLSX from 'xlsx';
import { FaEye, FaSearch, FaTimes, FaTable, FaFileDownload } from 'react-icons/fa';
import '../plantillascss/ListaDatos.css';

function ListaDatos() {
    const [busqueda, setBusqueda] = useState("");
    const [mostrarModal, setMostrarModal] = useState(false);
    const [nombreArchivo, setNombreArchivo] = useState("");
    const [datosExcel, setDatosExcel] = useState([]);
    const [cargando, setCargando] = useState(false);

    // Asegúrate de que las rutas en 'excel' sean correctas dentro de tu carpeta public
    const [grupos] = useState([
        { id: 1, grado: "1", grupo: "A", especialidad: "General", excel: "/excel/prueba1.xlsx" },
        { id: 2, grado: "3", grupo: "A", especialidad: "Agropecuario", excel: "/excel/prueba1.xlsx" },
        { id: 3, grado: "5", grupo: "A", especialidad: "Programación", excel: "/excel/prueba1.xlsx" },
        { id: 4, grado: "1", grupo: "F", especialidad: "General", excel: "/excel/prueba1.xlsx" },
        { id: 5, grado: "5", grupo: "B", especialidad: "Contabilidad", excel: "/excel/prueba1.xlsx" }
    ]);

    // --- FUNCIÓN CRÍTICA: LEE EL ARCHIVO Y LLENA LA TABLA ---
    const leerExcel = async (ruta) => {
        setCargando(true);
        try {
            const respuesta = await fetch(ruta);
            if (!respuesta.ok) throw new Error("No se pudo encontrar el archivo Excel");

            const arrayBuffer = await respuesta.arrayBuffer();
            const libro = XLSX.read(arrayBuffer, { type: 'array' });

            // Obtenemos la primera hoja
            const nombreHoja = libro.SheetNames[0];
            const hoja = libro.Sheets[nombreHoja];

            // Convertimos a JSON con formato de matriz (arreglo de arreglos)
            const json = XLSX.utils.sheet_to_json(hoja, { header: 1, defval: "" });

            setDatosExcel(json);
        } catch (error) {
            console.error("Error:", error);
            setDatosExcel([["Error", "No se encontraron datos en el archivo seleccionado"]]);
        }
        setCargando(false);
    };

    const descargarExcel = () => {
        if (datosExcel.length === 0) return;
        const ws = XLSX.utils.aoa_to_sheet(datosExcel);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Datos");
        XLSX.writeFile(wb, `${nombreArchivo}.xlsx`);
    };

    const abrirModal = (item) => {
        setNombreArchivo(`${item.grado}° "${item.grupo}" - ${item.especialidad}`);
        setMostrarModal(true);
        leerExcel(item.excel); // Aquí se dispara la carga de datos
    };

    const gruposFiltrados = useMemo(() => {
        return grupos.filter(item =>
            item.grado.includes(busqueda) ||
            item.especialidad.toLowerCase().includes(busqueda.toLowerCase())
        );
    }, [busqueda, grupos]);

    return (
        <div className="lista-datos-container">
            <div className="header-seccion">
                <div className="titulo-wrapper">
                    <FaTable className="icon-main" />
                    <h2>Listas de Datos</h2>
                </div>
                <div className="search-bar-modern">
                    <FaSearch className="search-icon-svg" />
                    <input
                        type="text"
                        placeholder="Filtrar por grado o carrera..."
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                    />
                </div>
            </div>

            <div className="grid-tarjetas-compactas">
                {gruposFiltrados.map((item) => (
                    <div className="card-mini" key={item.id}>
                        <div className="card-info">
                            <span className="badge-grado">{item.grado}° {item.grupo}</span>
                            <p className="txt-especialidad">{item.especialidad}</p>
                        </div>
                        <button className="btn-view-only" onClick={() => abrirModal(item)}>
                            <FaEye />
                        </button>
                    </div>
                ))}
            </div>

            {mostrarModal && (
                <div className="modal-overlay-modern" onClick={() => setMostrarModal(false)}>
                    <div className="modal-content-excel" onClick={e => e.stopPropagation()}>
                        <div className="modal-header-excel">
                            <div className="header-info">
                                <FaTable style={{marginRight: '10px'}}/>
                                <h3>{nombreArchivo}</h3>
                            </div>
                            <button className="close-x" onClick={() => setMostrarModal(false)}><FaTimes /></button>
                        </div>

                        <div className="modal-body-excel">
                            {cargando ? (
                                <div className="spinner-container">
                                    <div className="spinner"></div>
                                    <p>Cargando información...</p>
                                </div>
                            ) : (
                                <div className="excel-table-wrapper">
                                    <table className="excel-table-view">
                                        <thead>
                                        <tr>
                                            <th className="excel-idx"></th>
                                            {/* Generamos letras de columnas (A, B, C...) dinámicamente */}
                                            {datosExcel[0]?.map((_, index) => (
                                                <th key={index} className="excel-col-letter">
                                                    {String.fromCharCode(65 + index)}
                                                </th>
                                            ))}
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {datosExcel.map((fila, i) => (
                                            <tr key={i}>
                                                <td className="excel-row-num">{i + 1}</td>
                                                {fila.map((celda, j) => (
                                                    <td key={j}>{celda}</td>
                                                ))}
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>

                        <div className="modal-footer-excel">
                            <button className="btn-descargar-excel" onClick={descargarExcel}>
                                <FaFileDownload /> Descargar Excel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ListaDatos;