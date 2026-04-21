import React, { useState } from 'react';
import '../plantillascss/ListaAsistencia.css';

function ListaAsistencia() {

    // 🔹 Buscador
    const [busqueda, setBusqueda] = useState("");

    // 🔹 Modal
    const [mostrarModal, setMostrarModal] = useState(false);
    const [pdfSeleccionado, setPdfSeleccionado] = useState("");
    const [pdfSeleccionadoNombre, setPdfSeleccionadoNombre] = useState("");

    // 🔹 Datos
    const [grupos] = useState([
        { grado: "1", grupo: "A", especialidad: "", pdf: "/pdf/pdf1.pdf" },
        { grado: "3", grupo: "A", especialidad: "Agropecuario", pdf: "/pdfs/lista2.pdf" },
        { grado: "5", grupo: "A", especialidad: "Programación", pdf: "/pdfs/lista3.pdf" },
        { grado: "5", grupo: "A", especialidad: "Sist.P.Pecuario", pdf: "/pdfs/lista4.pdf" },
        { grado: "3", grupo: "A", especialidad: "Ofimatica", pdf: "/pdfs/lista5.pdf" },
        { grado: "1", grupo: "F", especialidad: "", pdf: "/pdfs/lista6.pdf" },
        { grado: "3", grupo: "A", especialidad: "Programación", pdf: "/pdfs/lista7.pdf" },
        { grado: "5", grupo: "A", especialidad: "Contabilidad", pdf: "/pdfs/lista8.pdf" },
        { grado: "3", grupo: "A", especialidad: "Agropecuario", pdf: "/pdfs/lista9.pdf" },
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
    const abrirPDF = (rutaPDF, nombre) => {
        setPdfSeleccionado(rutaPDF);
        setPdfSeleccionadoNombre(nombre);
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

                <div className="search-wrapper">
                    <div className="search-container">
                        <span className="search-icon">🔍</span>
                        <input
                            type="text"
                            placeholder="Buscar"
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
                                    {item.grado} "{item.grupo}"
                                </span>

                                {item.especialidad && (
                                    <span className="especialidad-texto">
                                        {item.especialidad}
                                    </span>
                                )}
                            </div>

                            <div className="acciones-verticales">

                                {/* 👁️ VER */}
                                <button
                                    className="btn-vista"
                                    onClick={() =>
                                        abrirPDF(
                                            item.pdf,
                                            `${item.grado} "${item.grupo}" - ${item.especialidad || "General"}`
                                        )
                                    }
                                >
                                    👁️
                                </button>

                                {/* 📥 DESCARGAR */}
                                <button
                                    className="btn-descarga"
                                    onClick={() => descargarPDF(item.pdf)}
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

            {/* 🔥 MODAL VISOR PDF */}
            {mostrarModal && (
                <div className="modal-overlay">
                    <div className="modal-box">

                        {/* HEADER */}
                        <div className="modal-header">
                            <span>
                                Lista de Asistencia - {pdfSeleccionadoNombre}
                            </span>

                            <button className="btn-cerrar-x" onClick={cerrarModal}>
                                ✕
                            </button>
                        </div>

                        {/* BODY */}
                        <div className="modal-body">

                            <iframe
                                src={pdfSeleccionado}
                                className="visor-pdf"
                                title="PDF"
                            ></iframe>

                            <div className="fallback">
                                <p>Tu navegador no puede mostrar PDFs embebidos.</p>

                                <button
                                    className="btn-abrir"
                                    onClick={() => window.open(pdfSeleccionado, "_blank")}
                                >
                                    👁️ Abrir PDF en nueva pestaña
                                </button>
                            </div>

                        </div>

                        {/* FOOTER */}
                        <div className="modal-footer">

                            <button className="btn-cerrar" onClick={cerrarModal}>
                                Cerrar
                            </button>

                            <button
                                className="btn-descargar"
                                onClick={() => descargarPDF(pdfSeleccionado)}
                            >
                                ⬇ Descargar PDF
                            </button>

                        </div>

                    </div>
                </div>
            )}

        </div>
    );
}

export default ListaAsistencia;