import React, { useState } from 'react'; // Agregamos useState aquí
import '../plantillascss/Bienvenida.css';
import RegistroAdministrador from './RegistroAdministrador'; //
import RegistrarAlumno from "./RegistrarAlumno";
import ListaAsistencia from "./ListaAsistencia.jsx";

function Bienvenida({ alCerrarSesion }) {
    // Estado para controlar qué submenú se muestra al hacer hover
    const [submenuAbierto, setSubmenuAbierto] = useState(null);
    // Estado para decidir qué mostrar en el contenido principal
    const [vistaActual, setVistaActual] = useState('inicio');

    return (
        <div className="dashboard-container">
            <aside className="sidebar">
                <div className="sidebar-logo">
                    <img src="/Lumina1.png" alt="Lumina" />
                </div>

                <nav className="sidebar-nav">
                    {/* INICIO */}
                    {/* Botón Inicio: Regresa a la vista inicial */}
                    <div className="nav-item active" onClick={() => setVistaActual('inicio')}>
                        <img src="/hogar.png" className="sidebar-icon" alt="Inicio" />
                        <span>Inicio</span>
                    </div>

                    {/* MODIFICAR */}
                    <div
                        className="nav-item"
                        onMouseEnter={() => setSubmenuAbierto('modificar')}
                        onMouseLeave={() => setSubmenuAbierto(null)}
                    >
                        <img src="/lapiz.png" className="sidebar-icon" alt="Modificar" />
                        <span>Modificar</span>

                        {submenuAbierto === 'modificar' && (
                            <div className="submenu-floating">
                                <div className="submenu-item">
                                    <img src="/lapiz.png" className="sidebar-icon" alt="Actualizar" />
                                    <span>Actualizar</span>
                                </div>
                                <div className="submenu-item">
                                    <img src="/quitar-usuario.png" className="sidebar-icon" alt="Eliminar" />
                                    <span>Eliminar</span>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Menú Registrar */}
                    <div className="nav-item"
                         onMouseEnter={() => setSubmenuAbierto('registrar')}
                         onMouseLeave={() => setSubmenuAbierto(null)}>
                        <img src="/agregar-usuario.png" className="sidebar-icon" alt="Registrar" />
                        <span>Registrar</span>

                        {submenuAbierto === 'registrar' && (
                            <div className="submenu-floating">
                                {/* 2. Clic en Alumno cambia la vista */}
                                <div className="submenu-item" onClick={() => setVistaActual('registro_alumno')}>
                                    <img src="/agregar-usuario.png" className="sidebar-icon" />
                                    <span>Alumno</span>
                                </div>
                                <div className="submenu-item" onClick={() => setVistaActual('registro_admin')}>
                                    <img src="/agregar-usuario.png" className="sidebar-icon" />
                                    <span>Administrador</span>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* LISTAS */}
                    <div
                        className="nav-item"
                        onMouseEnter={() => setSubmenuAbierto('listas')}
                        onMouseLeave={() => setSubmenuAbierto(null)}
                    >
                        <img src="/descripcion-general.png" className="sidebar-icon" alt="Listas" />
                        <span>Listas</span>

                        {submenuAbierto === 'listas' && (
                            <div className="submenu-floating">
                                <div className="submenu-item">
                                    <img src="/descripcion-general.png" className="sidebar-icon" alt="Datos" />
                                    <span>Datos</span>
                                </div>
                                {/* CAMBIO: Aseguramos que el onClick cambie a la vista 'lista_asistencia' */}
                                <div className="submenu-item" onClick={() => setVistaActual('lista_asistencia')}>
                                    <img src="/descripcion-general.png" className="sidebar-icon" alt="Asistencia" />
                                    <span>Asistencia</span>
                                </div>
                            </div>
                        )}
                    </div>
                </nav>

                <div className="nav-item logout-btn" onClick={alCerrarSesion}>
                    <img src="/energia.png" className="sidebar-icon" alt="cerrar" />
                    <span>Cerrar sesión</span>
                </div>
            </aside>

            <main className="main-content">
                <div className="content-card">
                    {/* 3. Lógica de Renderizado Condicional Mejorada */}
                    {vistaActual === 'inicio' && (
                        <header className="welcome-banner">
                            <div className="camaleon-header">
                                <img src="/camaleon3.png" alt="Camaleón" />
                            </div>
                            <div className="header-titles">
                                <h1>B i e n v e n i d o</h1>
                                <p>¿Qué vamos a hacer el día de hoy?</p>
                            </div>
                        </header>
                    )}

                    {/* Espacio donde se cargan los formularios */}
                    <div className="workspace">
                        {vistaActual === 'registro_admin' && (
                            <RegistroAdministrador alRegresar={() => setVistaActual('inicio')} />
                        )}

                        {vistaActual === 'registro_alumno' && (
                            <RegistrarAlumno alRegresar={() => setVistaActual('inicio')} />
                        )}

                        {vistaActual === 'lista_asistencia' && (
                            <ListaAsistencia alRegresar={() => setVistaActual('inicio')} />
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Bienvenida;