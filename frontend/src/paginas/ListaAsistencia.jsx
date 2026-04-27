import React, { useState } from 'react';
import '../plantillascss/ListaAsistencia.css';
import { LuEye, LuFileDown } from "react-icons/lu";
import { FiSearch } from "react-icons/fi";

function ListaAsistencia() {
    // 🔹 Buscador
    const [busqueda, setBusqueda] = useState("");

    // 🔹 Modal
    const [mostrarModal, setMostrarModal] = useState(false);
    const [pdfSeleccionado, setPdfSeleccionado] = useState("");
    const [pdfSeleccionadoNombre, setPdfSeleccionadoNombre] = useState("");

    // 🔹 Datos
    const [grupos] = useState([
        { id: 1, grado: "1", grupo: "A", especialidad: "General", pdf: "/pdf/pdf1.pdf" },
        { id: 2, grado: "3", grupo: "A", especialidad: "Agropecuario", pdf: "/pdf/pdf1.pdf" },
        { id: 3, grado: "5", grupo: "A", especialidad: "Programación", pdf: "/pdf/pdf1.pdf" },
        { id: 4, grado: "5", grupo: "A", especialidad: "Sist.P.Pecuario", pdf: "/pdf/pdf1.pdf" },
        { id: 5, grado: "3", grupo: "A", especialidad: "Ofimatica", pdf: "/pdf/pdf1.pdf" },
        { id: 6, grado: "1", grupo: "F", especialidad: "General", pdf: "/pdf/pdf1.pdf" },
        { id: 7, grado: "3", grupo: "A", especialidad: "Programación", pdf: "/pdf/pdf1.pdf" },
        { id: 8, grado: "5", grupo: "A", especialidad: "Contabilidad", pdf: "/pdf/pdf1.pdf" },
        { id: 9, grado: "3", grupo: "A", especialidad: "Agropecuario", pdf: "/pdf/pdf1.pdf" },
    ]);

    // 🔹 Filtro
    const gruposFiltrados = grupos.filter((item) => {
        const termino = busqueda.toLowerCase();
        return (
            item.grado.toLowerCase().includes(termino) ||
            item.grupo.toLowerCase().includes(termino) ||
            item.especialidad.toLowerCase().includes(termino)
        );
    });

    // 🔹 Abrir PDF
    const abrirPDF = (item) => {
        setPdfSeleccionado(item.pdf);
        setPdfSeleccionadoNombre(`${item.grado}° ${item.grupo} - ${item.especialidad}`);
        setMostrarModal(true);
    };

    // 🔹 Cerrar modal
    const cerrarModal = () => {
        setMostrarModal(false);
        setPdfSeleccionado("");
        setPdfSeleccionadoNombre("");
    };

    // 🔹 Descargar PDF
    const descargarPDF = (rutaPDF) => {
        const link = document.createElement("a");
        link.href = rutaPDF;
        link.download = "lista_asistencia.pdf";
        link.click();
    };

    return (
        <div className="contenedor-principal-listas">

            {/* 🔹 HEADER */}
            <header className="header-listas">
                <div className="banner-titulo-verde">
                    <h2>📂 Listas de Asistencia</h2>
                </div>

                <div className="search-container">
                    <FiSearch className="search-icon" />
                    <input
                        type="text"
                        placeholder="Buscar por grado o carrera..."
                        className="search-input"
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                    />
                </div>
            </header>

            {/* 🔹 GRID DE TARJETAS */}
            <div className="grid-contenedor-tarjetas">
                {gruposFiltrados.length > 0 ? (
                    gruposFiltrados.map((item, index) => (
                        // ... dentro del map de gruposFiltrados
                        <div className="tarjeta-clase" key={item.id || index}>
                            <div className="texto-tarjeta">
                                <span className="badge-grado">{item.grado}° {item.grupo}</span>
                                <span className="especialidad-texto">{item.especialidad || "General"}</span>
                            </div>

                            <div className="acciones-horizontales">
                                <button
                                    className="btn-accion-mini btn-vista-verde"
                                    onClick={() => abrirPDF(item)}
                                    title="Visualizar"
                                >
                                    <LuEye className="icon-embed" />
                                </button>

                                <button
                                    className="btn-accion-mini btn-descarga-verde"
                                    onClick={() => descargarPDF(item.pdf)}
                                    title="Descargar"
                                >
                                    <LuFileDown className="icon-embed" />
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

            {/* 🔥 MODAL VISOR PDF */}
            {mostrarModal && (
                <div className="modal-overlay" onClick={cerrarModal}>
                    <div className="modal-box" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <span>{pdfSeleccionadoNombre}</span>
                            <button className="btn-cerrar-x" onClick={cerrarModal}>✕</button>
                        </div>

                        <div className="modal-body">
                            <iframe
                                src={pdfSeleccionado}
                                className="visor-pdf"
                                title="PDF Viewer"
                            ></iframe>
                        </div>

                        <div className="modal-footer">
                            <button className="btn-cerrar" onClick={cerrarModal}>Cerrar</button>
                            <button
                                className="btn-descargar-verde-footer"
                                onClick={() => descargarPDF(pdfSeleccionado)}
                            >
                                <LuFileDown style={{marginRight: '8px'}}/> Descargar PDF
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ListaAsistencia;