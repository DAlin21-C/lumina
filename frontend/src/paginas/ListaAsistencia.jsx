import React, { useState } from 'react';
import '../plantillascss/ListaAsistencia.css';

function ListaAsistencia() {
    // Estado para el texto del buscador
    const [busqueda, setBusqueda] = useState("");

    // Datos de ejemplo para las tarjetas
    const [grupos] = useState([
        { grado: "1", grupo: "A", especialidad: "" },
        { grado: "3", grupo: "A", especialidad: "Agropecuario" },
        { grado: "5", grupo: "A", especialidad: "Programación" },
        { grado: "5", grupo: "A", especialidad: "Sist.P.Pecuario" },
        { grado: "3", grupo: "A", especialidad: "Ofimatica" },
        { grado: "1", grupo: "F", especialidad: "" },
        { grado: "3", grupo: "A", especialidad: "Programación" },
        { grado: "5", grupo: "A", especialidad: "Contabilidad" },
        { grado: "3", grupo: "A", especialidad: "Agropecuario" },
    ]);

    // Lógica de filtrado en tiempo real
    const gruposFiltrados = grupos.filter((item) => {
        const termino = busqueda.toLowerCase();
        return (
            item.grado.toLowerCase().includes(termino) ||
            item.grupo.toLowerCase().includes(termino) ||
            item.especialidad.toLowerCase().includes(termino)
        );
    });

    return (
        <div className="contenedor-principal-listas">
            {/* Encabezado: Título y Buscador Estilo Figma */}
            <header className="header-listas">
                <div className="banner-titulo-verde">
                    <h2> <span className="icono-folder">📂</span> Listas de Asistencia</h2>
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

            {/* Grid de tarjetas */}
            <div className="grid-contenedor-tarjetas">
                {gruposFiltrados.length > 0 ? (
                    gruposFiltrados.map((item, index) => (
                        <div className="tarjeta-clase" key={index}>
                            {/* Espaciador para centrado visual */}
                            <div className="espaciador-izquierdo"></div>

                            <div className="texto-tarjeta">
                                <span className="grado-grupo">{item.grado} "{item.grupo}"</span>
                                {item.especialidad && (
                                    <span className="especialidad-texto">{item.especialidad}</span>
                                )}
                            </div>

                            <div className="acciones-verticales">
                                <button className="btn-descarga" title="Descargar lista">
                                    📥
                                </button>
                                <button className="btn-vista" title="Ver detalles">
                                    👁️
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
        </div>
    );
}

export default ListaAsistencia;