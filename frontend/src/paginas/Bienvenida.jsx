import React, { useState } from 'react'; // Agregamos useState aquí
import '../plantillascss/Bienvenida.css';

function Bienvenida({ alCerrarSesion }) {
    // Estado para controlar qué submenú se muestra al hacer hover
    const [submenuAbierto, setSubmenuAbierto] = useState(null);

    return (
        <div className="dashboard-container">
            <aside className="sidebar">
                <div className="sidebar-logo">
                    <img src="/Lumina1.png" alt="Lumina" />
                </div>

                <nav className="sidebar-nav">
                    {/* INICIO */}
                    <div className="nav-item active">
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

                    {/* REGISTRAR */}
                    <div
                        className="nav-item"
                        onMouseEnter={() => setSubmenuAbierto('registrar')}
                        onMouseLeave={() => setSubmenuAbierto(null)}
                    >
                        <img src="/agregar-usuario.png" className="sidebar-icon" alt="Registrar" />
                        <span>Registrar</span>

                        {submenuAbierto === 'registrar' && (
                            <div className="submenu-floating">
                                <div className="submenu-item">
                                    <img src="/agregar-usuario.png" className="sidebar-icon" alt="Alumno" />
                                    <span>Alumno</span>
                                </div>
                                <div className="submenu-item">
                                    <img src="/agregar-usuario.png" className="sidebar-icon" alt="Administrador" />
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
                                <div className="submenu-item">
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
                    <header className="welcome-banner">
                        <div className="camaleon-header">
                            <img src="/camaleon3.png" alt="Camaleón" />
                        </div>
                        <div className="header-titles">
                            <h1>B i e n v e n i d o</h1>
                            <p>¿Qué vamos a hacer el día de hoy?</p>
                        </div>
                    </header>
                    <div className="workspace">
                        {/* Contenido dinámico aquí */}
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Bienvenida;