import React, { useState, useMemo } from 'react';
import * as XLSX from 'xlsx';
import '../plantillascss/ListaDatos.css';

function ListaDatos() {
    const [busqueda, setBusqueda] = useState("");
    const [mostrarModal, setMostrarModal] = useState(false);
    const [nombreArchivo, setNombreArchivo] = useState("");
    const [datosExcel, setDatosExcel] = useState([]);
    const [excelSeleccionado, setExcelSeleccionado] = useState(""); // Para la descarga
    const [cargando, setCargando] = useState(false);

    // 🔹 Datos de los grupos
    const [grupos] = useState([
        { grado: "1", grupo: "A", especialidad: "General", excel: "/excel/prueba1.xlsx" },
        { grado: "3", grupo: "A", especialidad: "Agropecuario", excel: "/excel/prueba1.xlsx" },
        { grado: "5", grupo: "A", especialidad: "Programación", excel: "/excel/prueba1.xlsx" },
        { grado: "5", grupo: "A", especialidad: "Sist.P.Pecuario", excel: "/excel/prueba1.xlsx" },
        { grado: "3", grupo: "A", especialidad: "Ofimática", excel: "/excel/prueba1.xlsx" },
        { grado: "1", grupo: "F", especialidad: "General", excel: "/excel/prueba1.xlsx" },
        { grado: "3", grupo: "A", especialidad: "Programación", excel: "/excel/prueba1.xlsx" },
        { grado: "5", grupo: "A", especialidad: "Contabilidad", excel: "/excel/prueba1.xlsx" }
    ]);

    // 🔹 Lógica para leer el Excel
    const leerExcel = async (ruta) => {
        setCargando(true);
        try {
            const respuesta = await fetch(ruta);
            const arrayBuffer = await respuesta.arrayBuffer();
            const libro = XLSX.read(arrayBuffer);
            const nombreHoja = libro.SheetNames[0];
            const hoja = libro.Sheets[nombreHoja];
            const json = XLSX.utils.sheet_to_json(hoja, { header: 1 });
            setDatosExcel(json);
        } catch (error) {
            console.error("Error leyendo el Excel:", error);
            setDatosExcel([["Error al cargar el contenido"]]);
        }
        setCargando(false);
    };

    // 🔹 Abrir Modal (Vista)
    const abrirModal = (item) => {
        const nombreRef = `${item.grado}° "${item.grupo}" - ${item.especialidad || "General"}`;
        setNombreArchivo(nombreRef);
        setExcelSeleccionado(item.excel);
        setMostrarModal(true);
        leerExcel(item.excel);
    };

    const cerrarModal = () => {
        setMostrarModal(false);
        setDatosExcel([]);
        setExcelSeleccionado("");
    };

    // 🔹 Función para Descargar
    const descargarExcel = (ruta) => {
        const link = document.createElement("a");
        link.href = ruta;
        link.setAttribute("download", "Lista_Asistencia.xlsx");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // 🔹 Filtro
    const gruposFiltrados = useMemo(() => {
        const termino = busqueda.toLowerCase().trim();
        return grupos.filter(item =>
            item.grado.includes(termino) ||
            item.grupo.toLowerCase().includes(termino) ||
            item.especialidad.toLowerCase().includes(termino)
        );
    }, [busqueda, grupos]);

    return (
        <div className="contenedor-principal-listas">
            <header className="header-listas">
                <div className="banner-titulo-verde">
                    <h2>📂 Listas de Datos</h2>
                </div>
                <div className="search-wrapper">
                    <div className="search-container">
                        <span className="search-icon">🔍</span>
                        <input
                            type="text"
                            placeholder="Buscar por grado, grupo o especialidad..."
                            className="search-input"
                            value={busqueda}
                            onChange={(e) => setBusqueda(e.target.value)}
                        />
                    </div>
                </div>
            </header>

            {/* 🔹 TARJETAS */}
            <div className="grid-contenedor-tarjetas">
                {gruposFiltrados.length > 0 ? (
                    gruposFiltrados.map((item, index) => (
                        <div className="tarjeta-clase" key={index}>
                            <div className="espaciador-izquierdo"></div>
                            <div className="texto-tarjeta">
                                <span className="grado-grupo">
                                    {item.grado}° "{item.grupo}"
                                </span>
                                {item.especialidad && (
                                    <span className="especialidad-texto">
                                        {item.especialidad}
                                    </span>
                                )}
                            </div>
                            <div className="acciones-verticales">
                                {/* 👁️ VER (Llama al Modal de Excel) */}
                                <button
                                    className="btn-vista"
                                    onClick={() => abrirModal(item)}
                                    title="Ver lista"
                                >
                                    👁️
                                </button>
                                {/* 📥 DESCARGAR */}
                                <button
                                    className="btn-descarga"
                                    onClick={() => descargarExcel(item.excel)}
                                    title="Descargar archivo"
                                >
                                    📥
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="sin-resultados">
                        No se encontraron grupos que coincidan con "{busqueda}"
                    </div>
                )}
            </div>

            {/* 🔹 MODAL CON VISTA PREVIA ESTILO EXCEL */}
            {mostrarModal && (
                <div className="modal-overlay" onClick={cerrarModal}>
                    <div className="modal-box modal-excel-grande" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <span>📊 {nombreArchivo}</span>
                            <button className="btn-cerrar-x" onClick={cerrarModal}>✕</button>
                        </div>

                        <div className="modal-body scroll-excel">
                            {cargando ? (
                                <div className="loader">Cargando datos...</div>
                            ) : (
                                <table className="tabla-previa-excel">
                                    <thead>
                                    <tr>
                                        <th className="excel-header-index"></th>
                                        {datosExcel[0]?.map((_, index) => (
                                            <th key={index} className="excel-header-col">
                                                {String.fromCharCode(65 + index)}
                                            </th>
                                        ))}
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {datosExcel.map((fila, i) => (
                                        <tr key={i}>
                                            <td className="excel-row-index">{i + 1}</td>
                                            {fila.map((celda, j) => (
                                                <td key={j} className="excel-cell">{celda}</td>
                                            ))}
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            )}
                        </div>

                        <div className="modal-footer">
                            <button className="btn-cerrar" onClick={cerrarModal}>Cerrar Vista</button>
                            <button className="btn-descargar-modal" onClick={() => descargarExcel(excelSeleccionado)}>
                                📥 Descargar Excel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ListaDatos;